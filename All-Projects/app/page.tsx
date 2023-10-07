import { projectsType } from "@/data";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/projects", {
    method: "GET",
    cache: "no-cache",
  });
  const projects: projectsType[] = await response.json();
  return (
    <>
      <div className="p-4 xl:p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </>
  );
}