import { PolymorphicProps } from "@/types/polymorphic";
import { cn } from "@sglara/cn";
import { ElementType } from "react";

const ResponsiveCols = <E extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: {
  as?: "section" | "div" | "header";
} & PolymorphicProps<E, { className: string }>) => {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      className={cn("col-span-3 col-start-1 grid grid-cols-subgrid", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ResponsiveCols;
