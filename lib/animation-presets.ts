import { Easing } from "motion";

const enterTransition: { ease: Easing; duration: number } = {
  ease: "easeInOut",
  duration: 0.5,
};

const AnimationPresets = { enterTransition };
export default AnimationPresets;
