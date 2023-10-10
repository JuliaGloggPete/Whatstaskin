import ProjectName from "../components/ProjectName";
import { useContext } from "react";
import { DataContext } from "../App";
import Card from "../components/Card"

function ProjectPage() {
  const [tasks] = useContext(DataContext);

  console.log(tasks);

  return (
    <>
      <ProjectName title="My awesome project name" />;
      
      <main>{tasks && tasks.map((task, i) => <Card></Card>)}</main>
    </>
  );
}

export default ProjectPage;
