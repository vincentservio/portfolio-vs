import React, {Component} from "react";
import Cards from "./Skills/Cards";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Cards
          icon={"https://img.icons8.com/dotty/50/000000/source-code.png"}
          skill={"Front End"}
          program1={"JavaScript"}
          program2={"React/Redux"}
          program3={"HTML5/CSS"}
          program4={"Command Line Interface"}
        />
        <Cards
          icon={"https://img.icons8.com/ios-filled/50/000000/server.png"}
          skill={"Back End"}
          program1={"Ruby On Rails"}
          program2={"SQL"}
          program3={"Sinatra"}
          program4={"REST/API"}
        />{" "}
        <Cards
          icon={
            "https://img.icons8.com/ios-filled/50/000000/apple-app-store--v1.png"
          }
          skill={"Miscellaneous"}
          program1={"Adobe Cloud"}
          program2={"Microsoft Office"}
          program3={"AutoCAD"}
          program4={"Logic Pro/ProTools"}
        />
        <Cards
          icon={
            "https://img.icons8.com/ios-filled/50/000000/upload-to-cloud.png"
          }
          skill={"Deployment"}
          program1={"-"}
          program2={"Firebase"}
          program3={"AWS"}
          program4={"-"}
        />{" "}
        {/* <div className="card"></div> */}
      </div>
    );
  }
}
