import logo from './logo.svg';
import './App.css';
import Formulario from './Componentes/Formulario/Formulario';
import Login from './Vistas/Login/Login';
import About from './Vistas/About/About';
import Home from './Vistas/Home/Home';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
