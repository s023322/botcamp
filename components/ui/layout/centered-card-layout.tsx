import CenteredWrapper from "components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "components/ui/layout/responsive-wrapper";
import { PropsWithChildren } from "react";

const CenteredCardLayout = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveWrapper as="main">
      <CenteredWrapper className="h-screen-centered fly-up max-sm:p-0">
        {children}
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default CenteredCardLayout;
