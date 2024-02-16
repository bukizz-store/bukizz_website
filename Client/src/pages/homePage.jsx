import React from 'react'
import HeroSection from '../heroSection/HeroSection.jsx';
import FeatureSection from '../featureSection/FeatureSection.jsx';
import InstallBanner from '../installBanner/InstallBanner.jsx';
import Clients from '../client/Clients.jsx';
import Carousel from '../carousel/Carousel.jsx';
import FinalBanner from '../finalBanner/FinalBanner.jsx';
import Footer from '../footer/Footer.jsx';
import '../App.css'

function Home_page() {
  return (
    <div>
        <div className="md:pt-28 pt-16 lg:pt-0">
			<HeroSection />
		</div> 
		<div className="FeatureSection my-20">
			<FeatureSection />
		</div>
		<div className="InstallBanner my-20">
			<InstallBanner />
		</div>
		<div id="clientsID" className="Clients my-20">
			<Clients />
		</div>
		<div id="testID" className="Carousel my-20">
            <Carousel />
        </div>
		<div className="footerBG md:flex md:flex-col">
			<FinalBanner />
		    <Footer />
		</div>
    </div>
  )
}

export default Home_page
