import { User } from "@/types/admin"

export const AVATAR_COLORS = [
  "#C0A882", "#8B5E3C", "#3A7D44",
  "#3A5F8A", "#B86A0A", "#6a3db8",
]

export const mockUsers: User[] = [
  { id: 1, name: "Amara Diallo",      email: "amara@furniro.ci",   role: "Client",  status: "active",   date: "12 Jan 2025", orders: 8,  avatar: "AD", color: AVATAR_COLORS[0] },
  { id: 2, name: "Kofi Mensah",       email: "kofi@furniro.ci",    role: "Admin",   status: "active",   date: "03 Fév 2025", orders: 0,  avatar: "KM", color: AVATAR_COLORS[1] },
  { id: 3, name: "Fatou Sy",          email: "fatou@furniro.ci",   role: "Admin",   status: "active",   date: "20 Fév 2025", orders: 0,  avatar: "FS", color: AVATAR_COLORS[4] },
  { id: 4, name: "Ibrahim Traoré",    email: "ibrahim@furniro.ci", role: "Client",  status: "inactive", date: "15 Mar 2025", orders: 2,  avatar: "IT", color: AVATAR_COLORS[2] },
  { id: 5, name: "Nadia Bamba",       email: "nadia@furniro.ci",   role: "Vendeur", status: "active",   date: "01 Avr 2025", orders: 14, avatar: "NB", color: AVATAR_COLORS[3] },
  { id: 6, name: "Moussa Coulibaly",  email: "moussa@furniro.ci",  role: "Client",  status: "inactive", date: "10 Avr 2025", orders: 1,  avatar: "MC", color: AVATAR_COLORS[5] },
  { id: 7, name: "Awa Touré",         email: "awa@furniro.ci",     role: "Client",  status: "active",   date: "22 Avr 2025", orders: 5,  avatar: "AT", color: AVATAR_COLORS[0] },
]