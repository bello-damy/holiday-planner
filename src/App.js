import './App.css';
import Card from './cardComponent/Card';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Services, Contact } from "./pages/index";
import Banner from './Banner';
import Footer from './footerComponent/Footer';
import Form from "./registrationForm/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Banner /><Card /></>} />
        <Route path="/about" element={<><About /></>} />
        <Route path="/services" element={<><Services /></>} />
        <Route path="/contact" element={<><Contact /></>} />
      </Routes>
      <Footer />
      <Form />
    </div>
  );
}

export default App;


