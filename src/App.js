import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavigateToCLI from './components/CLI/NavigateToCLI';
import NavigateToAIGC from './components/AIGC/NavigateToAIGC';

function App() {
  return (
    <div>
      <nav>
        <Link to="/"></Link>
        <Link to="/cli"></Link>
        <Link to="/aigc"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cli" element={<NavigateToCLI/>} />
        <Route path="/aigc" element={<NavigateToAIGC/>} />
      </Routes>
    </div>
  );
}

export default App;
