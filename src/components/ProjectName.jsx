import "../Styles/ProjectPage.css";
function ProjectName({ title }) {
  return (
    <header className="projectPage_header">
      <h1 className="projectName">{title}</h1>
    </header>
  );
}

export default ProjectName;
