import './Clients.css';
import EmblaClientCarousel from './EmblaClientCarousel';
import '../carousel/embla.css';
import { Link } from 'react-router-dom';
import '../assets/fonts/fonts.css';
const OPTIONS = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Clients() {
	return (
		<>
			<div
				id="clientsId"
				className="fnt flex flex-col p-4 px-5 gap-3 md:flex-row lg:gap-16 lg:pl-40 ">
				<div className="md:text-left md:w-[440px] md:ml-12 flex flex-col gap-4 md:gap-0">
					<div className="font-headline text-left font-bold text-[35px]  bg-gradient-to-l from-violet-600 to-blue-600 inline-block text-transparent bg-clip-text md:pb-4">
						Schools that we serve
					</div>
					<div className="flex flex-col gap-2 px-4 md:px-0 md:gap-4">
						<p className="font-subtext text-gray-500 text-left ">
							School authorities and businesses are our major clients. We’re
							architects of a better digital future for them.
						</p>
						<p className="font-subtext text-gray-500 text-left">
							Craft your school's perfect solution.
							<p className="font-subtext inline text-black">
								Talk to a Bukizz expert today!
							</p>
						</p>
					</div>
					<Link
						className="mb-4 mx-2 flex justify-center text-lg items-center rounded-xl bg-gradient-to-r from-[#39A7FF]  to-[#525CEB] text-white h-12 md:w-48 md:mt-10 md:px-0  font-semibold"
						to="/contact">
						<button>
							<p className="font-headline">Book Free Demo</p>
						</button>
					</Link>
				</div>
				<div className="flex justify-center items-center md:mr-12 md-[100%] lg:w-[40%]">
					<section className="sandbox__carousel">
						<EmblaClientCarousel
							slides={SLIDES}
							options={OPTIONS}
						/>
					</section>
				</div>
			</div>
		</>
	);
}
