import { cn } from "@sglara/cn";
import { PropsWithChildren } from "react";

const Label = ({ children }: PropsWithChildren) => {
  return (
    <label className="text-sm font-bold tracking-wide text-nt-95 *:first:after:ml-0.5 *:first:after:text-pr-50 *:first:after:content-['*'] has-[input:required]:*:first:after:inline [&>input]:mt-0.5">
      {children}
    </label>
  );
};

const Description = ({
  children,
  className,
}: { className?: string } & PropsWithChildren) => {
  return (
    <span
      className={cn(
        "mt-1.5 text-xs leading-tight font-normal text-nt-80",
        className,
      )}
    >
      {children}
    </span>
  );
};

const InputDescriptor = { Label, Description };

export default InputDescriptor;
