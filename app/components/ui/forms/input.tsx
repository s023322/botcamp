import { cn } from "@sglara/cn";
import { ComponentPropsWithRef } from "react";

const Input = ({
  sizeVariant = "normal",
  className,
  ...props
}: {
  sizeVariant?: "normal" | "compact";
} & ComponentPropsWithRef<"input">) => {
  return (
    <input
      className={cn(
        "flex items-center justify-center gap-x-1 rounded-xl border border-nt-30 bg-nt-10 font-body text-base font-normal whitespace-nowrap text-nt-95 select-none *:translate-y-px placeholder:font-normal placeholder:text-nt-50 hover:bg-nt-95/10 focus:outline-2 focus:outline-pr-50 [&>svg]:size-4",
        {
          "h-9 px-3 pt-0.5 *:first:[svg]:-ml-1 *:last:[svg]:-mr-1":
            sizeVariant === "normal",
          "h-7 px-1.5 *:first:[svg]:-ml-0.5 *:last:[svg]:-mr-0.5":
            sizeVariant === "compact",
        },
        className,
      )}
      {...props}
    />
  );
};

export default Input;
