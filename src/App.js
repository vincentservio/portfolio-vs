import "./App.css";
import "./portfolio.css";
import Header from "./Header";
import {Mission} from "./Skills/Mission";
import {Languages} from "./Skills/Languages";
import Skills from "./Skills";
import Portfolio from "./Portfolio/Portfolio.js";
import {Footer} from "./Footer/Footer";
import {Nav} from "./Nav";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Project from "./Skills/project";
import ProjectsTab from "./Tabs/ProjectsTab";
import ReferalTab from "./Tabs/ReferalTab";
import HomeTab from "./Tabs/HomeTab";
import AboutTab from "./Tabs/AboutTab";
import {ContactTab} from "./Tabs/ContactTab";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Header /> */}

        <Switch>
          <Route path="/Projects" exact component={ProjectsTab} />
          <Route path="/About" exact component={AboutTab} />
          <Route path="/Contact" exact component={ContactTab} />
          <Route path="/Referal" exact component={ReferalTab} />
          <Route path="/" exact component={HomeTab} />
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
