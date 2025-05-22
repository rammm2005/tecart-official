import type { Access, PayloadRequest } from 'payload'
import type { User } from '@/payload-types'

export const isAdminOrStaf: Access = ({ req }) => {
  const user = req.user as User | null
  return Boolean(user && (user.role === 'admin' || user.role === 'staf'))
}

export const isAdminOrStafBoolean = ({ req }: { req: PayloadRequest }) => {
  const user = req.user as User | null
  return Boolean(user && (user.role === 'admin' || user.role === 'staf'))
}
