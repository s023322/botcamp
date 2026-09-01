import { PropsWithChildren } from "react";

const RootWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid-cols-responsive grid-row-nt-20 relative grid w-full flex-1 grid-flow-row auto-rows-min flex-col items-stretch">
      {children}
    </div>
  );
};

export default RootWrapper;
