import image1 from "../../public/carousel/slide1.png";
import image2 from "../../public/carousel/slide2.png";
import image3 from "../../public/carousel/slide3.png";
import image4 from "../../public/carousel/slide4.png";

export const images = [
  image1, image2, image3, image4
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
