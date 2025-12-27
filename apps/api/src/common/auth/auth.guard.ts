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
 */
interface JwtPayload {
  uid: string
  iat?: number
  exp?: number
}

/**
 * Requête enrichie avec l'utilisateur authentifié
 */
interface AuthenticatedRequest extends Request {
  user?: JwtPayload & {
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

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext<{ req: AuthenticatedRequest }>().req

    this.authenticateUser(req)
    return this.authorizeUser(req, context)
  }

  /**
   * Vérifie et décode le JWT
   */
  private authenticateUser(req: AuthenticatedRequest): void {
    const bearerHeader = req.headers?.authorization
    const token = bearerHeader?.split(' ')[1]

    if (!token) {
      throw new UnauthorizedException('No token provided.')
    }

    let payload: JwtPayload

    try {
      payload = this.jwtService.verify<JwtPayload>(token)
    } catch {
      throw new UnauthorizedException('Invalid token.')
    }

    if (!payload.uid) {
      throw new UnauthorizedException('Invalid token payload.')
    }

    req.user = {
      ...payload,
      roles: [],
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

    const requiredRoles = this.getMetadata<Role[]>('roles', context)

    const userRoles = await this.getUserRoles(req.user.uid)
    req.user.roles = userRoles

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
   * Récupération des rôles utilisateur
   */
  private async getUserRoles(uid: string): Promise<Role[]> {
    const roles: Role[] = ['user'] // rôle par défaut

    const admin = await this.prisma.admin.findUnique({
      where: { uid },
    })

    if (admin) {
      roles.push('admin')
    }

    return roles
  }
}
