import { useRef } from 'react';
import './HeroSection.css';
import ReactPlayer from 'react-player';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function HeroSection() {
	return (
		<>
			<div className=" flex flex-col lg:flex-row  items-center justify-center md:gap-24 md:pl-24">
				<div className="flex flex-col md:gap-6">
					<div className="heroHeadline flex flex-col items-center gap-1 md:items-start">
						<h2 className="font-bannertext text-2xl md:text-[40px] leading-snug text-center">
							Take Your School Digital
						</h2>
						<h2 className="font-bannertext text-2xl md:text-[40px] leading-snug text-center pb-3">
							Manage. Automate. Engage
						</h2>
						<svg
							width="86"
							height="6"
							viewBox="0 0 86 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 3H83"
								stroke="url(#paint0_linear_509_3365)"
								strokeWidth="6"
								strokeLinecap="round"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_509_3365"
									x1="5.50001"
									y1="-0.50012"
									x2="83"
									y2="3.9999"
									gradientUnits="userSpaceOnUse">
									<stop stopColor="#49108B" />
									<stop
										offset="1"
										stopColor="#39A7FF"
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="font-subtext text-center text-slate-500 py-3 md:w-96 md:text-lg md:text-left ">
						From books to fees, parents to progress, Bukizz puts everything at
						your fingertips.
					</div>
					<Link
						className=" h-16 mx-4 md:mx-0 md:w-72 md:h-[60px] bg-gradient-to-r from-[#39A7FF] to-[#525CEB] rounded-2xl flex items-center justify-center "
						to="/contact">
						<button className="text-white md:text-[25px] md:font-semibold text-xl p-1.5 md:p-3.5 flex md:pl-6 md:gap-3 ">
							Book Free Demo
							<IconArrowRight className="w-7 h-7 font-bold hidden lg:inline-block" />
						</button>
					</Link>
				</div>
				<div className=" md:h-[650px] md:w-[650px] pt-12">
					<video
						autoPlay
						loop
						muted>
						<source
							src="Image.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
