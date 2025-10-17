import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Foundation - Architectural precision for maritime professionals
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold relative isolate disabled:pointer-events-none disabled:opacity-40 outline-none transition-all duration-200 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // PRIMARY - Command authority (like ship bridge controls)
        default:
          "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_3px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.08),0_6px_12px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] active:translate-y-px before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white/[0.06] after:to-transparent focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        // ACCENT - Emergency response (beacon authority)
        accent:
          "bg-accent text-white shadow-[0_0_0_1px_rgba(255,107,0,0.2),0_2px_6px_rgba(255,107,0,0.25),0_4px_12px_rgba(255,107,0,0.2)] hover:shadow-[0_0_0_1px_rgba(255,107,0,0.3),0_4px_8px_rgba(255,107,0,0.3),0_8px_18px_rgba(255,107,0,0.25)] active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] active:translate-y-px before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white/[0.08] after:to-transparent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        // OUTLINE - Secondary precision (instrument panel)
        outline:
          "border-2 border-border bg-background text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:bg-secondary/30 hover:border-primary/40 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_2px_4px_rgba(0,0,0,0.04)] active:bg-secondary/50 active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        // DESTRUCTIVE - Critical action
        destructive:
          "bg-destructive text-white shadow-[0_0_0_1px_rgba(220,38,38,0.15),0_2px_4px_rgba(220,38,38,0.2),0_4px_8px_rgba(220,38,38,0.15)] hover:shadow-[0_0_0_1px_rgba(220,38,38,0.2),0_3px_6px_rgba(220,38,38,0.25),0_6px_12px_rgba(220,38,38,0.2)] active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] active:translate-y-px before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white/[0.06] after:to-transparent focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        // SECONDARY - Alternative action
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.04)] hover:bg-secondary/80 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_4px_rgba(0,0,0,0.06)] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        // GHOST - Minimal interaction
        ghost:
          "text-foreground hover:bg-secondary/60 active:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-1 focus-visible:ring-offset-background",

        // LINK - Text action
        link: "text-primary h-auto p-0 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-md gap-1.5",
        default: "h-11 px-6 text-sm rounded-lg gap-2",
        lg: "h-14 px-8 text-base rounded-lg gap-2.5",
        xl: "h-16 px-10 text-lg rounded-xl gap-3",
        icon: "size-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
