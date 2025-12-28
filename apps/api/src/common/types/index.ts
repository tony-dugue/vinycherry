export type Role = 'admin' | 'member'

export type GetUserType = {
  uid: string
  roles: Role[]
}
