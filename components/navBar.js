import Link from "next/link";

const Navbar = () => {
    return ( 
        <>

<nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor : 'coral'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">InvestCheck</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" href="/"><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about"><b>About</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact"><b>Contact</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
     );
}
 
export default Navbar;
