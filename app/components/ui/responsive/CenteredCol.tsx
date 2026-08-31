import { PolymorphicProps } from "@/types/polymorphic";
import { cn } from "@sglara/cn";
import { ElementType } from "react";

const CenteredCol = <E extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: {
  as?: "div" | "nav";
} & PolymorphicProps<E, { className: string }>) => {
  const Component = (as || "div") as ElementType;
  return (
    <Component
      className={cn(
        "relative col-span-1 col-start-2 flex flex-col items-center justify-center px-2",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CenteredCol;
