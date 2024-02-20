import image1 from "../../public/feature/one.svg";
import image2 from "../../public/feature/two.svg";
import image3 from "../../public/feature/three.svg";
import image4 from "../../public/feature/four.svg";
import image5 from "../../public/feature/five.svg";

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
