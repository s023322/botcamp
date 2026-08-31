import CenteredCol from "@/components/ui/dynamic/CenteredCol";
import ResponsiveCols from "@/components/ui/dynamic/ResponsiveCols";
import { PropsWithChildren } from "react";

const Banner = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveCols className="bg-red-950/50">
      <CenteredCol className="py-2">
        <div className="flex items-center justify-center gap-x-2">
          {children}
        </div>
      </CenteredCol>
    </ResponsiveCols>
  );
};

export default Banner;
