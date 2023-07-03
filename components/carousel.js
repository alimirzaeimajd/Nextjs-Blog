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
          <div className="carousel-description">
            <h3>Breaking Bad</h3>
            <p>
              Walter White, a chemistry teacher, discovers that he has cancer
              and decides to get into the meth-making business to repay his
              medical debts. His priorities begin to change when he partners
              with Jesse.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Spider-Man-Across-The-Spider-Verse-Monitor-Culture.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="carousel-description">
            <h3>Spider Man Across The Spider Verse</h3>
            <p>
              After reuniting with Gwen Stacy, Brooklyn's full-time, friendly
              neighborhood Spider-Man is catapulted across the Multiverse, where
              he encounters a team of Spider-People charged with protecting its
              very existence. However, when the heroes clash on how to handle a
              new threat, Miles finds himself pitted against the other Spiders.
              He must soon redefine what it means to be a hero so he can save
              the people he loves most.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/the-batman-2022.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="carousel-description">
            <h3>The Batman</h3>
            <p>
              Batman is called to intervene when the mayor of Gotham City is
              murdered. Soon, his investigation leads him to uncover a web of
              corruption, linked to his own dark past.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
