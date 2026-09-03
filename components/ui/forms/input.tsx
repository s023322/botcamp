import { cn } from "@sglara/cn";
import { ComponentPropsWithRef } from "react";

const Input = ({
  className,
  type,
  ...props
}: ComponentPropsWithRef<"input">) => {
  return (
    <input
      className={cn(
        "flex h-9 items-center justify-center gap-x-1 rounded-xl border border-nt-30 bg-nt-05 px-3 pt-1 font-body text-base whitespace-nowrap text-nt-95 select-none *:translate-y-px placeholder:text-nt-50 hover:not-focus:bg-nt-10 focus:outline-2 focus:outline-se-50 *:first:[svg]:-ml-1 *:last:[svg]:-mr-1 [&>svg]:size-4",
        className,
      )}
      type={type}
      {...props}
    />
  );
};

export default Input;
