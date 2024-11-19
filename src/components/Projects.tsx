import { faCss3, faHtml5, faJsSquare, faPhp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import n2r from '../assets/n2r-tech.png';
import pfa from '../assets/pfa.png';

function Projects()
{
    return(<div className="projects-container" id="projects">
    <h2>Projects</h2>
    <a href="https://github.com/NithinV404/N2R-Technologies"><div className="card n2r-card">
        <img src={n2r} alt="img" />
        <h2>N2R Technologies</h2>
        <p>A E-Commerce Website to facilitate services to customers to buy hardware products.</p>
        <h3>Tech Stack</h3>
        <p>
        <FontAwesomeIcon icon={faJsSquare}/>
        <FontAwesomeIcon icon={faPhp}/>
        <FontAwesomeIcon icon={faHtml5}/>
        <FontAwesomeIcon icon={faCss3}/>
        </p>
    </div></a>
    <a href="https://github.com/NithinV404/Peopleforanimals"><div className="card pfa-card">
        <img src={pfa} alt="img" />
        <h2>People for Animals</h2>
        <p>A animal shelter website designed to maintain a steady database and to book tickets for tour of the facility.</p>
        <h3>Tech Stack</h3>
        <p>
        <FontAwesomeIcon icon={faJsSquare}/>
        <FontAwesomeIcon icon={faPhp}/>
        <FontAwesomeIcon icon={faHtml5}/>
        <FontAwesomeIcon icon={faCss3}/>
        </p>
    </div></a>
    </div>);
}
export default Projects;