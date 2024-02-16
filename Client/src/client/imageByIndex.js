import image1 from "../../public/carousel/Property2.svg";
import image2 from "../../public/carousel/Property1.svg";
import image3 from "../../public/carousel/Property3.svg";

export const images = [
  image1, image2, image3
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
