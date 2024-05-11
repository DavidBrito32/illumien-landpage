import { Container, Items, Videos } from "./styles";
import video1 from "../assets/01.mov";
import video2 from "../assets/02.mp4";
import video3 from "../assets/03.mov";

const VideoCarrousel = (): JSX.Element => {
  return (
    <>
      <Container>
        <Items>
          <div className="relative w-full h-full 2xl:h-2/4 px-5 flex gap-5 lg:gap-10 md:justify-around lg:justify-center md:items-center duration-500">
            <Videos controls className="order-2 md:order-1">
              <source src={video1} />
            </Videos>
            <Videos 
              autoPlay 
              controls
              muted
              loop
              className="order-1 md:order-2"
              >
              <source src={video2} />
            </Videos>
            <Videos 
            controls
            className="order-3 md:order-3"
            >
              <source src={video3} />
            </Videos>
          </div>
        </Items>
      </Container>
    </>
  );
};

export default VideoCarrousel;
