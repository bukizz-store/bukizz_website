import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import pic from '../../public/group.svg';
import pic2 from '../../public/finalBannerRect.png';
import { Link } from 'react-router-dom';
const About = () => {
	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center flex-col md:px-12  pt-20 md:pt-48">
				<p className=" bg-gradient-to-b from-[#7E30E1] to-[#39A7FF] p-3 inline-block text-transparent bg-clip-text text-2xl md:text-5xl font-bold">
					Empowering Education Together
				</p>
				<p className="text-center md:px-28 pb-4 px-2 md:text-lg text-[#3D3B56CC] pt-4">
					Founded in 2022, Bukizz is reshaping how schools and parents interact
					by providing a one-stop shop for school essentials like booksets,
					uniforms, and shoes. Our mission is to make school shopping
					convenient, offering discounts and premium delivery services. With a
					focus on solving marketing challenges for schools and easing the
					search for parents, Bukizz serves as a bridge, ensuring every child
					finds the right school while parents enjoy unmatched convenience. Join
					our journey to streamline the educational experience.
				</p>
				<img
					src={pic}
					className="w-[1200px] pb-16"
				/>
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
							<div className=" lg:text-[30px] text-[18px] font-bold text-start">
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

export default About;
