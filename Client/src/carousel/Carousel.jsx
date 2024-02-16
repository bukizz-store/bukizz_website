import EmblaCarousel from './EmblaCarousel';
import './embla.css';
import imageByIndex from './imageByIndex';
import imagebyMobile from './imagebyMobile';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel() {
	return (
		<div>
			<div className="font-bold md:text-4xl md:w-[500px] leading-snug text-2xl bg-gradient-to-r from-violet-600 to-sky-600 inline-block text-transparent bg-clip-text">
				Our Community share their Bukizz Experience
			</div>
			<main className=" hidden md:inline">
				<section>
					<EmblaCarousel
						slides={SLIDES}
						options={OPTIONS}
						arr={imageByIndex}
					/>
				</section>
			</main>
			<main className=" md:hidden">
				<section>
					<EmblaCarousel
						slides={SLIDES}
						options={OPTIONS}
						arr={imageByIndex}
					/>
				</section>
			</main>
		</div>
	);
}
