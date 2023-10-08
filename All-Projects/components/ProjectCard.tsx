import React from "react";
import Image from "next/image";
import { projectsType } from "@/data";

export default function ProjectCard({
  id,
  url,
  mainImg,
  projectTitle,
}: projectsType) {
  return (
    <a
      key={id}
      href={url}
      target="_blank"
      className="relative rounded-3xl xl:rounded-[2rem] bg-zinc-900 overlay group active:rounded-[2rem] xl:active:rounded-[3rem] transition-all duration-300 ease-in-out self-start cursor-none"
    >
      <div className="relative">
        <Image
          src={mainImg}
          width={450}
          height={200}
          alt={projectTitle + " Mockups"}
          className="rounded-3xl xl:rounded-[2rem] group-active:rounded-[2rem] xl:group-active:rounded-[3rem] transition-all duration-300 ease-in-out w-full"
        />
        <div className="z-10 absolute left-4 bottom-4 xl:bottom-6 xl:left-6 group-hover:opacity-100 opacity-0 translate-y-1 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 ease-in-out">
          <h1 className="capitalize text-2xl lg:text-3xl font-semibold tracking-tight ">
            {projectTitle}
          </h1>
        </div>
      </div>

      <div className="z-[2] absolute top-0 right-0 rounded-full p-4 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-1 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className="w-9 h-9 fill-primary stroke-primary"
        >
          <path d="M680-624 244-188q-11 11-28 11t-28-11q-11-11-11-28t11-28l436-436H400q-17 0-28.5-11.5T360-720q0-17 11.5-28.5T400-760h320q17 0 28.5 11.5T760-720v320q0 17-11.5 28.5T720-360q-17 0-28.5-11.5T680-400v-224Z" />
        </svg>
      </div>
    </a>
  );
}
