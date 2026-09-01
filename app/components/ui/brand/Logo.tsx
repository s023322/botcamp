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
      className={cn("text-primary-400 tracking-normal", className)}
    >
      <LogoSvg
        className={cn("size-[1em]", {
          "mt-[-0.21875em] inline-block": withText,
        })}
      />
      {withText && (
        <span className="font-body inline-block font-bold">otcamp</span>
      )}
    </motion.span>
  );
};

export default Logo;
