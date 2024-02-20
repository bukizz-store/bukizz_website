import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from './imageByIndex';

const EmblaClientCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

	return (
		<div className="embla w-full">
			<div
				className="embla__viewport "
				ref={emblaRef}>
				<div className="embla__container ">
					{slides.map((index) => (
						<div
							className="embla__slide "
							key={index}>
							<img
								className="embla__slide__img  h-[100%]"
								src={imageByIndex(index)}
								alt="Your alt text"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaClientCarousel;
