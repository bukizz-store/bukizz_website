import './Feature.css';
function Feature(props) {
	return (
		<div className="featureMainBox">
			<div>
				<img
					className="featureIcon"
					src={props.logo}></img>
			</div>
			<div className="featureHeadingBox">
				<h2 className="featureHeading">{props.heading}</h2>
				<svg
					width="36"
					height="5"
					viewBox="0 0 48 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3 3H45"
						stroke="url(#paint0_linear_738_33)"
						strokeWidth="6"
						strokeLinecap="round"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_738_33"
							x1="4.3125"
							y1="-0.50012"
							x2="45.0993"
							y2="0.743225"
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
			<div className="featureText">{props.text}</div>
		</div>
	);
}

export default Feature;
