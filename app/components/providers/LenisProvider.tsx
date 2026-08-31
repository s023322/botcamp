import ReactLenis from "lenis/react";
import { PropsWithChildren } from "react";

const LenisProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactLenis root />
      {children}
    </>
  );
};

export default LenisProvider;
