import CenteredWrapper from "components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "components/ui/layout/responsive-wrapper";
import { PropsWithChildren } from "react";

const Banner = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveWrapper className="-mb-px border-y border-pr-10 bg-pr-05">
      <CenteredWrapper className="flex-col items-center justify-center gap-x-1 py-2 sm:flex-row">
        {children}
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default Banner;
