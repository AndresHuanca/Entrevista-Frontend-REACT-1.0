import { Link, NavLink } from "react-router-dom";
import PropTypes  from "prop-types"
import { useAuthStore } from "../hooks";
import { useState } from "react";


export const Navbar = ({ isAuthenticated }) => {
  // Navbar
  const { startLogout } = useAuthStore();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const commonLinks = (
    <>
      {!isAuthenticated && (

        <NavLink 
          className="nav-link"
          style={{ fontWeight: 'bold', fontSize: '16px' }}
          onClick={() => setIsNavOpen(false)} // Cierra el menú al hacer clic en el enlace 
          to="/auth/login"
        >
          Ingresar
        </NavLink>
        
      )}
      
    </>
  );
  

  const authenticatedLinks = (
    <>
        
      { commonLinks }

      <NavLink
          className={ ({ isActive }) => `nav-link  ${ isActive ? 'active' : '' }` }
          style={{ fontWeight: 'bold', fontSize: '16px' }}
          onClick={() => setIsNavOpen(false)} // Cierra el menú al hacer clic en el enlace
          to="/cart"
      >
          Productos
      </NavLink>

      {/* onLogout */}
      <button 
          className="btn btn-outline-danger"
          onClick={ () => { startLogout(); setIsNavOpen(false); } }
      >
          <i className="fa fa-sign-out-alt"></i>
      </button>
    </>
  );

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-success fixed-top"
      
      id="myNavbar"
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand"
          style={{ fontFamily: "Cinzel Decorative, sans-serif" }}
        >
          <div style={{ marginTop: "-10px" }}>
            <span style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>Entre </span>
            <span style={{ color: "orange", fontWeight: "bold" , fontSize: "25px" }}>Vista</span>
          </div>
          <div style={{ marginTop: "-18px", marginBottom: "-10px", fontFamily: "Roboto" }}>
            <span style={{ marginLeft:"40px",color: "white", fontWeight: "bold", fontSize: "20px"}}>Software</span>
            {/* "Próximamente: ¡Tu Destino para Productos Agrícolas de Primer Nivel!" */}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen( !isNavOpen )} // Alternar estado del menú al hacer clic en el botón
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

          {/* Para que publicaciones solo este disponible para administradores */}
          { isAuthenticated ? authenticatedLinks : commonLinks }

          </ul>
        </div>
      </div>
    </nav>
  );
};


Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}