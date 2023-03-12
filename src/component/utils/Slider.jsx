import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import img1 from "../../../public/images/cart.jpeg";
// import img2 from "../../../public/images/shopping1.avif";
import img3 from "../../../public/images/shopping1.webp";
import img4 from "../../../public/images/supermarket-cart-loaded.jpg";
import img5 from "../../../public/images/three-ladies-shopping.jpg";
// import img6 from "../../../public/images/two-beautiful-women-shopping-town.avif";
import img7 from "../../../public/images/women-shoppi g.webp";
import styles from "./Slider.module.css";

const bgImages = [img1, img3, img4, img5, img7];
function Slider() {
  return (
    <Carousel
      indicators={false}
      className={styles.carousel}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
    >
      {bgImages.map((item, key) => (
        <Image
          src={item}
          alt="jjjjjjjjj"
          key={key}
          className={styles.carousel_images}
          //   layout="fill"
          style={{ width: "100%", height: "100%" }}
        />
      ))}
    </Carousel>
  );
}

export default Slider;
