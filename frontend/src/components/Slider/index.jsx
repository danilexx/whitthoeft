import {
  Container,
  Slide,
  NextSlide,
  PreviousSlide,
  Dots,
  Dot,
} from "./styles";

const imgs = ["slides/image.png", "slides/0.jpg", "slides/1.jpeg"];
const Slider = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const slideRef = React.useRef();
  function passSlide() {
    if (activeIndex + 1 >= imgs.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(value => value + 1);
    }
  }
  function previousSlide() {
    if (activeIndex - 1 < 0) {
      setActiveIndex(imgs.length - 1);
    } else {
      setActiveIndex(value => value - 1);
    }
  }
  // React.useEffect(() => {
  //   setInterval(passSlide, 2000);
  // }, []);

  return (
    <Container>
      {imgs.map((e, index) => (
        <Slide
          ref={slideRef}
          src={e}
          cover={index === 1}
          isActive={activeIndex === index}
          key={index}
        />
      ))}
      <Slide
        src="http://placehold.it/1357x411"
        style={{ opacity: 0, position: "relative" }}
      />
      <NextSlide onClick={passSlide} />
      <PreviousSlide onClick={previousSlide} />
      <Dots>
        {[...Array(imgs.length)].map((nullValue, index) => (
          <Dot
            isActive={activeIndex === index}
            key={index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Dots>
    </Container>
  );
};

export default Slider;
