import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Url } from "url";
import Shortcut from "@/components/ui/shortcut/Shortcut";
import { cn } from "@sglara/cn";

const Button = ({
  variant = "ghost",
  as = "button",
  size = "normal",
  ...props
}: {
  variant?: "primary" | "secondary" | "ghost";
  size?: "normal" | "compact" | "iconNormal" | "iconCompact";
  as?: "button" | "a" | "Link";
  href?: Url | string;
  to?: string;
  shortcut?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { children, className, href, shortcut, ...rest } = props;

  const combinedClassName = cn(
    "font-body flex cursor-pointer items-end justify-center gap-x-1 rounded-md border text-sm whitespace-nowrap text-zinc-50 select-none active:translate-y-px [&>svg]:size-4",
    {
      "font-bold not-active:shadow-[inset_0_-0.0625rem]":
        variant === "primary" || variant === "secondary",
      "border-red-800 bg-red-600 shadow-red-800 hover:bg-red-700":
        variant === "primary",
      "border-zinc-600 bg-zinc-800 shadow-zinc-600 hover:bg-zinc-700":
        variant === "secondary",
      "border-transparent bg-transparent hover:bg-zinc-50/15":
        variant === "ghost",
    },
    {
      "h-8 px-2.5 leading-7 [&>svg]:mb-0.5 [&>svg]:-ml-1 [&>svg]:self-center":
        size === "normal",
      "h-6 px-1 [&>svg]:self-center": size === "compact",
      "h-8 items-center px-1.75": size === "iconNormal",
      "h-6 items-center px-0.75": size === "iconCompact",
    },
    className,
  );

  const combinedChildren = (
    <>
      {children}
      {shortcut && <Shortcut className="-mr-1" keys={shortcut} />}
    </>
  );

  if (as === "button") {
    return (
      <button className={combinedClassName} {...rest}>
        {combinedChildren}
      </button>
    );
  } else if (as === "a") {
    return (
      <a className={combinedClassName} href={href as string} {...rest}>
        {combinedChildren}
      </a>
    );
  } else if (as === "Link") {
    return (
      <Link className={combinedClassName} href={href as Url} {...rest}>
        {combinedChildren}
      </Link>
    );
  }
};

export default Button;
