import "../Styles/ProjectBoard.css";
function ProjectName({ title }) {
  return (
    <header>
      <h1 className="projectName">{title}</h1>
    </header>
  );
}

export default ProjectName;
