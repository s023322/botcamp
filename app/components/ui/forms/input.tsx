import { cn } from "@sglara/cn";
import { ComponentPropsWithRef } from "react";

const Input = ({
  sizeVariant = "normal",
  className,
  type,
  ...props
}: {
  sizeVariant?: "normal" | "compact";
} & ComponentPropsWithRef<"input">) => {
  return (
    <input
      className={cn(
        "flex items-center justify-center gap-x-1 rounded-xl border border-nt-30 bg-nt-05 font-body text-base whitespace-nowrap text-nt-95 select-none *:translate-y-px placeholder:text-nt-50 hover:not-focus:bg-nt-10 focus:outline-2 focus:outline-se-50 [&>svg]:size-4",
        {
          "h-9 px-3 pt-1 *:first:[svg]:-ml-1 *:last:[svg]:-mr-1":
            sizeVariant === "normal",
          "h-7 px-1.5 *:first:[svg]:-ml-0.5 *:last:[svg]:-mr-0.5":
            sizeVariant === "compact",
        },
        className,
      )}
      type={type}
      {...props}
    />
  );
};

export default Input;
