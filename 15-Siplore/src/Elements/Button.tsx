import useRipple from "use-ripple-hook";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rippleColor?: string;
  children: React.ReactNode;
}

export default function Button({
  disabled,
  rippleColor = "rgba(255, 255, 255, .3)",
  children,
  className,
  ...props
}: Props) {
  const [ripple, event] = useRipple({ color: rippleColor });

  return (
    <button
      {...props}
      disabled
      ref={ripple}
      onMouseDown={event}
      className={twMerge("btn place-content-center", className)}
    >
      {children}
    </button>
  );
}
