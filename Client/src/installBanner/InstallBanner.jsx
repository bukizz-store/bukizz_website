import google from '../../public/playstore.png';
import apple from '../../public/appstore.png';
import mobile from '../../public/phone.svg';
import img1 from '../../public/img1.png';
import img2 from '../../public/img2.png';
import rect1 from '../../public/rect1.png';
import rect2 from '../../public/rect2.png';
import './InstallBanner.css';

function InstallBanner() {
	return (
		<section className=" mainBox backdrop-opacity-5 h-[520px] w-[85%] lg:h-[255px]  relative items-center justify-center lg:pt-0 rounded-2xl overflow-hidden flex flex-col lg:flex-row mx-auto  ">
			<div className="w-auto h-full overflow-hidden  top-0 ">
				<img
					className="w-70 h-64 absolute top-0 left-[134px] r1 "
					src={rect2}
					alt="Rect2"
				/>
				<img
					className="absolute left-[0px] top-[3px] w-70 lg:h-64 h-96 r1 "
					src={rect1}
					alt="Rect1"
				/>
			</div>

			<div className="flex flex-col justify-center  items-start gap-4 lg:w-[90%] p-6 lg:py-0 lg:m-0 lg:px-20 mr-16">
				<div className="font-bannertext text-[40px]  font-bold text-white text-left leading-snug">
					One App for all your <br /> Student's Need
				</div>
				<div className="flex flex-col lg:flex-row gap-4 relative w-full  items-start">
					<img
						className="lg:w-44 w-full h-full ml-5 lg:m-0 lg:h-[57px]"
						src={apple}></img>
					<img
						className="lg:w-44 h-full w-full ml-5 lg:m-0  lg:h-[57px]"
						src={google}></img>
				</div>
			</div>

			<div className=" w-[100] lg:w-[50%] h-full lg:ml-8 hidden lg:inline-block ">
				<img
					className="w-[16rem]  lg:w-[20rem] absolute top-0  right-24 z-[1]"
					src={img1}></img>
				<img
					className=" w-[19rem]  absolute bottom-0 right-0 z-[2]"
					src={img2}></img>
			</div>
		</section>
	);
}

export default InstallBanner;
