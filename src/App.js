import "./App.css";
import "./portfolio.css";
import Header from "./Header";
import {Mission} from "./Skills/Mission";
import {Languages} from "./Skills/Languages";
import Skills from "./Skills";
import Portfolio from "./Portfolio/Portfolio.js";
import {Footer} from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <div className="titles">
        Web Developer
        <br />
        With Hands On Experience
      </div>
      <Languages />
      <Mission />
      <br />
      <Skills />

      <div className="titles" style={{fontSize: "5vw"}}>
        PROJECT PORTFOLIO
      </div>
      <Portfolio />

      <div style={{color: "white", paddingTop: "40px"}}>
        <br /> Hover over cards to open project and view description!
      </div>

      <Footer />
    </div>
  );
}

export default App;
