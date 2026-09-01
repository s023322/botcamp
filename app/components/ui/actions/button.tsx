import { cn } from "@sglara/cn";
import { DynamicProps } from "@/components/patterns/dynamic";
import { ElementType } from "react";

const Button = <E extends ElementType = "button">({
  variant = "ghost",
  as,
  sizeVariant = "normal",
  className,
  ...props
}: {
  variant?: "primary" | "secondary" | "ghost";
  sizeVariant?: "normal" | "compact" | "iconNormal" | "iconCompact";
} & DynamicProps<E>) => {
  const Component = (as || "button") as ElementType;

  return (
    <Component
      className={cn(
        "flex cursor-pointer items-center justify-center gap-x-1 rounded-xl border font-body text-sm whitespace-nowrap text-nt-95 select-none active:translate-y-px [&>svg]:size-4",
        {
          "font-bold tracking-wide not-active:shadow-[inset_0_-0.0625rem]":
            variant === "primary" || variant === "secondary",
          "border-pr-50 bg-pr-40 shadow-pr-50 hover:bg-pr-30 dark:border-pr-20 dark:bg-pr-50 dark:shadow-pr-20 dark:hover:bg-pr-40":
            variant === "primary",
          "border-nt-30 bg-nt-10 shadow-nt-30 hover:bg-nt-95/10":
            variant === "secondary",
          "border-transparent bg-transparent text-nt-95 hover:bg-nt-95/10":
            variant === "ghost",
        },
        {
          "h-8 px-3 pt-0.5 *:first:[svg]:-ml-1 *:last:[svg]:-mr-1 [&>svg]:-mt-0.75":
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
