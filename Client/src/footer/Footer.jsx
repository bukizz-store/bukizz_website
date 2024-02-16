import './Footer.css';
import Logo from '../../public/Logo.png';
import { Link } from 'react-router-dom';
export default function Footer() {
	return (
		<>
			<div className="footerMainBox flex flex-col  ">
				<div className="container flex flex-col lg:flex-row justify-center items-center gap-3 pb-4 md:pb-0 md:mb-20 md:gap-24 lg:gap-32 lg:items-start">
					<div className=" flex text-black  items-center gap-3">
						<img src={Logo} />
						<p className="font-semibold text-lg md:pb-1">Bukizz</p>
					</div>
					<div className="flex justify-between gap-10 pb-4 md:pb-0 md:gap-12 lg:gap-36 pt-2 md:pt-0">
						<div className="flex-col md:text-lg flex gap-4 md:gap-8">
							<h3 className="font-footerHeading md:text-xl ">Company</h3>
							<div className="font-footerText md:text-lg text-sm gap-2 text-left text-slate-600 md:gap-6 flex flex-col">
								<Link to="/solution">
									<p className="">Solutions</p>
								</Link>
								<Link to="/contact">
									<p className="">Contact Us</p>
								</Link>
								<Link to="testID">
									<p className="">Testimonial</p>
								</Link>
								<Link to="clientsID">
									<p className="">Clients</p>
								</Link>
							</div>
						</div>
						<div className="  flex flex-col gap-4 md:gap-8 md:w-30  ml-5 lg:m-0">
							<h3 className="font-footerHeading md:text-xl ">Legal</h3>
							<div className="font-footerText md:text-lg text-sm gap-2 text-left text-slate-600 md:gap-6 flex flex-col">
								<Link to="/privacy"><p className="">Privacy policy</p></Link>
							</div>
							<div className="font-footerText md:text-lg text-sm gap-2 text-left text-slate-600 md:gap-6 flex flex-col">
								<Link to="/disclamer"><p className="">Disclamer</p></Link>
							</div>
							<div className="font-footerText md:text-lg text-sm gap-2 text-left text-slate-600 md:gap-6 flex flex-col">
								<Link to="/terms_condition"><p className="">Terms and Conditions</p></Link>
							</div>
							<div className="font-footerText md:text-lg text-sm gap-2 text-left text-slate-600 md:gap-6 flex flex-col">
								<Link to="/cookies"><p className="">Cookie Policy</p></Link>
							</div>
						</div>
						<div className=" flex flex-col gap-4 md:gap-8">
							<h3 className="font-footerHeading md:text-xl  ">Product</h3>
							<div className="font-footerText md:text-lg text-sm gap-2 text-left text-slate-600 md:gap-6 flex flex-col">
								<p className="">Courses</p>
								<p className="">Pricing</p>
								<p className="">Blog</p>
							</div>
						</div>
					</div>
					<div className="flex gap-6">
						<div className="">
							<svg
								width="42"
								height="42"
								viewBox="0 0 65 64"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect
									x="5.67465"
									y="5.44875"
									width="54"
									height="54"
									rx="27"
									stroke="#3D3B40"
									strokeWidth="1.54839"
								/>
								<path
									d="M38.105 34.1667L38.7665 30.1542H34.6279V27.5515C34.6279 26.4535 35.205 25.3825 37.0587 25.3825H38.9414V21.9664C38.9414 21.9664 37.2335 21.6953 35.6013 21.6953C32.1914 21.6953 29.9646 23.6175 29.9646 27.096V30.1542H26.1757V34.1667H29.9646V43.8673C30.7253 43.9785 31.5035 44.0354 32.2963 44.0354C33.089 44.0354 33.8672 43.9785 34.6279 43.8673V34.1667H38.105Z"
									fill="#3D3B40"
								/>
							</svg>
						</div>
						<div className="">
							<svg
								width="42"
								height="42"
								viewBox="0 0 64 64"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect
									x="4.31124"
									y="5.44875"
									width="54"
									height="54"
									rx="27"
									stroke="#3D3B40"
									strokeWidth="1.54839"
								/>
								<path
									d="M28.1259 41.5025C25.34 41.5025 22.743 40.6922 20.5572 39.2941C22.413 39.4142 25.6882 39.1266 27.7253 37.1835C24.6608 37.0429 23.2788 34.6925 23.0985 33.6881C23.3589 33.7886 24.6007 33.9091 25.3017 33.6279C21.7765 32.744 21.2357 29.6503 21.3559 28.7062C22.0169 29.1682 23.1385 29.3289 23.5792 29.2888C20.2944 26.9384 21.4761 23.4028 22.057 22.6395C24.4143 25.9054 27.9472 27.7396 32.3178 27.8416C32.2354 27.4802 32.1919 27.1039 32.1919 26.7174C32.1919 23.9438 34.4338 21.6953 37.1993 21.6953C38.6442 21.6953 39.9462 22.3091 40.8602 23.2909C41.8258 23.0647 43.2789 22.535 43.9893 22.077C43.6312 23.3627 42.5164 24.4352 41.8421 24.8327C41.8366 24.8191 41.8477 24.8462 41.8421 24.8327C42.4345 24.7431 44.0372 24.4351 44.6703 24.0055C44.3572 24.7278 43.1753 25.9287 42.2054 26.601C42.3858 34.5597 36.2966 41.5025 28.1259 41.5025Z"
									fill="#3D3B40"
								/>
							</svg>
						</div>
						<div className="">
							<svg
								width="42"
								height="42"
								viewBox="0 0 65 64"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<rect
									x="5.36117"
									y="5.44875"
									width="54"
									height="54"
									rx="27"
									stroke="#3D3B40"
									strokeWidth="1.54839"
								/>
								<path
									d="M40.8976 25.3834C40.8976 26.3235 40.1356 27.0855 39.1955 27.0855C38.2555 27.0855 37.4934 26.3235 37.4934 25.3834C37.4934 24.4434 38.2555 23.6813 39.1955 23.6813C40.1356 23.6813 40.8976 24.4434 40.8976 25.3834Z"
									fill="#3D3B40"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M32.9545 37.2981C36.088 37.2981 38.6282 34.7579 38.6282 31.6245C38.6282 28.491 36.088 25.9508 32.9545 25.9508C29.821 25.9508 27.2808 28.491 27.2808 31.6245C27.2808 34.7579 29.821 37.2981 32.9545 37.2981ZM32.9545 35.0287C34.8346 35.0287 36.3587 33.5045 36.3587 31.6245C36.3587 29.7444 34.8346 28.2203 32.9545 28.2203C31.0744 28.2203 29.5503 29.7444 29.5503 31.6245C29.5503 33.5045 31.0744 35.0287 32.9545 35.0287Z"
									fill="#3D3B40"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M21.6071 31.1706C21.6071 27.3575 21.6071 25.451 22.3492 23.9946C23.0019 22.7135 24.0435 21.6719 25.3246 21.0192C26.781 20.2771 28.6875 20.2771 32.5006 20.2771H33.4084C37.2214 20.2771 39.128 20.2771 40.5844 21.0192C41.8655 21.6719 42.907 22.7135 43.5598 23.9946C44.3018 25.451 44.3018 27.3575 44.3018 31.1706V32.0784C44.3018 35.8914 44.3018 37.798 43.5598 39.2544C42.907 40.5354 41.8655 41.577 40.5844 42.2297C39.128 42.9718 37.2214 42.9718 33.4084 42.9718H32.5006C28.6875 42.9718 26.781 42.9718 25.3246 42.2297C24.0435 41.577 23.0019 40.5354 22.3492 39.2544C21.6071 37.798 21.6071 35.8914 21.6071 32.0784V31.1706ZM32.5006 22.5466H33.4084C35.3523 22.5466 36.6738 22.5483 37.6953 22.6318C38.6903 22.7131 39.1991 22.8604 39.5541 23.0413C40.4081 23.4765 41.1025 24.1708 41.5376 25.0249C41.7185 25.3798 41.8658 25.8886 41.9471 26.8836C42.0306 27.9051 42.0324 29.2266 42.0324 31.1706V32.0784C42.0324 34.0223 42.0306 35.3438 41.9471 36.3653C41.8658 37.3603 41.7185 37.8691 41.5376 38.224C41.1025 39.0781 40.4081 39.7725 39.5541 40.2076C39.1991 40.3885 38.6903 40.5358 37.6953 40.6136.6738 40.6006 35.3523 40.7023 33.4084 40.7023H32.5006C30.5566 40.7029.2351 40.6006 28.2136 40.6171C27.2187 40.5358 26.7098 40.3885 26.3549 40.2076C25.5008 39.7725 24.8065 39.0781 24.3713 38.224C24.1904 37.8691 24.0431 37.3603 23.9618 36.3653C23.8784 35.3438 23.8766 34.0223 23.8766 32.0784V31.1706C23.8766 29.2266 23.8784 27.9051 23.9618 26.8836C24.0431 25.8886 24.1904 25.3798 24.3713 25.0249C24.8065 24.1708 25.5008 23.4765 26.3549 23.0413C26.7098 22.8604 27.2187 22.7131 28.2136 22.6318C29.2351 22.5483 30.5566 22.5466 32.5006 22.5466Z"
									fill="#3D3B40"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="copyright text-[18px] md:text-[22px]">
					© 2023 Bukizz. All rights reserved.
				</div>
			</div>
		</>
	);
}
