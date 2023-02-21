import React, { useState, useEffect } from "react";
import "./loading.css";

const url = "https://course-api.com/react-tabs-project";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentJobs, setCurrentJobs] = useState(0);

  const Fetch = async () => {
    setLoading(true);
    const response = await fetch(url);
    const Alljobs = await response.json();
    setJobs(Alljobs);
    setLoading(false);
  };

  useEffect(() => {
    Fetch();
  }, []);
  if (!jobs[currentJobs]) {
    return <div className="flipping"></div>;
  }
  const { title, dates, duties, company } = jobs[currentJobs];
  return (
    <>
      <main className="max-w-[1440px] p-4 md:p-8 lg:p-10 xl:p-32">
        {loading && <div className="flipping"></div>}
        {!loading && (
          <section>
            <h1 className="tracking-in-top | font-medium text-5xl text-center mb-9 text-[#3d0026]">
              Experience
            </h1>

            <div className="flex flex-col gap-8 md:gap-12 lg:gap-20 md:flex-row">
              <div className="flex md:flex-col gap-4 items-start justify-center md:justify-start">
                {jobs.map((item, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentJobs(index)}
                      className={`opac | relative p-2 md:p-4 md:py-2 rounded-lg font-semibold text-lg md:text-xl text-[#3d0026] transition-all duration-[350ms] ease-in-out hover:text-[#2a151f] hover:bg-[#fdd9e7] hover:-translate-y-1 hover:shadow active:rounded-2xl ${
                        currentJobs === index &&
                        "bg-[#ffdbc7] translate-x-1 scale-105 shadow-lg -translate-y-1 hover:text-[#7f5539] hover:bg-[#ffdbc7] hover:-translate-y-1 hover:shadow-lg md:translate-x-6 text-[#301401]"
                      }`}
                    >
                      {item.company}
                    </button>
                  );
                })}
              </div>

              <article>
                <header className="grid gap-2 md:gap-3">
                  <h2 className="tracking-in | font-medium text-lg md:text-xl text-[#1f1a1c]">
                    {title}
                  </h2>
                  <span className="tracking-in | w-fit rounded-md px-2 py-1 text-[#3d0026] bg-[#ffd8e7] font-semibold ">
                    {company}
                  </span>
                  <span className="tracking-in | text-sm md:text-base text-[#827378]">
                    {dates}
                  </span>
                </header>

                <article className="grid gap-4 mt-4 md:mt-8">
                  {duties.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="slide-in | flex items-center gap-2 md:gap-4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="hidden md:block w-10 h-10 md:w-4 md:h-4 xl:w-6 xl:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          />
                        </svg>

                        <p className="text-[#2a151f] text-justify">{items}</p>
                      </div>
                    );
                  })}
                </article>
              </article>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
