import * as bcrypt from 'bcryptjs'
import { AuthProviderType } from '../../prisma/generated/prisma/client'
import { PrismaService } from '../../src/common/prisma/prisma.service'
import { roles, usersPerRole } from './seedConfig'

export async function seedUsers(prisma: PrismaService) {
  for (const role of roles) {
    for (let i = 1; i <= usersPerRole; i++) {
      const uid = `seed-${role.toLowerCase()}-${i}`
      const email = `${role.toLowerCase()}${i}@test.com`

      const passwordHash = bcrypt.hashSync('Test123!', 10)

      await prisma.user.upsert({
        where: { uid },
        update: {},
        create: {
          uid,
          name: `${role} ${i}`,
          Credentials: {
            create: { email, passwordHash },
          },
          AuthProvider: {
            create: { type: AuthProviderType.CREDENTIALS },
          },
          [role]: {
            create: role === 'Member' ? { displayName: `${role} ${i}` } : {},
          },
        },
      })
    }
  }

  console.log('✅ Users seeded')
}
