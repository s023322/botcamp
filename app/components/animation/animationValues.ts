import { Easing } from "motion";

export const EnterTransition: { ease: Easing; duration: number } = {
  ease: "easeInOut",
  duration: 0.5,
};

export const flyUp = (delay?: number) => ({
  initial: { opacity: 0, y: 16 },
  transition: { ...EnterTransition, delay },
  animate: { opacity: 1, y: 0 },
});
