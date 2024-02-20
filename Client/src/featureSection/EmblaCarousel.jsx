import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styled from 'styled-components';

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
  const { options, onIndexChange } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);

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

  return (
    <CarouselContainer className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {jsonFile.map((data) => (
            <div className="embla__slide flex justify-center" key={data.index}>
              <Container>
                <div className=" w-full h-auto bg-white relative rounded-3xl shadow flex flex-wrap items-center justify-center">
                  <StyledImage
                    src={data.image}
                    className="w-1/2 md:w-auto"
                  />
                  {/* <div className="w-80 h-80 md:w-0 md:h-0 bg-gradient-to-b from-sky-400 to-sky-600 rounded-e-full" /> */}
                  <div className="flex flex-col md:w-auto md:ml-4">
                    <h1 className="text-black font-headline text-2xl pb-3">{data.heading}</h1>
                    <img src="../../assets/embla_corousel/line.svg" className="pb-3" />
                    <h1>{data.content}</h1>
                  </div>
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  .embla__slide {
    width: 100%;
  }
`;

const Container = styled.div`
  @media (max-width: 768px) {
    .embla__slide {
      width: 100%;
    }
  }
`;

const StyledImage = styled.img`
  @media (max-width: 770px) {
    width: 100px; 
    height:auto;
  }
`;

export default EmblaCarousel;
