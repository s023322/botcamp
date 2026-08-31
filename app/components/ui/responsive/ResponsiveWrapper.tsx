import { PropsWithChildren } from "react";

const ResponsiveWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div
      id="resp"
      className="grid-container relative w-full flex-1 flex-col items-stretch text-zinc-50"
    >
      {children}
    </div>
  );
};

export default ResponsiveWrapper;
