import { projectsType } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import Cursor from "@/components/Cursor";

export default async function Home() {
  const response = await fetch(
    "https://john-smilga-react-solutions.vercel.app/api/projects",
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const projects: projectsType[] = await response.json();
  return (
    <>
      <div className="p-4 xl:p-8 pb-3 xl:pb-3">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          John Smilga React Projects
        </h1>
      </div>

      <div className="p-4 xl:p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>

      <Cursor />
    </>
  );
}
