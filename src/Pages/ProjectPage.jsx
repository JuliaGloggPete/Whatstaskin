import ProjectName from "../components/ProjectName";
import ProjectBoard from "../components/ProjectBoard";

function ProjectPage() {
  return (
    <>
      <ProjectName title="My awesome project name" />
      <ProjectBoard heading="Development" />
      <ProjectBoard heading="Backlog" />
      <ProjectBoard heading="Done" />
    </>
  );
}

export default ProjectPage;
