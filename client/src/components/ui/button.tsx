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
        // Enhanced Resend-style pill button variants using centralized tokens
        pill: "rounded-full glass-button text-secondary hover:text-primary hover:-translate-y-0.5 transition-all duration-300 hover-lift-gentle",
        "pill-gradient": "rounded-full border border-transparent bg-gradient-to-r from-secondary to-muted text-primary backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(var(--primary),0.2),0_4px_12px_rgba(var(--primary),0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300",
        "pill-primary": "rounded-full bg-foreground text-background font-semibold border-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:bg-foreground/90 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_4px_20px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 hover-lift-moderate button-ripple hover-shimmer",
        "pill-secondary": "rounded-full glass-button text-tertiary hover:text-secondary hover:shadow-[0_0_0_1px_rgba(var(--primary),0.15),0_4px_16px_rgba(var(--primary),0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300 hover-lift-gentle hover-shimmer",
        "pill-ghost": "rounded-full border border-border/60 bg-transparent text-secondary backdrop-blur-sm hover:border-primary/30 hover:bg-secondary/10 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 hover-lift-gentle",
        "pill-accent": "rounded-full bg-primary text-background font-medium border-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_8px_rgba(var(--primary),0.25)] hover:bg-primary/90 hover:shadow-[0_4px_16px_rgba(var(--primary),0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 hover-lift-moderate",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        // Standardized pill button sizes with consistent padding ratios
        "pill-xs": "h-8 px-3 text-xs",
        "pill-sm": "h-9 px-4 text-sm",
        "pill-md": "h-11 px-6 text-sm",
        "pill-lg": "h-12 px-8 text-base",
        "pill-xl": "h-14 px-10 text-lg",
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
