import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user authentication state
    localStorage.removeItem('user');
    // Redirect the user to the login page or any other desired location
    // Here, assuming you have a route named '/login'
    navigate('/');
    window.location.reload();

  };

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark  bg-dark nav mt-2 ">
<div className="container  ">

<a className="navbar-brand title" href="#">Sicca-Cody</a>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
    <div >
      <ul className="navbar-nav ">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home </Link>
        </li>
        {user && user.role === 'admin' && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/event">Evenement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add_event">Ajoute Evenement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/participant">participant</Link>
            </li>
            
          </>
        )}
        {!user && (
          <>
            <li className="nav-item">
              <Link className="nav-link " to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/login">Connexion</Link>
            </li>
          </>
        )}
        {user && (
          <button className="nav-link" onClick={handleLogout}>Logout</button>

        )}
      </ul>
    </div>
  </div>
  </div>
</nav>

      <Outlet />
      </>

  );
}

export default Navbar;
