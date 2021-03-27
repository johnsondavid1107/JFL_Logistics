
import './App.css';
import NavBarComp from "./components/NavBarComp"
import Home from "./pages/Home"
import Footer from './components/Footer';
import About from "./components/aboutMain"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SocialMediaFooter from './components/SocialMediaFooter';




function App() {


  return (
    <div>
      <NavBarComp />


      <Router>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/about"}>
          <About />
        </Route>
        <Route exact path={"/Contact"}>
          <Contact />
        </Route>


      </Router>
      <SocialMediaFooter />
      <Footer />
    </div>
  );
}

export default App;
