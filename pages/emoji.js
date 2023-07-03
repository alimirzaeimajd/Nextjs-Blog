import React, { Fragment, useState } from "react";

import {
  Clinking,
  Dancer,
  Dragon,
  Flying,
  Kissing,
  Lauphing,
  Loudly,
  Mind,
  Racehorse,
  Winky,
} from "../animated-emojis";

function EmojiPage() {
  const myarray = [
    Clinking,
    Dancer,
    Dragon,
    Flying,
    Kissing,
    Lauphing,
    Loudly,
    Mind,
    Racehorse,
    Winky,
  ];

  const [randomObject, setRandomObject] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * myarray.length);
    const randomObj = myarray[randomIndex];
    setRandomObject(randomObj);
  };

  return (
    <Fragment>
      {/* <div className="container text-center">
        <div className="row">
          {myarray.map((item) => (
            <div className="col">{item}</div>
          ))}
        </div>
      </div> */}
      <div className="container text-center">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
      {randomObject && <p>{randomObject}</p>}
      <button className="btn btn-outline-primary btn-lg" onClick={handleClick}>
        click here
      </button>
    </Fragment>
  );
}

export default EmojiPage;
