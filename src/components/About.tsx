import Cards from "./miniCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBook, faRobot, faShieldHalved, faTableColumns } from "@fortawesome/free-solid-svg-icons";

function About() {

    return (
        <div className="about-container" id="about">
            <h2>About</h2>
            <div className="info">
                <svg className="background-svg" width="500px" height="400px"
                    viewBox="0 0 400 300" version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                ><defs>
                        <filter x="-50%" y="-50%" width="300%" height="300%" filterUnits="objectBoundingBox" id="filter-1"><feOffset dx="0" dy="10" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.095 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetInner1"></feOffset><feGaussianBlur stdDeviation="1.5" in="shadowOffsetInner1" result="shadowBlurInner1"></feGaussianBlur>
                            <feComposite in="shadowBlurInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0.647959184   0 0 0 0 0.549016553   0 0 0 0 0.549016553  0 0 0 0.35 0" in="shadowInnerInner1" type="matrix" result="shadowMatrixInner1"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode>
                                <feMergeNode in="shadowMatrixInner1"></feMergeNode></feMerge></filter></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard-1" fill="#8B65E4"><path d="M187.785156,200 L180,232 L66,232 L58.2148437,200 L187.785156,200 Z" id="Rectangle-1" filter="url(#filter-1)"></path><path d="M349.760339,49.1234675 L375.905579,277.733833 L199.999999,277.733834 L43.9648432,143.710938 L349.760339,49.1234675 Z" id="Triangle-1" filter="url(#filter-1)"></path>
                                    <path d="M399.8936,96.1889997 L29.4623426,250.140552 L0,36.4302476 L399.8936,96.1889997 Z" id="Triangle-2" filter="url(#filter-1)"></path></g></g></svg>
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
                <div><h2>Technologies</h2><div className="border"></div></div>
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