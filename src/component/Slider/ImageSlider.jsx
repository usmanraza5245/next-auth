import React from "react";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

function ImageSlider({ images }) {
  return (
    <Carousel
      NextIcon={<ArrowForwardIosIcon />}
      PrevIcon={<ArrowBackIosIcon />}
    >
      {images?.length > 0 &&
        images.map((image) => (
          <div className="" key={image.id}>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${image.path}`}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ))}
      {/* <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
}

export default ImageSlider;
