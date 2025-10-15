import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base - Absolute minimal perfection
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold relative disabled:pointer-events-none disabled:opacity-40 outline-none transition-all duration-150 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // PRIMARY - Just perfect depth
        default:
          "bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",

        // ACCENT - Emergency (stronger shadow)
        accent:
          "bg-accent text-white shadow-[0_2px_4px_rgba(255,107,0,0.2),0_4px_8px_rgba(255,107,0,0.15)] hover:shadow-[0_4px_8px_rgba(255,107,0,0.25),0_8px_16px_rgba(255,107,0,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",

        // OUTLINE - Clean border
        outline:
          "border-2 border-border bg-background text-foreground hover:bg-secondary/50 hover:border-primary/50 active:bg-secondary active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",

        // DESTRUCTIVE - Critical
        destructive:
          "bg-destructive text-white shadow-[0_1px_2px_rgba(220,38,38,0.15),0_2px_4px_rgba(220,38,38,0.15)] hover:shadow-[0_2px_4px_rgba(220,38,38,0.2),0_4px_8px_rgba(220,38,38,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] active:translate-y-[1px] focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2",

        // GHOST - Minimal
        ghost:
          "text-foreground hover:bg-secondary active:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-1",

        // LINK - Simple
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-1",
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
