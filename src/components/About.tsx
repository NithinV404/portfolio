import Cards from "./miniCards";
import info from "/info.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBook, faRobot, faShieldHalved, faTableColumns } from "@fortawesome/free-solid-svg-icons";

function About() {
    return (
        <div className="about-container" id="about">
            <h2 id='about-text'>About</h2>
            <div className="info">
                <img src={info}></img>
                <div className="details-container">
                    <h1>Hey! <br /><span className="gradient"> I'm Nithin V, </span></h1>
                    <p>Developer/Student</p>
                </div>
                <div className="icons-container">
                    <a href="https://twitter.com/nithin_v_"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/NithinV404"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <div className="tech_stack card">
                <div><h2>Technologies </h2><div className="border"></div></div>
                <Cards />
            </div>
            <div className="education-courses">
                <div className="Education card fix">
                    <div><h2>Education</h2><div className="border"></div></div>
                    <div className="graduate">
                        <h3 className="">2024</h3>
                        <p>RNS Institute of technology <FontAwesomeIcon icon={faBook} /> Graduate</p>
                    </div>
                    <div className="undergraduate">
                        <h3 className="">2022</h3>
                        <p>Dayananda Sagar College of Arts Science and Commerce <FontAwesomeIcon icon={faBook} /> Under Graduate</p>
                    </div>
                    <div className="college">
                        <h3 className="">2019</h3>
                        <p>RNS pu college <FontAwesomeIcon icon={faBook} /> Pre University</p>
                    </div>
                    <div className="school">
                        <h3 className="">2019</h3>
                        <p>St Ann's Indian High School <FontAwesomeIcon icon={faBook} /> School</p>
                    </div>
                </div>
                <div className="courses card fix">
                <div><h2>Courses</h2><div className="border"></div></div>
                    <div className="c1">
                        <h3 className="year">Guvi</h3>
                        <p>Robotic Process Automation <FontAwesomeIcon icon={faRobot} /> </p>
                    </div>
                    <div className="c2">
                    <h3 className="year">Cisco</h3>
                    <p>Introduction to CyberSecurity <FontAwesomeIcon icon={faShieldHalved} /> </p>
                    </div>
                    <div className="c3">
                    <h3 className="year">Free Code Camp</h3>
                    <p>Responsive Web Design <FontAwesomeIcon icon={faTableColumns} /> </p>
                    </div>
                    <div className="c4">
                    <h3 className="year">Cognitive</h3>
                    <p>Introduction to Data Science <FontAwesomeIcon icon={faTableColumns} /> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;