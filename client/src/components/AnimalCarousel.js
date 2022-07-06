import React from "react";
import Carousel from "react-bootstrap/Carousel";

const AnimalCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="image"
          src="https://www.aphis.usda.gov/wcm/connect/5cacefca-4c7b-450a-9bab-ede271e9e8a7/1/lizard-box.jpg?MOD=AJPERES&CVID="
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://www.ourstate.com/wp-content/uploads/2022/01/FEB22-Spotted-Salamander-on-White-GettyImages-1280x600.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Haemulon_melanurum_-_pone.0010676.g092.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://img.freepik.com/free-photo/tiger-white-background-isolate-full-body_34998-211.jpg?w=2000"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://www.nhm.ac.uk/content/dam/nhmwww/our-science/our-work/biodiversity/colour-and-vision/coloured_shells_full_width.jpg.thumb.1160.1160.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://www.airedalesprings.co.uk/wp-content/uploads/2015/07/Grasshopper-iStock_000018679411_Medium-1024x697.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src="https://s1.1zoom.me/b5050/742/Birds_Eagles_Wings_White_background_543288_3840x2160.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default AnimalCarousel;
