import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import { PropsWithChildren } from "react";

const Banner = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveWrapper className="bg-pr-10 border-pr-20 -mb-px border-y">
      <CenteredWrapper className="py-2">
        <div className="flex items-center justify-center gap-x-2">
          {children}
        </div>
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default Banner;
