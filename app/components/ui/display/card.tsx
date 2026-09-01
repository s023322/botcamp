import { cn } from "@sglara/cn";
import { ComponentPropsWithoutRef } from "react";

const Root = ({
  className,
  subgrid = false,
  ...props
}: { subgrid?: boolean } & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "relative gap-y-2 rounded-4xl border border-nt-20 p-8 text-nt-95",
        {
          "row-span-5 grid grid-rows-subgrid md:row-span-4": subgrid,
          "flex flex-col": !subgrid,
        },
        className,
      )}
      {...props}
    />
  );
};

const Header = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("text-xl leading-6 font-bold tracking-wide", className)}
      {...props}
    />
  );
};

const Icon = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "top-8 right-8 text-inherit *:size-8 *:text-[2rem] md:absolute md:*:size-6 md:*:text-2xl",
        className,
      )}
      {...props}
    />
  );
};

const Description = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("text-sm text-pretty text-nt-70", className)}
      {...props}
    />
  );
};

const Content = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("pt-4 pb-8", className)} {...props} />;
};

const Footer = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("flex flex-col items-start gap-y-2", className)}
      {...props}
    />
  );
};

const Card = { Root, Header, Icon, Description, Content, Footer };

export default Card;
