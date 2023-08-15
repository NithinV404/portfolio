import "../App.scss"
function NavBar()
{
    return(
        <nav>
        <div className="menu">
            <p className="logo">PORTFOLIO</p>
        <div className="menu-items">
            <a href="#" className="link">ABOUT</a>
            <a href="#" className="link">PROJECTS</a>
            <a href="#" className="link">CONTACTS</a>
        </div>
        </div>
        </nav>
    )
}
export default NavBar;