import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import pic from '../../public/group.svg';
import sol1 from '../../public/solmg1.svg';
import sol2 from '../../public/solmg2.svg';
import sol3 from '../../public/solmg4.svg';
import pic2 from '../../public/finalBannerRect.png';
import { Link } from 'react-router-dom';

import Feature from './feature/Feature';

let small = [
	{
		logo: 'solcon1.svg',
		heading: 'Dedicated Support',
		text: 'Our team is dedicated to providing personalized support, ensuring that both parents and schools have a seamless experience on our platform.',
	},
	{
		logo: 'solcon2.svg',
		heading: 'Continuous Improvement',
		text: 'Our commitment to excellence is reflected in our personalized support, designed to ensure a seamless experience for both parents and schools.',
	},
];

const Solution = () => {
	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center flex-col md:px-12  pt-20 md:pt-48">
				<p className=" bg-gradient-to-b from-[#7E30E1] to-[#39A7FF] p-3 inline-block text-transparent bg-clip-text text-2xl md:text-5xl font-bold">
					Solutions We Offer
				</p>
				<p className="text-center md:px-72 pb-4 px-2 md:text-xl inline text-[#3D3B56CC] pt-4">
					At Bukizz, we transform the school experience for parents and
					institutions as a marketplace and solution-oriented platform.
				</p>
			</div>
			<div className="flex flex-col pt-6 gap-20">
				<div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 justify-around mx-12 md:mx-32 ">
					<div className="bg-sky-500 p-10 rounded-[21px] ">
						<img
							src={sol1}
							className="w-[450px]"
						/>
					</div>
					<div className="md:pt-12 text-left  md:w-[50%] flex flex-col gap-2">
						<p className="font-semibold  text-2xl md:text-4xl pb-2 text-center md:text-left">
							Seamless Delivery Services{' '}
						</p>
						<svg
							className="hidden md:inline"
							width="144"
							height="7"
							viewBox="0 0 144 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 3.49976L141 3.49974"
								stroke="url(#paint0_linear_2450_7014)"
								stroke-width="6"
								stroke-linecap="round"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_2450_7014"
									x1="7.31251"
									y1="-0.000364824"
									x2="140.118"
									y2="13.3017"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#49108B" />
									<stop
										offset="1"
										stop-color="#39A7FF"
									/>
								</linearGradient>
							</defs>
						</svg>

						<div class="inline-block pt-2">
							<p className="md:text-gray-800 text-gray-500 text-xl font-semibold  inline pt-2">
								What We Provide:{' '}
							</p>
							<p className="text-[#7A7A7A] text-xl inline">
								{' '}
								Enjoy the convenience of having essential school amenities,
								including booksets, uniforms, and shoes, delivered straight to
								your doorstep.
							</p>
						</div>

						<div className="inline-block pt-1">
							<p className="md:text-gray-800 text-gray-500 text-xl font-semibold  inline pt-2">
								Discounts for Affordability:{' '}
							</p>
							<p className="text-[#7A7A7A] text-xl inline">
								{' '}
								We understand the financial commitment that comes with preparing
								for the school year. That's why we offer discounts to make these
								necessities more affordable for parents.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-around mx-12 md:mx-32 ">
					<div className="bg-sky-500 px-10 rounded-[21px] md:w-[500px] pt-[55px] pl-20 ">
						<img
							src={sol2}
							className="md:w-[300px] w-[200px]"
						/>
					</div>
					<div className="md:pt-12 text-left  md:w-[50%] flex flex-col gap-2">
						<p className="font-semibold  text-2xl md:text-4xl pb-2 text-center md:text-left">
							Global School Platform
						</p>
						<svg
							width="144"
							height="7"
							viewBox="0 0 144 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 3.49976L141 3.49974"
								stroke="url(#paint0_linear_2450_7014)"
								stroke-width="6"
								stroke-linecap="round"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_2450_7014"
									x1="7.31251"
									y1="-0.000364824"
									x2="140.118"
									y2="13.3017"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#49108B" />
									<stop
										offset="1"
										stop-color="#39A7FF"
									/>
								</linearGradient>
							</defs>
						</svg>

						<div class="inline-block pt-2">
							<p className="md:text-gray-800 text-gray-500 text-xl font-semibold  inline pt-2">
								Visibility for Schools:{' '}
							</p>
							<p className="text-[#7A7A7A] text-xl inline">
								{' '}
								For educational institutions, Bukizz serves as a global
								platform, offering visibility and a dedicated space to showcase
								their unique features.
							</p>
						</div>
						<div class="inline-block pt-2">
							<p className="md:text-gray-800 text-gray-500 text-xl font-semibold  inline pt-2  ">
								Enhanced Outreach:{' '}
							</p>
							<p className="text-[#7A7A7A] text-xl inline">
								{' '}
								Schools can leverage our platform to enhance their outreach
								efforts, connecting with parents and the community more
								effectively.
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 justify-around mx-12 md:mx-32 ">
					<div className="bg-sky-500 p-2 rounded-[21px] ">
						<img
							src={sol3}
							className="w-[550px] md:h-[350px]"
						/>
					</div>
					<div className="md:pt-12 text-left  md:w-[50%] flex flex-col gap-2">
						<p className="font-semibold  text-2xl md:text-4xl pb-2 text-center md:text-left">
							School ERP Solutions
						</p>
						<svg
							width="144"
							height="7"
							viewBox="0 0 144 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 3.49976L141 3.49974"
								stroke="url(#paint0_linear_2450_7014)"
								stroke-width="6"
								stroke-linecap="round"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_2450_7014"
									x1="7.31251"
									y1="-0.000364824"
									x2="140.118"
									y2="13.3017"
									gradientUnits="userSpaceOnUse">
									<stop stop-color="#49108B" />
									<stop
										offset="1"
										stop-color="#39A7FF"
									/>
								</linearGradient>
							</defs>
						</svg>
						<div class="inline-block pt-2">
							<p className="md:text-gray-800 text-gray-500 text-xl font-semibold  inline pt-2  inline-block pt-2">
								In-depth Administrative Insights:{' '}
							</p>
							<p className="text-[#7A7A7A] text-xl inline">
								{' '}
								Our platform delivers detailed insights into school
								administration, surpassing simple listings.
							</p>
						</div>
						<div class="inline-block pt-2">
							<p className="md:text-gray-800 text-gray-500 text-xl font-semibold  inline pt-2  ">
								Streamlined School Operations:{' '}
							</p>
							<p className="text-[#7A7A7A] text-xl inline">
								{' '}
								With integrated ERP solutions, we streamline administrative
								tasks, enhancing educational focus and efficiency.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row md:justify-center gap-12 mt-24 mb-32   ">
				{small.map((feature, index) => {
					return (
						<Feature
							key={index}
							logo={feature.logo}
							heading={feature.heading}
							text={feature.text}
						/>
					);
				})}
			</div>

			<div className="footerBG md:flex md:flex-col">
				<div className="finalBannerMainBox w-[98%] md:w-[90%] md:h-40 h-48 relative">
					<div className="w-auto h-full absolute left-0 top-0 mix-blend-color-dodge z-10">
						<img
							className="md:w-[500px] h-40 object-cover rounded-3xl "
							src={pic2}
							alt="Background"
						/>
					</div>
					<div className="flex flex-col rounded-3xl md:flex-row justify-center items-center  mx-auto  md:pt-20 w-[90%] md:gap-10 md:p-5 lg:pb-24 text-white relative z-[2]">
						<div className="font-bannertext relative flex flex-col justify-center items-start w-full  lg:gap-0.5 gap-4">
							<div className=" lg:text-[30px] text-[19px] font-bold text-start">
								Ready to showcase you school on Bukizz ?
							</div>
						</div>
						<Link
							className="text-white px-1 py-2 border-2 border-white flex justify-center items-center mt-7 md:mt-3 bg-white rounded-xl md:mb-4  w-full lg:w-[350px] lg:h-[65px]"
							to="/contact">
							<button className=" font-headline text-[#49108B] lg:text-[25px] md:px-4 ">
								<p>Contact Us</p>
							</button>
						</Link>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Solution;
