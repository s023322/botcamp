import { PropsWithChildren } from "react";

const ResponsiveWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div
      id="resp"
      className="grid-cols-responsive grid-row-taupe-800 relative grid w-full flex-1 grid-flow-row auto-rows-min flex-col items-stretch"
    >
      {children}
    </div>
  );
};

export default ResponsiveWrapper;
