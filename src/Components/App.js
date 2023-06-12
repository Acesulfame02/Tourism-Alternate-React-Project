import '../Style_Sheets/App.css';
import Home from '../Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from '../Pages/Contact';
import Service from '../Pages/Service';
import About from '../Pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
