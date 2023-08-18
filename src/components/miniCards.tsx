import { faDocker, faGithub, faJava, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function miniCards()
{
    return(
    <div className="mini-cards-container">
    <div className="mini-cards">
        <FontAwesomeIcon icon={faJsSquare} style={{color: "#f7df1e"}} />
        <p>Javascript</p>
    </div>
    <div className="mini-cards">
        <FontAwesomeIcon icon={faReact} style={{color: "#61dbfb"}} />
        <p>React</p>
    </div>
    <div className="mini-cards">
        <FontAwesomeIcon icon={faDocker} style={{color: "#2496ed"}} />
        <p>Docker</p>
    </div>
    <div className="mini-cards">
        <FontAwesomeIcon icon={faC} style={{color: "#5c6bc0"}} />
        <p>C</p>
    </div>
    <div className="mini-cards">
        <FontAwesomeIcon icon={faJava} style={{color: "#5886a4"}} />
        <p>Java</p>
    </div>
    <div className="mini-cards">
        <FontAwesomeIcon icon={faGithub} style={{color: "#fffff"}} />
        <p>Github</p>
    </div>
    <div className="mini-cards">
        <FontAwesomeIcon icon={faSass} style={{color: "#fffff"}} />
        <p>SCSS</p>
    </div>
    </div>);
}
export default miniCards;