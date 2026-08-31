import { CloseRegular } from "@mingcute/react/core-regular";
import Button from "@/components/ui/button/Button";
import CenteredCol from "@/components/ui/responsive/CenteredCol";
import ResponsiveCols from "@/components/ui/responsive/ResponsiveCols";
import { PropsWithChildren, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Banner = ({ children }: PropsWithChildren) => {
  const [visible, setVisible] = useState(true);
  return (
    <AnimatePresence>
      {visible && (
        <ResponsiveCols
          as={motion.div}
          exit={{ height: 0, padding: 0 }}
          className="overflow-y-hidden border-b border-b-red-900/15 bg-red-950/50 py-2 max-md:hidden"
        >
          <CenteredCol className="flex-row">
            <div className="flex flex-1 items-center justify-center gap-x-2">
              {children}
            </div>
            <div className="absolute right-2 flex items-center gap-x-1">
              <Button
                as="button"
                size="compact"
                onClick={() => setVisible(false)}
              >
                {"Don't show again"}
              </Button>
              <Button
                as="button"
                size="iconCompact"
                onClick={() => setVisible(false)}
              >
                <CloseRegular size={16} />
              </Button>
            </div>
          </CenteredCol>
        </ResponsiveCols>
      )}
    </AnimatePresence>
  );
};

export default Banner;
