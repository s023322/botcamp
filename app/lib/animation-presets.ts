import { Easing } from "motion";

const animationStagger = 0.25;

const enterTransition: { ease: Easing; duration: number } = {
  ease: "easeInOut",
  duration: 0.5,
};

const flyUp = (delay?: number) => ({
  initial: { opacity: 0, y: 16 },
  transition: { ...enterTransition, delay },
  animate: { opacity: 1, y: 0 },
});

const AnimationPresets = { animationStagger, enterTransition, flyUp };
export default AnimationPresets;
