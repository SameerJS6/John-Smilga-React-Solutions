import React from "react";
import Image from "next/image";
import Mockup from "@/app/544shots_so.jpg";

type ProjectCardProps = {
  id: number;
  url: string;
  projectTitle: string;
};

export default function ProjectCard({
  id,
  url,
  projectTitle,
}: ProjectCardProps) {
  return (
    <a
      key={id}
      href={url}
      target="_blank"
      className="relative rounded-3xl xl:rounded-[2rem] bg-zinc-900 overlay group"
    >
      <div className="relative">
        <Image
          src={Mockup}
          alt={projectTitle + " Mockups"}
          className="rounded-3xl xl:rounded-[2rem]"
        />
        <div className="z-10 absolute left-4 bottom-4 xl:bottom-6 xl:left-6 group-hover:opacity-100 opacity-0 translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <h1 className="capitalize text-2xl lg:text-3xl font-semibold tracking-tight ">
            {projectTitle}
          </h1>
        </div>
      </div>
    </a>
  );
}
