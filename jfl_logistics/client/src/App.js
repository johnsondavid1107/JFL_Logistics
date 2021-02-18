import logo from './logo.svg';
import './App.css';
import NavBarComp from "./components/NavBarComp"
import Home from "./pages/Home"
import Footer from './components/Footer';




function App() {


  return (
    <div>
      <NavBarComp />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
