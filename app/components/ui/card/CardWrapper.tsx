import { cn } from "@sglara/cn";
import { ComponentProps } from "react";

const CardWrapper = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("grid -space-x-px sm:grid-cols-3", className)}
      {...props}
    />
  );
};

export default CardWrapper;
