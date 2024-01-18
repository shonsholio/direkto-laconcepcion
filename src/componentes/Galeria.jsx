import './Galeria.css';


function Galeria() {
  return(
    <div className="galeria">

      <div className='contenedor-slider'>
        <div class="slider">
          <img className='foto' src={require("../imagenes/1.jpg")} alt='1' />
          <img className='foto' src={require("../imagenes/2.jpg")} alt='2' />
          <img className='foto' src={require("../imagenes/3.jpg")} alt='3' />
          <img className='foto' src={require("../imagenes/4.jpg")} alt='4' />
          <img className='foto' src={require("../imagenes/5.jpg")} alt='5' />
          <img className='foto' src={require("../imagenes/6.jpg")} alt='6' />
          <img className='foto' src={require("../imagenes/7.jpg")} alt='7' />
          <img className='foto' src={require("../imagenes/8.jpg")} alt='8' />
          <img className='foto' src={require("../imagenes/9.jpg")} alt='9' />
          <img className='foto' src={require("../imagenes/10.jpg")} alt='10' />
          <img className='foto' src={require("../imagenes/11.jpg")} alt='11' />
          <img className='foto' src={require("../imagenes/12.jpg")} alt='12' />
        </div>
      </div>

      <div className='info-precio'>
        <div className='contenedor-precio'>
          <h6 className='titulo-precio'>Precio de venta</h6>
          <h5 className='valor-precio'>$ 320.000.000</h5>
        </div>
      </div>
    </div>
  )
}

export default Galeria