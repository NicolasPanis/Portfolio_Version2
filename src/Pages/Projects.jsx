import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Projects.scss";

function Projects() {
  return (
    <div>
      <div className="ContentProjects">
        <Header />
        <Carrousel />
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
