import logo from '../assets/images/logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav style={{borderBottom: 'solid 1px #333', paddingBottom: '1 rem'}}>
          {/* criação de links com react-router */}
          <Link to="/register"><a className="App-Link"></a>Cadastro</Link> 
          |
          <Link to="/login" className="App-Link">Login</Link>
          |
          <Link to="/extract" className="App-Link">Extrato</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
