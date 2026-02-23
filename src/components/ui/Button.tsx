// src/components/ui/button.tsx
import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils";
import { buttonVariants } from "./ButtonVariants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  textContent?: string;
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
  iconSize?: number;
  isDisabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ textContent, isDisabled = false, variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={isDisabled}
        {...props}
      >
        {textContent}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
