import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Slide1 from ".././asset/images/carousel/slide1.jpg"
import Slide2 from ".././asset/images/carousel/slide2.jpg";
import Slide3 from ".././asset/images/carousel/slide3.jpg";
import { Text } from "@mantine/core";


export default function CarouselAutoPlay() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      sx={{ maxWidth: 600 }}
      mx="auto"
      // withIndicators
      height={450}
      styles={{
        control: {
            
            opacity: 0,
            cursor: "default",
          
        },
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        {<img src={Slide1} className="slide" alt="slide1" />}
        <Text className="slide-legend">
          Légende de l’image sur 3 lignes format du carousel <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          dapibus turpis. <br />
          Nunc consequat lacus elementum augue vehicula, sit amet aliquet leo
          porta.{" "}
        </Text>
      </Carousel.Slide>
      <Carousel.Slide>
        {<img src={Slide2} className="slide" alt="slide2" />}
        <Text className="slide-legend">
          Légende de l’image sur 3 lignes format du carousel <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          dapibus turpis. <br />
          Nunc consequat lacus elementum augue vehicula, sit amet aliquet leo
          porta.{" "}
        </Text>
      </Carousel.Slide>
      <Carousel.Slide>
        {<img src={Slide3} className="slide" alt="slide3" />}
        <Text className="slide-legend">
          Légende de l’image sur 3 lignes format du carousel <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
          dapibus turpis. <br />
          Nunc consequat lacus elementum augue vehicula, sit amet aliquet leo
          porta.{" "}
        </Text>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
