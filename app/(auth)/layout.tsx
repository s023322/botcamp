import CenteredCardLayout from "components/ui/layout/centered-card-layout";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <CenteredCardLayout>{children}</CenteredCardLayout>;
};

export default AuthLayout;
