import { cn } from "@sglara/cn";
import { ComponentProps } from "react";

const Card = ({
  className,
  subgrid = false,
  ...props
}: { subgrid?: boolean } & ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "relative gap-y-2 border border-taupe-800 p-8",
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

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("text-xl leading-6 font-bold", className)} {...props} />
  );
};

const CardIcon = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("top-8 right-8 text-taupe-300 md:absolute", className)}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("text-sm text-pretty text-taupe-300", className)}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div className={cn("pt-4 pb-8 text-taupe-200", className)} {...props} />
  );
};

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("text-taupe-200", className)} {...props} />;
};

export { Card, CardHeader, CardIcon, CardDescription, CardContent, CardFooter };
