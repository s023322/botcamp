"use client";

import { cn } from "@sglara/cn";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../actions/button";
import { CloseRegular } from "@mingcute/react/core-regular";
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  ValueKeyframesDefinition,
} from "motion/react";

const Trigger = ({
  children,
  align = "right",
  closeButton = false,
  closeClassName,
  start,
  end,
  ...props
}: {
  align?: "right" | "left" | "center";
  closeButton?: boolean;
  className?: string;
  closeClassName?: string;
  start?: TargetAndTransition;
  end?: TargetAndTransition;
  variant?: "primary" | "secondary" | "outline" | "link" | "ghost";
  sizeVariant?: "normal" | "compact" | "iconNormal" | "iconCompact";
} & ComponentPropsWithoutRef<"button">) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [triggerContent, ...menu] = children as ReactNode[];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        !!dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button onClick={toggleIsOpen} {...props}>
        {triggerContent}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            transition={{ duration: 0.2, ease: "easeInOut" }}
            initial={{ opacity: 0, ...start }}
            animate={{ opacity: 1, ...end }}
            exit={{ opacity: 0, ...start }}
            ref={dropdownRef}
            className={cn("absolute top-full w-max pt-1", {
              "left-0": align === "left",
              "right-0": align === "right",
              "left-1/2 -translate-x-1/2": align === "center",
            })}
          >
            {menu}
            {closeButton && (
              <Button
                className={cn("fixed z-1", closeClassName)}
                sizeVariant="iconNormal"
                variant="ghost"
                onClick={toggleIsOpen}
              >
                <CloseRegular />
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Menu = ({
  className,
  children,
}: { className?: string } & PropsWithChildren) => {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-nt-20 bg-nt-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Dropdown = { Trigger, Menu };
export default Dropdown;
