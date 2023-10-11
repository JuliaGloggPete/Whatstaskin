import ProjectName from "../components/ProjectName";
import ProjectBoard from "../components/ProjectBoard";
import "../Styles/ProjectPage.css";

function ProjectPage() {
  return (
    <div className="projectPage">
      <ProjectName title="My awesome project name" />
      <ProjectBoard heading="Development" />
    </div>
  );
}

export default ProjectPage;
