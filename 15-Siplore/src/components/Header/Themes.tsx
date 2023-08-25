import useRipple from "use-ripple-hook";
import { useRef, useState, useEffect } from "react";
import useClickOutside from "../../hook/useClickOutside";
import { themeChange } from "theme-change";
type Props = {};

const ThemesOptions: string[] = [
  "light",
  "night",
  "cupcake",
  "lofi",
  "black",
  "luxury",
  "wireframe",
  "retro",
  "pastel",
  "valentine",
];

export default function Themes({}: Props) {
  const StoredTheme: string | null = localStorage.getItem("theme");

  const [ripple, event] = useRipple();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeTheme, setActiveTheme] = useState<string>(
    StoredTheme ? StoredTheme : ""
  );

  let DropDownRef: React.RefObject<HTMLDetailsElement> = useRef(null);

  const closeDropDown = () => {
    if (DropDownRef.current) {
      DropDownRef.current.removeAttribute("open");
      setIsActive(false);
    }
  };

  useClickOutside(DropDownRef, closeDropDown);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <details
      ref={DropDownRef}
      className="dropdown max-lg:dropdown-end max-lg:ml-6"
    >
      <summary
        ref={ripple}
        onMouseDown={event}
        onClick={() => setIsActive(!isActive)}
        className={`${
          isActive ? "btn-active" : ""
        } m-1 btn place-content-center btn-ghost`}
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
      <ul className="p-2 flex-nowrap shadow menu dropdown-content space-y-4 z-[1] bg-base-200 max-h-[400px] overflow-y-scroll rounded-lg w-56">
        {ThemesOptions.map((theme, index) => {
          return (
            <button
              key={index}
              data-theme={theme}
              data-set-theme={theme}
              onClick={() => setActiveTheme(theme)}
              className={`btn rounded-md capitalize text-base font-medium w-full theme ${
                theme === activeTheme ? "btn-active" : ""
              }`}
            >
              <div className="flex items-center gap-5 justify-between w-full">
                {/* Active or Not Sign Container  */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-3 h-3 ${
                      theme === activeTheme ? "visible" : "invisible"
                    }`}
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>

                  <p>{theme}</p>
                </div>

                {/* Theme Color Block  */}
                <div className="flex gap-1 items-center">
                  <span className="bg-primary rounded-full shadow w-2 h-4"></span>
                  <span className="bg-secondary rounded-full shadow w-2 h-4"></span>
                  <span className="bg-accent rounded-full shadow w-2 h-4"></span>
                  <span className="bg-neutral rounded-full shadow w-2 h-4"></span>
                </div>
              </div>
            </button>
          );
        })}
      </ul>
    </details>
  );
}
