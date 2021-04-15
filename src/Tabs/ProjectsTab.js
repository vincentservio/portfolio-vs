import React, {useState} from "react";
import projects from "../ProjectsList";
export default function ProjectsTab() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const pro = Object.values(projects);
  const project = pro.map((app, i) => {
    // debugger;
    return (
      <div className="projects">
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Tab 1
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Tab 2
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Tab 3
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Content 1</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati praesentium incidunt quia aspernatur quasi quidem
                facilis quo nihil vel voluptatum?
              </p>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Content 2</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente voluptatum qui adipisci.
              </p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Content 3</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                sed nostrum rerum laudantium totam unde adipisci incidunt modi
                alias! Accusamus in quia odit aspernatur provident et ad vel
                distinctio recusandae totam quidem repudiandae omnis veritatis
                nostrum laboriosam architecto optio rem, dignissimos voluptatum
                beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>

        <h1>{app.title}</h1>
        <img src={app.gif} className={"two"} alt="img" />
        <center>
          <div className="one">{app.description}</div>
        </center>
        <br></br>
        <a href={app.link} target="_blank" rel="noopener noreferrer">
          <button> Try {app.title}!!!</button>
        </a>
      </div>
    );
  });
  return <div>{project}</div>;

  // // debugger;
  // const [project, setProject] = useState("");

  // console.log(projects);
  // return (
  //   <div className="projects">
  //     <h1>TrackBackers</h1>
  //     <img src={"https://imgur.com/5sEJw4v.gif"} className={"two"} alt="img" />
  //     <center>
  //       <div className="one">
  //         Built using Ruby on Rails, React and Redux, I built a program that
  //         allows artists to organize their songs by progress status, as well as
  //         allowing them to store instrumental links and lyrics/notes.
  //       </div>
  //     </center>
  //     <br></br>
  //     <a
  //       href="https://trackbackers-65bf1.web.app/"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <button> Try TrackBackers!!!</button>
  //     </a>

  //     <br />
  //     <h1>FeetLockers</h1>
  //     <img src={"https://imgur.com/9uPOPZs.gif"} className={"two"} alt="img" />
  //     <center>
  //       {" "}
  //       <div className="one ">
  //         Built using Ruby on Rails and Sinatra, I built this program to Allow
  //         users to add and organize shoes in their personal collection, like a
  //         virtual sneaker closet.
  //       </div>
  //     </center>
  //     <br></br>

  //     <a
  //       href="https://feetlockers.herokuapp.com/"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <button> Try FeetLockers!!!</button>
  //     </a>
  //     <br />
  //     <h1>ChoreKeeper</h1>
  //     <img src={"http://i.imgur.com/I4XQzy0.gif"} className={"two"} alt="img" />
  //     <center>
  //       {" "}
  //       <div className="one">
  //         Built using Ruby on Rails and Sinatra, I built this program to Allow
  //         users to add and organize shoes in their personal collection, like a
  //         virtual sneaker closet.
  //       </div>
  //     </center>
  //     <br></br>
  //     <a
  //       href="https://vincentservio.github.io/ChoreKeeper_frontend/"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <button> Try ChoreKeeper!!!</button>
  //     </a>
  //   </div>
  // );
}
