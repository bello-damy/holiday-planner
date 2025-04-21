import { Routes } from 'react-router-dom';
import './App.css';
import Card from './cardComponent/Card';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Services, Contact } from "./pages/index"
import Banner from './Banner';
import Footer from './footerComponent/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default App;


