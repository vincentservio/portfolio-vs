import React from "react";
import Project from "../Skills/project";
import projects from "../ProjectsTab";
{
  /* <img src={imag} alt="new"></img> */
}

const Portfolio = () => {
  const pro = Object.values(projects);
  const project = pro.map((app, i) => {
    return (
      <>
        <Project
          key={i}
          title={app.title}
          img={app.img}
          languages={app.languages}
          description={app.description}
          gif={app.gif}
        />
      </>
    );
  });

  return <>{project}</>;
};

export default Portfolio;
