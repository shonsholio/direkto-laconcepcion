import './Detalles.css';

function Detalles() {
  return(
    <div className="detalles">
      <div>
        <br />
        <h4 className='ttl-detalles'>Detalle del Inmueble</h4>
        <hr />
      </div>  

      <div className='contenedor-detalles'>
        <div className='contenedor-lista'>
          <ul className='lista-detalles'> 
            <li>Estado:   Usado</li>
            <li>País:   Colombia</li>
            <li>Departamento:   Atlántico</li>
            <li>Ciudad:   Barranquilla</li>
            <li>Localidad:   Norte Centro Histórico</li>
            <li>Zona:   Ciudad Jardín</li>
            <li>Area:   80 m2</li>
            <li>Habitaciones: 2</li>
            <li>Baños: 2</li>
            <li>Garaje: 1</li>
            <li>Estrato: 5</li>
            <li>Nivel: 7</li>
            <li>Año de Construcción: 2018</li>
            <li>Tipo de Inmueble: Apartamento</li>
            <li>Negocio: Venta</li>
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Detalles