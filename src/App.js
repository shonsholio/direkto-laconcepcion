import './App.css';
import Descripcion from './componentes/Descripcion.jsx';
import Detalles from './componentes/Detalles.jsx';
import Externas from './componentes/Externas.jsx';
import Galeria from './componentes/Galeria.jsx';
import Header from './componentes/Header.jsx';
import Internas from './componentes/Internas.jsx';
import Maps from './componentes/Maps.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <hr />
      </header>
      <body>
        <Galeria />
        <Detalles />
        <Internas />
        <Externas />
        <Descripcion />
        <Maps />

      </body>

    </div>
  );
}

export default App;
