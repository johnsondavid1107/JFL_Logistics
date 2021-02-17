import logo from './logo.svg';
import './App.css';
import NavBarComp from "./components/NavBarComp"
import Home from "./pages/Home"
import JFLTruck from "./components/jflTruck.jpg"



function App() {

  const styles = {
    truckImage: {
      backgroundImage: `url(${JFLTruck})`,
      width: "50%",
      height: "800px"
    },
    parallax: {
      width: "100%",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${JFLTruck})`,
      height: "400px"

    }
  }
  return (
    <div>
      <NavBarComp />
      <Home />

      <div className="row">
        <div className="col-12">
          <div src={JFLTruck} alt="truck" style={styles.parallax}></div>

        </div>
      </div>




    </div>
  );
}

export default App;
