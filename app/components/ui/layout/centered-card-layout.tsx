"use client";

import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import AnimationPresets from "@/lib/animation-presets";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

const CenteredCardLayout = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveWrapper as="main" className="relative">
      <CenteredWrapper className="h-[calc(100dvh-6rem)] max-sm:p-0">
        <motion.div
          className="relative flex flex-col self-stretch"
          {...AnimationPresets.flyUp()}
        >
          {children}
        </motion.div>
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default CenteredCardLayout;
