import React, {useState} from "react";

export default function Project(props) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === true) {
    return (
      <>
        <div className={"overlay"} />
        <div className={"ms"}>
          <h1>{props.title}</h1>
          <img src={props.gif} className={"preview"} alt="img" />
          <div>{props.description}</div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flip-card">
        <h2 className="titles" style={{fontSize: "3vw"}}>
          {" "}
          {props.title}
        </h2>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="lang">
              {props.languages.split(",").map((lang) => (
                <div> {lang} </div>
              ))}
            </div>
            <img className="project-img" src={props.img} alt="Avatar" />
          </div>
          <>
            <div className="flip-card-back">
              <div className="BWS">
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  OPEN
                </button>
                <p className="card-back">{props.description}</p>
              </div>
            </div>
          </>
        </div>
      </div>

      {/* <div className={"overlay"}/> ; */}
    </>
  );
}
