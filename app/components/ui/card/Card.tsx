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
        "relative gap-y-2 border border-neutral-800 p-8",
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
    <div className={cn("text-xl leading-6 font-bold", className)} {...props} />
  );
};

const Icon = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("top-8 right-8 text-neutral-300 md:absolute", className)}
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
      className={cn("text-sm text-pretty text-neutral-300", className)}
      {...props}
    />
  );
};

const Content = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("pt-4 pb-8 text-neutral-200", className)} {...props} />
  );
};

const Footer = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("text-neutral-200", className)} {...props} />;
};

const Card = { Root, Header, Icon, Description, Content, Footer };

export default Card;
