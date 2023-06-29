import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/breaking-bad.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Breaking Bad (TV Series 2008–2013)</h3>
          <p>
            Walter White, a chemistry teacher, discovers that he has cancer and
            decides to get into the meth-making business to repay his medical
            debts. His priorities begin to change when he partners with Jesse.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/its-wonderful-life.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>It's a Wonderful Life (1946)</h3>
          <p>
            When a frustrated businessman, George Bailey, becomes suicidal, an
            angel from heaven, Clarence, is sent to him. To his change of heart,
            she shows him what life would have been without his existence.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/the-batman-2022.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Batman (2022)</h3>
          <p>
            Batman is called to intervene when the mayor of Gotham City is
            murdered. Soon, his investigation leads him to uncover a web of
            corruption, linked to his own dark past.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
