import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs';


function App() {
  const title = "Robert Merullo"
  const phone = "(303)638-1792"
  const email = "bmerullo85@gmail.com"

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutUs title={title} />} />
      </Routes>
      <Footer
        title={title}
        phone={phone}
        email={email} />
    </div>
  );
}

export default App;