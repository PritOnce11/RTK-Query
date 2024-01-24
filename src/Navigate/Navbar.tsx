import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-black bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">APIs</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <NavLink
            className="nav-link active"
            to="/">
            Home
          </NavLink>
          <NavLink
            className="nav-link active"
            to="/rickMorty">
            Rick And Morty
          </NavLink>
          <NavLink
            className="nav-link active"
            to="/pokemon">
            Pokemon
          </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
