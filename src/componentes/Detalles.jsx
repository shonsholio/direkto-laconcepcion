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
            <li>Zona:   La Concepción</li>
            <li>Area:   160 m2</li>
            <li>Habitaciones: 4</li>
            <li>Baños: 3</li>
            <li>Garaje: 1</li>
            <li>Estrato: 4</li>
            <li>Nivel: 3</li>
            <li>Depósito:  Si</li>
            <li>Tipo de Inmueble: Apartamento</li>
            <li>Negocio: Venta</li>
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Detalles