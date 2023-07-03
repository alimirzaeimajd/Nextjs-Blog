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

  const emojiUniqId = [
    "1f37b",
    "1f483_1f3fb",
    "1f409",
    "1f6f8",
    "1f618",
    "1f606",
    "1f62d",
    "1f92f",
    "1f40e",
    "1f61c",
  ];

  const emojiName = [
    "Clinking-beer-mugs",
    "Dancer-woman",
    "Dragon",
    "Flying-saucer",
    "Kissing-heart",
    "Laughing",
    "Loudly-crying",
    "Mind-blown",
    "Racehorse",
    "Winky-tongue",
  ];

  const emoji = emojiUniqId.map(
    (id) => `https://fonts.gstatic.com/s/e/notoemoji/latest/${id}/emoji.svg`
  );

  const keys = emojiUniqId.map((id) => `${id}`);

  const [randomObject, setRandomObject] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * myarray.length);
    const randomObj = myarray[randomIndex];
    setRandomObject(randomObj);
  };

  const greeting = (
    <picture className="ml-2 mr-5">
      <source
        srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.webp"
        type="image/webp"
      />
      <img
        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif"
        alt="🤗"
        width="32"
        height="32"
      />
    </picture>
  );

  return (
    <Fragment>
      {!randomObject && (
        <div className="position-relative mt-20">
          <div className="position-absolute top-0 start-50 translate-middle">
            <span className="ml-[10px] flex">
              Hi {greeting} click the button and it will shown a random emoji
            </span>
          </div>
        </div>
      )}
      <div className="container text-center mt-3">
        <div className="row">
          {randomObject &&
            emoji.map((item, name) => (
              <div className="col" key={keys}>
                <img src={item} width="100px" height="100px" />
                <p>{emojiName[name]}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="position-relative mt-[15rem] text-center">
        <div className="position-absolute top-50 start-50 translate-middle">
          {randomObject && <p>{randomObject}</p>}
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={handleClick}
          >
            click here
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default EmojiPage;
