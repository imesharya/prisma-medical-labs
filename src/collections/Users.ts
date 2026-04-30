import adminsAndUser from '@/access/adminAndUser'
import { checkRole } from '@/access/checkRole'
import type { CollectionConfig, FieldHook } from 'payload'

const protectRoles: FieldHook = ({ req, data }) => {
  const isAdmin = req.user?.role === 'admin'

  // If not admin, force role to receptionist or lower
  if (!isAdmin && data?.role === 'admin') {
    return 'receptionist' // or throw error
  }

  return data?.role
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'المستخدمين',
  },
  labels: {
    singular: 'مستخدم',
    plural: 'المستخدمين',
  },
  auth: true,
  access: {
    // This controls overall /admin dashboard access
    admin: checkRole(['admin', 'doctor', 'receptionist']),

    // Custom read access: Allow admins full read, and any authenticated user to read their OWN profile only
    read: adminsAndUser,

    // Keep these restricted to admins only (hides Users collection + blocks actions)
    create: checkRole(['admin']),
    update: checkRole(['admin']),
    delete: checkRole(['admin']),
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      saveToJWT: true,
      admin: {
        isSortable: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [protectRoles],
      },
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Doctor', value: 'doctor' },
        { label: 'Receptionist', value: 'receptionist' },
      ],
    },
  ],
}
