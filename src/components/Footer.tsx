import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocation, faLongArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer()
{
    return(<>
    <footer className="card" id='footer'>
        <div className="section-container">
            <div className="location">
                <FontAwesomeIcon icon={faLocation} />
                <h2>Where To Find Me</h2>
                <p>Bangalore</p>
            </div>
            <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
                <h2>Email Me At</h2>
                <p>nithin.v053@gmail.com</p>
            </div>
            <div className="call">
            <FontAwesomeIcon icon={faPhone} />
                <h2>Call Me At</h2>
                <p>+919482916983</p>
            </div>
        </div>
		<div className="row">
        <div className="col-six tab-full">
				<div className="copyright">
					<span>© Copyright Nithin V</span>
					<span> <a href="http://www.styleshout.com/"></a></span>
				</div>
			</div>
            <div id="go-top">
				<a className="smoothscroll" title="Back to Top" href="#top"><FontAwesomeIcon icon={faLongArrowUp}/></a>
			</div>
			<div className="col-six tab-full pull-right social">
					<a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href=""><FontAwesomeIcon icon={faGithub} /></a>
			</div>
			
		</div>
	</footer>
    </>
);
}
export default Footer;