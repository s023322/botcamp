import CenteredWrapper from "components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "components/ui/layout/responsive-wrapper";
import { PropsWithChildren } from "react";

const Banner = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveWrapper className="-mb-px border-y border-pr-10 bg-pr-05">
      <CenteredWrapper className="py-2">
        <div className="flex items-center justify-center">{children}</div>
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default Banner;
