interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "danger"
  children: React.ReactNode
}

const variants = {
  primary: "bg-[#8B5E3C] hover:bg-[#2C1A0E] text-white",
  ghost:   "bg-transparent border border-[#E8DDD2] text-[#9B8878] hover:bg-[#F0EBE3] hover:text-[#3D2B1A]",
  danger:  "bg-red-50 border border-red-200 text-red-600 hover:bg-red-100",
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}