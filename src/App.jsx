import Header from "./components/Header";
import { Route } from "react-router-dom";
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/service" element={ <Service /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
