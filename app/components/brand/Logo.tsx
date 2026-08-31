import LogoSvg from "@/botcamp.svg";
import { cn } from "@sglara/cn";

const Logo = ({
  withText,
  className,
}: {
  withText?: boolean;
  className?: string;
}) => {
  const combinedClassName = cn(
    "flex items-center gap-x-1 text-red-400",
    className,
  );
  const logoImage = <LogoSvg width={32} height={32} />;

  return (
    <div className={combinedClassName}>
      {logoImage}
      {withText && (
        <p className="font-body trim-both cap-alpha pr-2.5 text-xl font-bold">
          Botcamp
        </p>
      )}
    </div>
  );
};

export default Logo;
