import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { PrismaService } from '../prisma/prisma.service'
import { Role } from '../types'

/**
 * Payload contenu dans le JWT
 * 👉 adapte si tu ajoutes d'autres champs dans le token
 */
interface AuthJwtPayload {
  uid: string
  iat?: number
  exp?: number
}

/**
 * Requête enrichie avec l'utilisateur authentifié
 */
interface AuthenticatedRequest extends Request {
  user?: AuthJwtPayload & {
    roles?: Role[]
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext<{ req: AuthenticatedRequest }>().req

    this.authenticateUser(req)
    return this.authorizeUser(req, context)
  }

  /**
   * Vérifie et décode le JWT
   */
  private authenticateUser(req: AuthenticatedRequest): void {
    const authorizationHeader = req.headers?.authorization

    if (!authorizationHeader) {
      throw new UnauthorizedException('No authorization header.')
    }

    const token = authorizationHeader.split(' ')[1]

    if (!token) {
      throw new UnauthorizedException('No token provided.')
    }

    try {
      const user = this.jwtService.verify<AuthJwtPayload>(token)
      req.user = user
    } catch (error) {
      console.error('Token validation error:', error)
      throw new UnauthorizedException('Invalid token.')
    }
  }

  /**
   * Vérifie les rôles requis
   */
  private async authorizeUser(
    req: AuthenticatedRequest,
    context: ExecutionContext,
  ): Promise<boolean> {
    if (!req.user) {
      throw new UnauthorizedException()
    }

    const userRoles = await this.getUserRoles(req.user.uid)
    req.user.roles = userRoles

    const requiredRoles = this.getMetadata<Role[]>('roles', context)

    if (!requiredRoles || requiredRoles.length === 0) {
      return true
    }

    return requiredRoles.some((role) => userRoles.includes(role))
  }

  /**
   * Récupération des métadonnées (roles)
   */
  private getMetadata<T>(
    key: string,
    context: ExecutionContext,
  ): T | undefined {
    return this.reflector.getAllAndOverride<T>(key, [
      context.getHandler(),
      context.getClass(),
    ])
  }

  /**
   * Récupération des rôles utilisateur depuis la base
   */
  private async getUserRoles(uid: string): Promise<Role[]> {
    const roles: Role[] = []

    const admin = await this.prisma.admin.findUnique({
      where: { uid },
    })

    if (admin) {
      roles.push('admin')
    }

    // 👉 Ajouter ici d'autres rôles si besoin
    // ex:
    // const manager = await this.prisma.manager.findUnique({ where: { uid } })
    // manager && roles.push('manager')

    return roles
  }
}
