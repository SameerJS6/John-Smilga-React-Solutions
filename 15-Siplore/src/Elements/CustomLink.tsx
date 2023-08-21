import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import useRipple from "use-ripple-hook";

type Props = {
  children: React.ReactNode;
  className?: string;
  pathTo: string;
  onClick?: ()=> void
};

export default function CustomLink({ children, className, pathTo, onClick }: Props) {
  const [ripple, event] = useRipple();
  return (
    <Link
      ref={ripple}
      onMouseDown={event}
      to={pathTo}
onClick={onClick}
      className={twMerge("btn btn-ghost place-content-center", className)}
    >
      {children}
    </Link>
  );
}
