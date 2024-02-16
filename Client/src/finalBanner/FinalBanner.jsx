import './FinalBanner.css';
import pic from '../../public/finalBannerRect.png';
import { Link } from 'react-router-dom';

export default function FinalBanner() {
	return (
		<>
			<div className="finalBannerMainBox relative">
				<div className="w-auto h-full absolute left-0 top-0 mix-blend-color-dodge">
					<img
						className="w-70 h-64 object-cover rounded-3xl"
						src={pic}
						alt="Background"
					/>
				</div>
				<div className="flex flex-col rounded-3xl md:flex-row justify-center items-center  mx-auto  py-5 w-[90%] min-h-[255px] md:gap-10 md:p-5 lg:p-5 text-white relative z-[2]">
					<div className="font-bannertext relative flex flex-col justify-center items-start w-full  lg:gap-0.5 gap-4">
						<div className=" lg:text-[30px] text-[32px] font-bold text-start">
							Imagine a streamlined school
						</div>
						<div className="lg:text-[30px] text-[32px] font-bold text-start">
							Talks to Bukizz Experts and Make it Real
						</div>
					</div>
					<Link
						className="text-white px-4 py-2 border-2 border-white flex justify-center items-center mt-3 bg-white rounded-xl md:mt-2 w-full lg:w-[500px] lg:h-[75px]"
						to="/contact">
						<button className="font-semibold font-headline text-[#49108B] lg:text-3xl md:px-4 ">
							<p>Book Free Demo</p>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
