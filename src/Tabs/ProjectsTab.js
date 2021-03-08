import React from "react";

export default function ProjectsTab() {
  return (
    <div className="App">
      <h1>TrackBackers</h1>
      <img src={"https://imgur.com/5sEJw4v.gif"} className={"prev"} alt="img" />
      <div id="describe">
        Built using Ruby on Rails, React and Redux, I built a program that
        allows artists to organize their songs by progress status, as well as
        allowing them to store instrumental links and lyrics/notes.
      </div>
      <br />
      <h1>TrackBackers</h1>
      <img src={"https://imgur.com/9uPOPZs.gif"} className={"prev"} alt="img" />
      <div id="describe">
        Built using Ruby on Rails and Sinatra, I built this program to Allow
        users to add and organize shoes in their personal collection, like a
        virtual sneaker closet.
      </div>
      <br />
      <h1>ChoreKeeper</h1>
      <img
        src={"http://i.imgur.com/I4XQzy0.gif"}
        className={"prev"}
        alt="img"
      />
      <div id="describe">
        Built using Ruby on Rails and Sinatra, I built this program to Allow
        users to add and organize shoes in their personal collection, like a
        virtual sneaker closet.
      </div>
    </div>
  );
}
