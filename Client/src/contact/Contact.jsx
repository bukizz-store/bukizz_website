import Navbar from '../navbar/Navbar';
import logo from '../../public/Logo.png';
// import './contact.css';
import { useState } from 'react';
import axios from 'axios';
import contact_2 from '../../public/aboutUs/contact_2.svg';

const Contact = () => {
	const [data, setData] = useState({
		s_no: '',
		fname: '',
		lname: '',
		email: '',
		schoolName: '',
		msg: '',
	});

	const tempData = {
		s_no: '',
		fname: '',
		lname: '',
		email: '',
		schoolName: '',
		msg: '',
	};

	const handleSubmit = () => {
		data.s_no = Date.now();
		try {
			axios.post('http://localhost:3000/formData', data).then((res) => {
				console.log('Inserted');
			});
		} catch {
			console.log('Error occured');
		}

		setData(tempData);
	};

	const handleChange = (e) => {
		if (e) {
			const { name, value } = e.target;
			setData({ ...data, [name]: value });
		}
	};

	return (
		<div className=" flex h-[100vh]">
			<div className="fixed md:top-[57px] md:w-[95%] w-full md:right-16 z-10">
				<Navbar />
			</div>
			<div className="bg-[#F4F7FF] w-full md:w-[65%] pt-12">
				<div className="pt-12"></div>
				<div className="pt-12 md:pt-24 px-auto md:px-32 ">
					<div className="flex flex-col items-start gap-3 bg-white md:w-[330px] lg:w-[550px]  md:pr-4 pl-6 pr-3 py-6 rounded-xl">
						<div className="flex gap-2 pl-32 md:pl-0 ">
							<div>
								<img
									src={logo}
									className="w-7 h-7"
								/>
							</div>
							<div>Bukizz</div>
						</div>
						<div className="text-[22px] font-semibold font-footerHeading">
							Ready to take your school digital !
						</div>
						<div className="text-slate-500 text-[16px] font-footerText">
							Book a call with your expert to find out best solution for you
						</div>
						<div className="flex flex-col gap-4 items-start">
							<div className="flex flex-col md:w-[250px] lg:flex-row gap-4 w-full">
								<input
									type="text"
									placeholder="First Name*"
									name="fname"
									className="h-10 rounded-lg px-4 border "
									value={data.fname}
									onChange={handleChange}
								/>
								<input
									type="text"
									placeholder="Last Name*"
									className="h-10 rounded-lg px-4 border"
									name="lname"
									value={data.lname}
									onChange={handleChange}
								/>
							</div>
							<div className="flex flex-col  md:w-[250px] lg lg:flex-row gap-4 w-full">
								<input
									type="text"
									placeholder="School Name*"
									className="h-10 rounded-lg px-4 border"
									name="schoolName"
									value={data.schoolName}
									onChange={handleChange}
								/>
								<input
									type="text"
									placeholder="Email* "
									className="h-10 rounded-lg px-4 border"
									name="email"
									value={data.email}
									onChange={handleChange}
								/>
							</div>
							<div className="border w-full md:w-[250px] lg:w-[440px] ">
								<textarea
									className=" w-full"
									rows={4}
									placeholder="Your Message"
									name="msg"
									value={data.msg}
									onChange={handleChange}
								/>
							</div>
							<div className="text-xs text-left text-slate-500  justify-center items-center w-full">
								By clicking “Book Demo Call,” you allow “Bukizz” to contact you
								via email regarding digital transformation solutions for your
								customer journeys. See our Privacy Policy for more info.
							</div>
							<div className="w-full ">
								<button
									className="font-footerHeading text-xl bg-gradient-to-tr from-sky-600 to-violet-600 w-full h-12 rounded-xl text-white"
									onClick={handleSubmit}>
									Book a Free Demo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="rightPart w-0 md:w-[40%] hidden md:inline-block bg-gradient-to-br from-sky-600 to-violet-600">
				<img src={contact_2} />
			</div>
		</div>
	);
};

export default Contact;
