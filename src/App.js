import './App.css';
import Card from './cardComponent/Card';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Services, Contacts } from "./pages/index";
import Banner from './Banner';
import Footer from './footerComponent/Footer';
import Form from './registrationForm/Form'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><Banner /><Card /></>} />
        <Route path="/about" element={<><About /></>} />
        <Route path="/services" element={<><Services /></>} />
        <Route path="/contacts" element={<><Contacts /></>} />
        <Route path="/form" element={<><Form /></>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//Navbar component was added to react app and imported to render on website.

//I implemented react Routes in order to aid the render of my different routes for linking the pages.

//I added the Footer component to the bottom of the page.