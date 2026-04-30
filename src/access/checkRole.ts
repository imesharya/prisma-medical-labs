import type { User } from '@/payload-types'

export const checkRole = (allowedRoles: User['role'][]) => {
  return ({ req: { user } }: { req: { user: User | null } }) => {
    if (user && allowedRoles) {
      return allowedRoles.some((role) => user.role === role)
    }
    return false
  }
}
