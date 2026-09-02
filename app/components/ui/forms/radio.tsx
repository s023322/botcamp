"use client";

import { cn } from "@sglara/cn";
import {
  ComponentPropsWithoutRef,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

const RadioContext = createContext<{
  name: string;
  selectedValue: string | undefined;
  setSelectedValue: (value: string) => void;
  disabled?: boolean;
} | null>(null);

const Root = ({
  name,
  defaultValue,
  value: controlledValue,
  onValueChange,
  disabled,
  className,
  children,
  ...props
}: {
  name: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
} & ComponentPropsWithoutRef<"fieldset">) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const selectedValue =
    controlledValue !== undefined ? controlledValue : internalValue;

  return (
    <RadioContext.Provider
      value={{
        name,
        selectedValue,
        setSelectedValue: (v: string) => {
          if (controlledValue === undefined) setInternalValue(v);
          onValueChange?.(v);
        },
        disabled,
        ...props,
      }}
    >
      <fieldset
        className={cn("flex flex-col gap-y-4 py-6", className)}
        {...props}
      >
        {children}
      </fieldset>
    </RadioContext.Provider>
  );
};

const Button = ({
  value,
  className,
  children,
  disabled: buttonDisabled,
  ...props
}: {
  value: string;
  children: ReactNode | ((props: { checked: boolean }) => ReactNode);
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<"label">, "children">) => {
  const {
    name,
    selectedValue,
    setSelectedValue,
    disabled: rootDisabled,
  } = useContext(RadioContext);
  const isChecked = selectedValue === value;
  const isDisabled = rootDisabled || buttonDisabled;

  return (
    <label
      className={cn(
        "cursor-pointer rounded-2xl border border-nt-20 bg-nt-10/50 text-left text-nt-95 shadow-nt-20 hover:bg-nt-10 focus-visible:bg-nt-10 active:translate-y-px",
        isChecked &&
          "border-se-20 bg-se-10/50 text-nt-95 shadow-[inset_0_-0.0625rem] shadow-se-20 hover:bg-se-10",
        isDisabled && "pointer-events-none opacity-50",
        className,
      )}
      {...props}
    >
      <input
        className="sr-only"
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={() => {
          setSelectedValue(value);
        }}
      />
      {typeof children === "function"
        ? children({ checked: isChecked })
        : children}
    </label>
  );
};

const Radio = { Root, Button };
export default Radio;
