import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import FeatureCard from "./FeatureCard";

const jsonFile = [
  {
    index: 1,
    image: "../../assets/embla_corousel/delivery_person.svg",
    heading: "Doorstep Delivery",
    content:
      "A Platform to doorstep Deliver the School amenities such as Booksets , Uniforms, Stationaries ,etc.",
  },
  {
    index: 2,
    image: "../../assets/embla_corousel/phone_showcase.svg",
    heading: "Optimize Admissions",
    content:
      "Online application, fee, and document management. Clear information, minimal paperwork.",
  },
  {
    index: 3,
    image: "../../assets/embla_corousel/parents.svg",
    heading: "Parent-School Communication Bridge",
    content:
      "Instant notifications, event news, and online discussions. Keeps parents involved and students backed.",
  },
  {
    index: 4,
    image: "../../assets/embla_corousel/school_promotion.svg",
    heading: "School Promotion",
    content:
      "Consolidate ad campaigns in one spot. Attractive banners, expanded reach, boost enrollments.",
  },
  {
    index: 5,
    image: "../../assets/embla_corousel/admin.svg",
    heading: "Automate Admin Tasks",
    content:
      "Ditch the paperwork. Automate routine tasks, free up time for what matters most: your students.",
  },
];

const EmblaCarousel = (props) => {
  const { slides, options, arr, onIndexChange } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentIndex(index);
        if (onIndexChange) {
          onIndexChange(index);
        }
      };
      emblaApi.on("select", onSelect);
      return () => emblaApi.off("select", onSelect);
    }
  }, [emblaApi, onIndexChange]);
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {jsonFile.map((data) => (
            <div className="embla__slide flex justify-center" key={data.index}>
              <div className=" w-[60vw] h-[20vw] bg-white relative rounded-3xl shadow flex">
                <div className=" w-[22rem] h-[20vw] ">
                  <img
                    src={data.image}
                    className="absolute w-[15vw] left-20 bottom-0 pl-0"
                  ></img>
                  <div className="w-80 h-80 left-[-90.33px] top-[-30px] bg-gradient-to-b from-sky-400 to-sky-600 rounded-e-full" />
                </div>

                <div className="flex place-content-center flex-wrap flex-col w-[30vw] items-start">
                  <h1 className=" text-black font-headline text-2xl pb-3 w-[20vw] text-start">
                    {data.heading}
                  </h1>
                  <img
                    className="pb-3"
                    src="../../assets/embla_corousel/line.svg"
                  ></img>
                  <h1 className=" text-start">{data.content}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import imageByIndex from './imageByIndex';
// import imagebyMobile from './imagebyMobile';

// const EmblaCarousel = (props) => {
// 	const { slides, options } = props;
// 	const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

// 	return (
// 			// <div className="embla  ">
// 			// 	<div
// 			// 		className="embla__viewport "
// 			// 		ref={emblaRef}>
// 			// 		<div className="embla__container ">
// 			// 			{slides.map((index) => (
// 			// 				<div
// 			// 					className="embla__slide "
// 			// 					key={index}>
// 			// 					<img
// 			// 						className="embla__slide__img  h-[100%]"
// 			// 						src={imageByIndex(index)}
// 			// 						alt="Your alt text"
// 			// 					/>
// 			// 				</div>
// 			// 			))}
// 			// 		</div>
// 			// 	</div>
// 			// </div>
// 			<div className="embla w-full">
// 				<div
// 					className="embla__viewport "
// 					ref={emblaRef}>
// 					<div className="embla__container ">
// 						{slides.map((index) => (
// 							<div
// 								className="embla__slide "
// 								key={index}>
// 								<img
// 									className="embla__slide__img  "
// 									src={imagebyMobile(index)}
// 									alt="Your alt text"
// 								/>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>

// 			{/* <div className="flex justify-center items-center md:mr-12 md-[100%] lg:w-[40%]">
// 				<section className="sandbox__carousel">
// 					<EmblaClientCarousel
// 						slides={SLIDES}
// 						options={OPTIONS}
// 					/>
// 				</section>
// 			</div> */}
// 	);
// };

// export default EmblaCarousel;
