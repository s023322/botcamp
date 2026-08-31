"use client";

import LogoSvg from "@/botcamp.svg";
import { cn } from "@sglara/cn";
import { motion, MotionProps } from "motion/react";
import { ComponentProps } from "react";

const Logo = ({
  withText,
  className,
  ...props
}: {
  withText?: boolean;
} & ComponentProps<"span"> &
  MotionProps) => {
  const combinedClassName = cn("tracking-normal text-red-400", className);
  const logoImage = (
    <LogoSvg className="mt-[-0.21875em] inline-block size-[1em]" />
  );

  return (
    <motion.span {...props} className={combinedClassName}>
      {logoImage}
      {withText && (
        <span className="font-body inline-block font-bold">otcamp</span>
      )}
    </motion.span>
  );
};

export default Logo;
