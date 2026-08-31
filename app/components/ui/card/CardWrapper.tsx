import { cn } from "@sglara/cn";
import { ComponentPropsWithoutRef } from "react";

const CardWrapper = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("grid -space-x-px sm:grid-cols-3", className)}
      {...props}
    />
  );
};

export default CardWrapper;
