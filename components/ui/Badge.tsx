type BadgeVariant = "active" | "inactive" | "admin" | "vendor" | "warning"

const variants: Record<BadgeVariant, string> = {
  active:   "bg-green-50 text-green-700",
  inactive: "bg-stone-100 text-stone-500",
  admin:    "bg-purple-50 text-purple-700",
  vendor:   "bg-amber-50 text-amber-700",
  warning:  "bg-red-50 text-red-600",
}

interface BadgeProps {
  variant: BadgeVariant
  label: string
}

export default function Badge({ variant, label }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {label}
    </span>
  )
}