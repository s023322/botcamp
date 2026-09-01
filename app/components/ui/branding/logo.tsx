import LogoSvg from "@/botcamp.svg";
import { cn } from "@sglara/cn";
import { motion, MotionProps } from "motion/react";
import { ComponentPropsWithoutRef } from "react";

const Logo = ({
  withText,
  className,
  ...props
}: {
  withText?: boolean;
} & ComponentPropsWithoutRef<"span"> &
  MotionProps) => {
  return (
    <motion.span
      {...props}
      className={cn("tracking-normal text-pr-50", className)}
    >
      <LogoSvg
        className={cn("size-[1em]", {
          "mt-[-0.21875em] inline-block": withText,
        })}
        style={{ shapeRendering: "geometricPrecision" }}
      />
      {withText && (
        <span className="inline-block font-body font-bold">
          <span className="ml-[-0.675em] opacity-0">B</span>
          otcamp
        </span>
      )}
    </motion.span>
  );
};

export default Logo;
