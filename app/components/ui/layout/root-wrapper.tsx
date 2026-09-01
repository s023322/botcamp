import { PropsWithChildren } from "react";

const RootWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative grid w-full flex-1 grid-flow-row auto-rows-min grid-cols-responsive flex-col items-stretch grid-row-nt-20">
      {children}
    </div>
  );
};

export default RootWrapper;
