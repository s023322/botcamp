import ReactLenis from "lenis/react";
import { PropsWithChildren } from "react";

const LenisProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.12,
          duration: 0.8,
          smoothWheel: true,
          wheelMultiplier: 1.1,
        }}
      />
      {children}
    </>
  );
};

export default LenisProvider;
