import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavigateToCLI from './components/CLI/NavigateToCLI';

function App() {
  return (
    <div>
      <nav>
        <Link to="/"></Link>
        <Link to="/cli"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cli" element={<NavigateToCLI/>} />
      </Routes>
    </div>
  );
}

export default App;
