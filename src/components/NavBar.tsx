import "../App.scss"


function NavBar()
{


    return(
        <nav id='nav'> 
        <div className="menu">
            <p className="logo">PORTFOLIO</p>
        <div className="menu-items">
            <a href="#abou" id='abt' className="link">ABOUT </a>
            <a href="#projects" className="link">PROJECTS</a>
            <a href="#footer" className="link">CONTACTS</a>
        </div>
        </div>
        </nav>
    )
}
export default NavBar;