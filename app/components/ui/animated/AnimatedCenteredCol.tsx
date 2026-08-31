"use client";

import { EnterTransition } from "@/components/animation/animationValues";
import { PolymorphicProps } from "@/types/polymorphic";
import { cn } from "@sglara/cn";
import { ElementType, useRef } from "react";

const AnimatedCenteredCol = <E extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<E, { className?: string }>) => {
  const Component = (as || "div") as ElementType;
  const ref = useRef(null);

  return (
    <Component
      ref={ref}
      className={cn(
        "relative col-span-1 col-start-2 flex flex-col items-center justify-center px-2",
        className,
      )}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ amount: 0.1 }}
      transition={{ ...EnterTransition }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedCenteredCol;
