// src/components/ui/ToggleSwitch.tsx
import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/utils";
import { thumbVariants, toggleVariants } from "./toggleVariants";

export interface ToggleSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleVariants> {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>((props, ref) => {
  const { checked = false, onCheckedChange, disabled = false, size, className, ...rest } = props;

  const handleToggle = () => {
    if (!disabled) {
      onCheckedChange?.(!checked);
    }
  };

  return (
    <button
      ref={ref}
      role='switch'
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={cn(
        toggleVariants({ size }),
        checked ? "bg-indigo-700" : "bg-gray-200",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className
      )}
      {...rest}
    >
      <span
        data-checked={checked}
        className={cn(thumbVariants({ size }))}
      />
    </button>
  );
});

ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch };
