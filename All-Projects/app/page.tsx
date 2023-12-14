import { projectsType } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import Cursor from "@/components/Cursor";
import projectsData from "@/data";

export default async function Home() {
  //   const response = await fetch("http://localhost:3000/api/projects", {
  //     method: "GET",
  //     cache: "no-cache",
  //   });
  //   const projects: projectsType[] = await response.json();
  const projects: projectsType[] = projectsData;
  return (
    <>
      <div className="p-4 xl:p-8 pb-3 xl:pb-3">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          John Smilga React Projects
        </h1>
      </div>

      <div className="p-4 xl:p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>

      <Cursor />
    </>
  );
}
