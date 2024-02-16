import image1_mb from "../../public/feature/one_mb.svg";
import image2_mb from "../../public/feature/two_mb.svg";
import image3_mb from "../../public/feature/three_mb.svg";
import image4_mb from "../../public/feature/four_mb.svg";
import image5_mb from "../../public/feature/five_mb.svg";

export const images = [image1_mb, image2_mb, image3_mb, image4_mb, image5_mb];

const imageByIndex_mb = (index) => images[index % images.length];

export default imageByIndex_mb;
