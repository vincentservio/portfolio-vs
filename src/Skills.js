import React from "react";
import Cards from "./Skills/Cards";

const cards = {
  FrontEnd: {
    icon: "https://img.icons8.com/dotty/50/000000/source-code.png",
    skill: "Front End",
    program1: "JavaScript",
    program2: "React/Redux",
    program3: "HTML5/CSS",
    program4: "CLI",
  },
  BackEnd: {
    icon: "https://img.icons8.com/ios-filled/50/000000/server.png",
    skill: "Back End",
    program1: "Ruby On Rails",
    program2: "SQL",
    program3: "Sinatra",
    program4: "REST/API",
  },
  Miscellaneous: {
    icon: "https://img.icons8.com/ios-filled/50/000000/apple-app-store--v1.png",

    skill: "Miscellaneous",
    program1: "Adobe Cloud",
    program2: "Microsoft Office",
    program3: "AutoCAD",
    program4: "Logic Pro/ProTools",
  },
  Deployment: {
    icon: "https://img.icons8.com/ios-filled/50/000000/upload-to-cloud.png",
    skill: "Deployment",
    program1: "Heroku",
    program2: "Firebase",
    program3: "AWS",
    program4: "-",
  },
};

const Skillcards = () => {
  const pro = Object.values(cards);
  const project = pro.map((app, i) => {
    return (
      <>
        <Cards
          key={i}
          icon={app.icon}
          skill={app.skill}
          program1={app.program1}
          program2={app.program2}
          program3={app.program3}
          program4={app.program4}
        />
      </>
    );
  });

  return <div className="skills">{project}</div>;
};
export default Skillcards;
