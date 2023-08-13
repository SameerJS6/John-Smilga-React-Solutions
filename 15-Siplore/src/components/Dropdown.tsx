import useRipple from "use-ripple-hook";

type Props = {
  downRef: React.RefObject<HTMLDetailsElement>;
};

export default function Dropdown({ downRef }: Props) {
  const [ripple, event] = useRipple();
  
  return (
    <details ref={downRef} className="dropdown">
      <summary
        ref={ripple}
        onMouseDown={event}
        className="m-1 btn place-content-center btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
          />
        </svg>
        Themes
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-lg max-w-sm">
        <li>
          <a href="" className="rounded-md capitalize text-base font-medium">
            light
          </a>
        </li>
        <li>
          <a href="" className="rounded-md capitalize text-base font-medium">
            dark
          </a>
        </li>
        <li>
          <a href="" className="rounded-md capitalize text-base font-medium">
            retro
          </a>
        </li>
        <li>
          <a href="" className="rounded-md capitalize text-base font-medium">
            luxury
          </a>
        </li>
      </ul>
    </details>
  );
}
