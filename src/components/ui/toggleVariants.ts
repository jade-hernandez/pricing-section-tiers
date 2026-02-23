import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-8 w-14"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export const thumbVariants = cva(
  "inline-block transform rounded-full bg-white transition-transform shadow-sm",
  {
    variants: {
      size: {
        sm: ["h-3.5 w-3.5", "translate-x-0.5 data-[checked=true]:translate-x-5"],
        md: ["h-5 w-5", "translate-x-0.5 data-[checked=true]:translate-x-5"],
        lg: ["h-7 w-7", "translate-x-0.5 data-[checked=true]:translate-x-6"]
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
