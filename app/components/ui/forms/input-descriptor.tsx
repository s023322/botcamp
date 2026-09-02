import { cn } from "@sglara/cn";
import { PropsWithChildren } from "react";

const Label = ({ children }: PropsWithChildren) => {
  return (
    <label className="text-sm text-nt-95 *:first:after:ml-0.5 *:first:after:content-['*'] has-[input:required]:*:first:after:inline [&>input]:mt-0.5">
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
      className={cn("mt-1.5 block text-xs leading-tight text-nt-70", className)}
    >
      {children}
    </span>
  );
};

const InputDescriptor = { Label, Description };

export default InputDescriptor;
