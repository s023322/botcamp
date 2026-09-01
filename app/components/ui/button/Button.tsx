import Shortcut from "@/components/ui/shortcut/Shortcut";
import { cn } from "@sglara/cn";
import { DynamicProps } from "@/types/dynamic";
import { ElementType } from "react";

const Button = <E extends ElementType = "button">({
  variant = "ghost",
  as,
  size = "normal",
  shortcut,
  className,
  children,
  ...props
}: {
  variant?: "primary" | "secondary" | "ghost";
  size?: "normal" | "compact" | "iconNormal" | "iconCompact";
  shortcut?: string;
} & DynamicProps<E>) => {
  const Component = (as || "button") as ElementType;

  return (
    <Component
      className={cn(
        "font-body flex cursor-pointer items-center justify-center gap-x-1 rounded-xl border text-sm whitespace-nowrap text-neutral-50 select-none active:translate-y-px [&>svg]:size-4",
        {
          "font-bold not-active:shadow-[inset_0_-0.0625rem]":
            variant === "primary" || variant === "secondary",
          "border-primary-800 bg-primary-600 shadow-primary-800 hover:bg-primary-700":
            variant === "primary",
          "border-neutral-700 bg-neutral-900 shadow-neutral-700 hover:bg-neutral-800":
            variant === "secondary",
          "hover:bg-gs-50/15 border-transparent bg-transparent text-neutral-50":
            variant === "ghost",
        },
        {
          "h-8 px-3 pt-px *:first:[svg]:-ml-1 *:last:[svg]:-mr-1":
            size === "normal",
          "h-6 px-1.5 *:first:[svg]:-ml-0.5 *:last:[svg]:-mr-0.5":
            size === "compact",
          "h-8 px-1.75": size === "iconNormal",
          "h-6 px-0.75": size === "iconCompact",
        },
        className,
      )}
      {...props}
    >
      {children}
      {shortcut && <Shortcut className="-mr-1" keys={shortcut} />}
    </Component>
  );
};

export default Button;
