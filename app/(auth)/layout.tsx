import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveWrapper as="main" className="relative">
      <CenteredWrapper className="h-[calc(100dvh-6rem)] max-sm:p-0">
        {children}
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default AuthLayout;
