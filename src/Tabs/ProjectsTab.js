import React, {useState} from "react";
import projects from "../ProjectsList";

export default function ProjectsTab() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const pro = Object.values(projects);
  const project = pro.map((app, i) => {
    return (
      <div
        className={
          toggleState === i + 1 ? "content  active-content" : "content"
        }
      >
        <h1 style={{color: "black"}}>{app.title}</h1>
        <img src={app.gif} className={"two"} alt="img" />
        <a href={app.link} target="_blank" rel="noopener noreferrer">
          <button> Try {app.title}!!!</button>
        </a>
        <br></br>
        <center>
          <div className="one">{app.description}</div>
        </center>
      </div>
    );
  });

  // debugger;
  return (
    <div className="projects">
      <center>
        <div className="container">
          {/* <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs " : "tabs"}
              onClick={() => toggleTab(1)}
            >
              {pro[0].title}
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              {pro[1].title}
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              {pro[2].title}
            </button>
          </div> */}
          <div>
            <ul class="PrimaryNav with-indicator">
              {/* <li class="Nav-item">
                <a
                  style={{fontSize: "2vw"}}
                  href="https://github.com/vincentservio"
                  target="_blank"
                >
                  Git
                </a>
              </li> */}
              <li
                className={
                  toggleState === 1 ? "Nav-item is-active" : "Nav-item"
                }
                onClick={() => toggleTab(1)}
              >
                <a style={{fontSize: "2vw"}}>TrackBackers</a>
              </li>
              <li
                className={
                  toggleState === 2 ? "Nav-item is-active" : "Nav-item"
                }
                onClick={() => toggleTab(2)}
              >
                <a style={{fontSize: "2vw"}}>ChoreKeeper</a>
              </li>

              <li
                className={
                  toggleState === 3 ? "Nav-item is-active" : "Nav-item"
                }
                onClick={() => toggleTab(3)}
              >
                <a style={{fontSize: "2vw"}}>FeetLockers</a>
              </li>

              {/* <li class="Nav-item">
                <a
                  style={{fontSize: "2vw"}}
                  href="https://vincentservio.medium.com/"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
            </ul>

            {project}
          </div>
          {/* 
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h1>{pro[0].title}</h1>
              <img src={pro[0].gif} alt="img" />
              <center>
                <div className="one">{pro[0].description}</div>
              </center>
              <br></br>
              <a href={pro[0].link} target="_blank" rel="noopener noreferrer">
                <button> Try {pro[0].title}!!!</button>
              </a>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h1>{pro[1].title}</h1>
              <img src={pro[1].gif} className={"two"} alt="img" />
              <center>
                <div className="one">{pro[1].description}</div>
              </center>
              <br></br>
              <a href={pro[1].link} target="_blank" rel="noopener noreferrer">
                <button> Try {pro[1].title}!!!</button>
              </a>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h1>{pro[2].title}</h1>
              <img src={pro[2].gif} className={"two"} alt="img" />
              <center>
                <div className="one">{pro[2].description}</div>
              </center>
              <br></br>
              <a href={pro[2].link} target="_blank" rel="noopener noreferrer">
                <button> Try {pro[2].title}!!!</button> */}
          {/* </a> */}
        </div>
        {/* </div> */}
        {/* </div> */}

        {/* <h1>{app.title}</h1>
      <img src={app.gif} className={"two"} alt="img" />
      <center>
        <div className="one">{app.description}</div>
      </center>
      <br></br>
      <a href={app.link} target="_blank" rel="noopener noreferrer">
        <button> Try {app.title}!!!</button>
      </a> */}
      </center>
    </div>
  );

  // return <div>{project}</div>;

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
