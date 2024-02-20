import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = (props) => {
	const { slides, options, arr } = props;
	const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

	return (
		<div className="embla w-full ">
			<div
				className="embla__viewport "
				ref={emblaRef}>
				<div className="embla__container ">
					{slides.map((index) => (
						<div
							className="embla__slide "
							key={index}>
							<img
								className="embla__slide__img  "
								src={arr(index)}
								alt="Your alt text"
							/>
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
