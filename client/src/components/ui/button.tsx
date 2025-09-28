import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "rounded-md hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enhanced Resend-style pill button variants with inner shadows and glow effects
        pill: "rounded-full border border-gray-800/60 bg-black/40 text-gray-300 backdrop-blur-sm hover:border-gray-700/80 hover:bg-gray-950/60 hover:text-gray-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300",
        "pill-gradient": "rounded-full border border-transparent bg-gradient-to-r from-black/80 to-gray-900/80 text-white backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_4px_12px_rgba(34,211,238,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300",
        "pill-primary": "rounded-full bg-white text-black font-semibold border-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-gray-50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_4px_20px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300",
        "pill-secondary": "rounded-full border border-gray-700/60 bg-black/20 text-gray-300 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-gray-600/80 hover:bg-gray-900/40 hover:text-gray-200 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_4px_16px_rgba(34,211,238,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        // Pill button sizes
        "pill-sm": "h-9 px-4",
        "pill-md": "h-11 px-6",
        "pill-lg": "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
