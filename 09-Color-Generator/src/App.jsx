import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./components/SingleColor";
import PopoverPicker from "./components/PopoverPicker";

export default function App() {
  const [color, setColor] = useState("#C0F984");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);
  const [tint, setTint] = useState("10");

  const handleColor = () => {
    try {
      let colors = new Values(color).all(parseInt(tint));
      setColorList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleColor();
  };

  useEffect(() => {
    handleColor();
  }, []);
  return (
    <>
      <main
        style={{ backgroundColor: `#${colorList[1]?.hex}` }}
        className="max-w-[1440px] mx-auto"
      >
        <div className="grid gap-4">
          <form onSubmit={handleSubmit}>
            <div
              style={{
                backgroundColor: `#${colorList[2]?.hex}`,
                color: `#${colorList[16]?.hex}`,
              }}
              className="flex shadow-md flex-col my-4 sm:flex-row gap-8 transition-all duration-300 p-4 items-center justify-center sm:w-fit mx-auto sm:rounded-[100vmax] rounded-b-[4rem] "
            >
              <PopoverPicker color={color} onChange={setColor} />
              <div className="flex w-fit gap-4">
                <input
                  style={{
                    backgroundColor: `#${colorList[4]?.hex}`,
                  }}
                  className="input-focus bg-transparent font-medium px-4 py-2 max-w-[12ch] rounded-full transition-all duration-300"
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                <input
                  style={{
                    backgroundColor: `#${colorList[4]?.hex}`,
                  }}
                  className="input-focus bg-transparent px-4 py-2 max-w-[5ch] rounded-full aspect-square text-center font-semibold transition-all duration-300"
                  type="text"
                  value={tint}
                  onChange={(e) => setTint(e.target.value)}
                />
              </div>
              <button
                style={{ backgroundColor: `#${colorList[10]?.hex}` }}
                className="rounded-[100vmax] px-4 py-2 font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>

          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {colorList.map((color, index) => {
              return (
                <SingleColor
                  key={index}
                  hex={color.hex}
                  bcg={color.rgb.join(",")}
                  index={index}
                  {...color}
                />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
