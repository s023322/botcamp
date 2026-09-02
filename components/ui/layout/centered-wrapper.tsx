import { DynamicProps } from "components/patterns/dynamic";
import AnimationPresets from "@/lib/animation-presets";
import { cn } from "@sglara/cn";
import { ElementType } from "react";

const CenteredWrapper = <E extends ElementType = "div">({
  as,
  className,
  children,
  animated,
  ...props
}: {
  animated?: boolean;
} & DynamicProps<E>) => {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      className={cn(
        "relative col-span-1 col-start-2 flex flex-col items-center justify-center px-2",
        className,
      )}
      {...(animated && {
        initial: { opacity: 0, y: 32 },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: { amount: 0.1 },
        transition: AnimationPresets.enterTransition,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CenteredWrapper;
