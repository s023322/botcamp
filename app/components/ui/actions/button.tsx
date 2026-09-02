import { cn } from "@sglara/cn";
import { DynamicProps } from "@/components/patterns/dynamic";
import { ElementType } from "react";

const Button = <E extends ElementType = "button">({
  variant = "ghost",
  as,
  sizeVariant = "normal",
  colorOnly,
  className,
  ...props
}: {
  variant?: "primary" | "secondary" | "outline" | "link" | "ghost";
  sizeVariant?: "normal" | "compact" | "iconNormal" | "iconCompact";
  colorOnly?: boolean;
} & DynamicProps<E>) => {
  const Component = (as || "button") as ElementType;

  return (
    <Component
      className={cn(
        "cursor-pointer select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-70",
        !colorOnly &&
          "flex items-center justify-center gap-x-1 rounded-xl border font-body text-sm whitespace-nowrap [&>svg]:size-4",
        {
          "not-active:shadow-[inset_0_-0.0625rem]":
            variant === "primary" ||
            variant === "secondary" ||
            variant === "outline",
          "border-primary-700 bg-primary-500 text-neutral-50 shadow-primary-700 hover:bg-primary-600":
            variant === "primary",
          "border-se-20 bg-se-10/50 text-nt-95 shadow-se-20 hover:bg-se-10":
            variant === "secondary",
          "border-nt-20 bg-nt-10/50 text-nt-95 shadow-nt-20 hover:bg-nt-10":
            variant === "outline",
          "border-transparent bg-transparent":
            variant === "ghost" || variant === "link",
          "text-se-90 hover:bg-se-95/5": variant === "link",
          "text-nt-95 hover:bg-nt-95/5": variant === "ghost",
        },
        !colorOnly && {
          "h-8 px-3 pt-px *:first:[svg]:-ml-1 *:last:[svg]:-mr-1 [&>svg]:-mt-0.75":
            sizeVariant === "normal",
          "h-6 px-2.5 pt-px *:first:[svg]:-ml-1.5 *:last:[svg]:-mr-1.5 [&>svg]:-mt-0.5":
            sizeVariant === "compact",
          "h-8 px-1.75": sizeVariant === "iconNormal",
          "h-6 px-0.75": sizeVariant === "iconCompact",
        },
        className,
      )}
      {...props}
    />
  );
};

export default Button;
