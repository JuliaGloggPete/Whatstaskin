import ProjectName from "../components/ProjectName";
import { useContext } from "react";
import { DataContext } from "../App";

function ProjectPage() {
  const [tasks] = useContext(DataContext);

  console.log(tasks);

  return (
    <>
      <ProjectName title="My awesome project name" />;
      <main>{tasks && tasks.map((task, i) => <p>{task.taskName}</p>)}</main>
    </>
  );
}

export default ProjectPage;
