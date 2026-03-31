export type UserRole = "Client" | "Admin" | "Vendeur"
export type UserStatus = "active" | "inactive"

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  status: UserStatus
  date: string
  orders: number
  avatar: string
  color: string
}