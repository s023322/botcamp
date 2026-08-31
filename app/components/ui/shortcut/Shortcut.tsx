import { cn } from "@sglara/cn";

const Shortcut = ({
  className,
  keys,
}: {
  className?: string;
  keys: string;
}) => {
  const combinedClassName = cn(
    "cap-alpha rounded-xs bg-taupe-50/20 p-1 font-mono text-sm font-medium text-taupe-50",
    className,
  );

  return <kbd className={combinedClassName}>{keys}</kbd>;
};

export default Shortcut;
