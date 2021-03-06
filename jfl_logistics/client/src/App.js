
import './App.css';
import NavBarComp from "./components/NavBarComp"
import Home from "./pages/Home"
import Footer from './components/Footer';
import About from "./components/aboutMain";
import AboutJFL from "./components/aboutJFL"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SocialMediaFooter from './components/SocialMediaFooter';
import { ToastProvider, useToasts } from "react-toast-notifications"




function App() {


  return (
    <div>
      <ToastProvider>
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
          <Route exact path={"/location"}>
            <AboutJFL />
          </Route>


        </Router>
        <SocialMediaFooter />
        <Footer />
      </ToastProvider>
    </div>
  );
}

export default App;
