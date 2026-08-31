import { flyUp } from "@/components/animation/animationValues";
import { motion } from "motion/react";
import { Children, PropsWithChildren } from "react";

const FlyText = ({
  children,
  delay = 0,
}: { delay?: number } & PropsWithChildren) => {
  return (
    <>
      {Children.map(children, (child, index) => (
        <>
          <motion.span
            className="inline-block"
            {...flyUp(delay + index * 0.25)}
          >
            {child}
          </motion.span>{" "}
        </>
      ))}
    </>
  );
};

export default FlyText;
