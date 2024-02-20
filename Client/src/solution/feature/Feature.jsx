import './Feature_sol.css';
function Feature(props) {
	return (
		<>
			<div className="w-[320px] md:w-[600px]  bg-white py-4 pl-4 md:pr-20 border-0 border-b-8 border-sky-400 rounded-xl mx-auto md:mx-12">
				<div className="flex flex-col md:flex-row md:gap-3 items-start ">
					<div>
						<img
							className="featureIcon "
							src={props.logo}></img>
					</div>
					<div>
						<h2 className="font-semibold text-[23px] md:text-3xl text-[#3D3B40] ">
							{props.heading}
						</h2>
					</div>
				</div>
				<div className="text-[#3d3b4099] text-left md:text-[23px] py-3  ">
					{props.text}{' '}
				</div>
			</div>
		</>
	);
}

export default Feature;
