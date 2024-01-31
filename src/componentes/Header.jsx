import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className='contenedor-header'>
        
        <div className='contenedor-logo'>
          <img
          className="logo;"
          src={require("../imagenes/logo-direkto.png")}
          alt="logo direkto" />
        </div>

        <h1 className='titulo'>Apartamento Dúplex, Sector La Concepción</h1>
        
      </div>
    </div>
  );
}
  
export default Header;
  