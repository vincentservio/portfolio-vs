import React, {useState} from "react";
import projects from "../ProjectsTab";
export default function ProjectsTab() {
  const [project, setProject] = useState(4);
  console.log(projects);
  return (
    <div className="projects">
      <h1>TrackBackers</h1>
      <img src={"https://imgur.com/5sEJw4v.gif"} className={"two"} alt="img" />
      <center>
        <div className="one">
          Built using Ruby on Rails, React and Redux, I built a program that
          allows artists to organize their songs by progress status, as well as
          allowing them to store instrumental links and lyrics/notes.
        </div>
      </center>
      <br></br>
      <a
        href="https://trackbackers-65bf1.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button> Try TrackBackers!!!</button>
      </a>

      <br />
      <h1>FeetLockers</h1>
      <img src={"https://imgur.com/9uPOPZs.gif"} className={"two"} alt="img" />
      <center>
        {" "}
        <div className="one ">
          Built using Ruby on Rails and Sinatra, I built this program to Allow
          users to add and organize shoes in their personal collection, like a
          virtual sneaker closet.
        </div>
      </center>
      <br></br>

      <a
        href="https://feetlockers.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button> Try FeetLockers!!!</button>
      </a>
      <br />
      <h1>ChoreKeeper</h1>
      <img src={"http://i.imgur.com/I4XQzy0.gif"} className={"two"} alt="img" />
      <center>
        {" "}
        <div className="one">
          Built using Ruby on Rails and Sinatra, I built this program to Allow
          users to add and organize shoes in their personal collection, like a
          virtual sneaker closet.
        </div>
      </center>
      <br></br>
      <a
        href="https://vincentservio.github.io/ChoreKeeper_frontend/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button> Try ChoreKeeper!!!</button>
      </a>
    </div>
  );
}
