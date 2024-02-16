import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../public/Logo.png';
import { IconCross, IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Drawer } from '@mui/material';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className=" mb-10 w-full gap-16  fixed md:top-12  z-50 ">
			<Drawer
				anchor="right"
				open={open}
				onClose={() => setOpen(false)}>
				<IconX
					className="font-bold h-10 w-20 pt-4 pl-1"
					onClick={() => {
						setOpen(false);
					}}
				/>

				<div className="flex flex-col pt-16 pl-16  w-56 gap-8 font-semibold font-subtext text-2xl text-slate-600">
					<p>Solution</p>
					<Link to="https://bukizz.com/contact">
						<p>Contact</p>
					</Link>
					<p>About</p>
				</div>
			</Drawer>

			<div className="flex justify-between bg-white md:rounded-full h-16 px-4 md:w-[90%] md:mx-auto md:h-20">
				<div className="flex justify-between  items-center gap-12">
					<Link
						className="flex justify-between  items-center gap-4 md:px-4"
						to="/">
						<img
							src={Logo}
							className="w-8 h-8"></img>
						<h2 className="font-semibold text-xl">bukizz</h2>
					</Link>
					<div className="font-footerText hidden justify-between  items-center gap-4  md: visible md:inline-block md:mt-1">
						<ul className="md:flex md:justify-between  md:items-center md:gap-12   md:px-4 md:text-slate-500">
							<li>
								<a href="/solution">Solution</a>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<a href="/about1">About</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex justify-space items-center ">
					<Link
						className="px-4 py-2.5 text-lg m-4 rounded-lg text-white w-48 h-12 bg-gradient-to-r from-blue-600 to-violet-600 hidden md:inline-block font-semibold"
						to="/contact">
						Book Free Demo
					</Link>
					<IconMenu2
						onClick={() => setOpen(true)}
						className="md:hidden"
					/>
				</div>
			</div>
		</div>
	);
}
