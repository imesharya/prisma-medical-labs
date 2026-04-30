import { Access } from 'payload'
import { checkRole } from '@/access/checkRole'

const adminsAndUser: Access = ({ req: { user }, id }): boolean => {
  if (!user) return false // Unauthenticated: no access
  if (checkRole(['admin'])({ req: { user } })) return true // Admins: full read access
  return id === user.id // Others: only if the ID matches their own
}

export default adminsAndUser
