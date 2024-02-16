import "./FeatureSection.css";
import Feature from "./feature/Feature";
import featureByIndex_mb from "./featureByIndex_mb";
import EmblaCarousel from "./EmblaCarousel";
import featureByIndex from "./featureByIndex";
import { useState } from "react";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function FeatureSection() {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  const featureFunction = isMobile ? featureByIndex_mb : featureByIndex;
  const [currentIndex, setCurrentIndex] = useState(0); // State to hold the current index

  // Function to handle index change
  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="featureSectionMainBox">
        <div className="font-bannertext featureSectionTitle mt-12">
          <p className="text-2xl md:text-4xl">What Bukizz Can</p>
          <p className="text-2xl md:text-4xl">Do For Your School</p>
          <p>{isMobile}</p>
        </div>
        <div className="flex text-mainBlue items-center justify-center mt-12 space-x-9">
          <div className="flex-row h-32   items-center justify-center w-24 ">
            <div
              className="border-2 border-mainBlue bg-white z-2 w-16 h-16 p-2 flex items-center justify-center rounded-xl"
              style={{
                background:
                  currentIndex !== 3
                    ? "#FFFFFF"
                    : "linear-gradient(180deg, #39A7FF 0%, #0074D1 100%)",
              }}
            >
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-18 w-18"
                style={{ fill: currentIndex !== 0 ? "#39A7FFFC" : "white" }}
              >
                <g clipPath="url(#clip0_2990_1740)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.8454 8.53469C46.4027 6.46269 50.8667 9.02536 50.8667 13.1427V21.8334C51.9173 21.8334 52.9576 22.0403 53.9282 22.4423C54.8988 22.8444 55.7807 23.4336 56.5236 24.1765C57.2664 24.9194 57.8557 25.8013 58.2577 26.7719C58.6598 27.7425 58.8667 28.7828 58.8667 29.8334C58.8667 30.8839 58.6598 31.9242 58.2577 32.8948C57.8557 33.8654 57.2664 34.7473 56.5236 35.4902C55.7807 36.2331 54.8988 36.8224 53.9282 37.2244C52.9576 37.6264 51.9173 37.8334 50.8667 37.8334V45.8334C50.8667 50.228 45.8507 52.7374 42.3334 50.1L36.84 45.9774C33.9037 43.7757 30.4847 42.3057 26.8667 41.6894V49.2734C26.867 51.0167 26.2371 52.7013 25.0931 54.0168C23.9491 55.3323 22.3682 56.1898 20.6417 56.4315C18.9152 56.6731 17.1595 56.2825 15.6984 55.3316C14.2372 54.3808 13.169 52.9338 12.6907 51.2574L8.50402 36.6014C6.9974 34.8221 6.01692 32.6579 5.67279 30.352C5.32865 28.0462 5.63451 25.69 6.55598 23.5484C7.47745 21.4068 8.978 19.5647 10.889 18.2291C12.7999 16.8935 15.0455 16.1174 17.3734 15.988L25.4214 15.54C29.359 15.3209 33.1884 14.1703 36.5947 12.1827L42.8454 8.53469ZM15.224 40.708L17.8187 49.7934C17.9436 50.2331 18.2233 50.6129 18.6064 50.8625C18.9894 51.1121 19.4498 51.2146 19.9025 51.1513C20.3553 51.0879 20.7698 50.8628 21.0695 50.5177C21.3693 50.1725 21.534 49.7305 21.5334 49.2734V41.2467L17.3734 41.0147C16.6494 40.9745 15.9303 40.8719 15.224 40.708ZM53.5334 29.8334C53.5334 29.1261 53.2524 28.4478 52.7523 27.9477C52.2522 27.4476 51.5739 27.1667 50.8667 27.1667V32.5C51.5739 32.5 52.2522 32.2191 52.7523 31.719C53.2524 31.2189 53.5334 30.5406 53.5334 29.8334Z"
                    fill={
                      currentIndex === 3
                        ? "white"
                        : "url(#paint0_linear_2990_1740)"
                    }
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2990_1740"
                    x1="32.2011"
                    y1="7.80103"
                    x2="32.2011"
                    y2="56.5012"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#39A7FF" />
                    <stop offset="1" stopColor="#0074D1" />
                  </linearGradient>
                  <clipPath id="clip0_2990_1740">
                    <rect
                      width="64"
                      height="64"
                      fill="white"
                      transform="translate(0.200012 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p
              className="flex items-center"
              style={{
                color: currentIndex !== 3 ? "#39A7FFFC" : "#00589E",
                fontWeight: currentIndex !== 3 ? "400" : "600",
              }}
            >
              Promotion
            </p>
          </div>
          <div className="flex-row h-32  items-center justify-center w-24 ">
            <div
              className="border-2 border-mainBlue bg-white z-2 w-16 h-16 p-2 flex items-center justify-center rounded-xl"
              style={{
                background:
                  currentIndex !== 4
                    ? "#FFFFFF"
                    : "linear-gradient(180deg, #39A7FF 0%, #0074D1 100%)",
              }}
            >
              <svg
                className="h-18 w-18"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: currentIndex !== 0 ? "#39A7FFFC" : "white" }}
              >
                <mask
                  id="mask0_2990_1747"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="3"
                  width="56"
                  height="55"
                >
                  <path
                    d="M23.5338 54.2053C19.4438 52.9842 15.7397 50.7249 12.7819 47.6474C13.7336 46.5187 14.3268 45.1317 14.4857 43.664C14.6446 42.1962 14.362 40.7145 13.6739 39.4083C12.9859 38.102 11.9238 37.0308 10.6235 36.3317C9.32324 35.6325 7.84392 35.3372 6.37486 35.4836C6.04019 33.8443 5.87201 32.1753 5.87288 30.5021C5.87288 27.918 6.26853 25.4254 7.00543 23.0837H7.10929C8.37013 23.0841 9.61026 22.7631 10.7126 22.1511C11.8149 21.5391 12.7431 20.6562 13.4095 19.5858C14.0758 18.5155 14.4584 17.2929 14.521 16.0337C14.5836 14.7744 14.3242 13.5199 13.7674 12.3887C16.6662 9.68941 20.172 7.72723 23.9888 6.66785C24.6099 7.88744 25.5563 8.91143 26.7233 9.62651C27.8903 10.3416 29.2324 10.7199 30.6011 10.7196C31.9697 10.7199 33.3118 10.3416 34.4788 9.62651C35.6458 8.91143 36.5922 7.88744 37.2134 6.66785C41.0301 7.72723 44.5359 9.68941 47.4348 12.3887C46.8739 13.5278 46.6147 14.7919 46.6821 16.0598C46.7495 17.3278 47.1412 18.5572 47.8198 19.6304C48.4983 20.7036 49.441 21.5847 50.5575 22.1893C51.6741 22.794 52.9271 23.1019 54.1967 23.0837C54.9496 25.4844 55.3315 27.9861 55.3293 30.5021C55.3293 32.2084 55.1562 33.875 54.8273 35.4848C53.3582 35.3385 51.8789 35.6338 50.5786 36.3329C49.2783 37.0321 48.2162 38.1033 47.5282 39.4095C46.8402 40.7157 46.5575 42.1975 46.7164 43.6652C46.8754 45.133 47.4686 46.52 48.4202 47.6486C45.4623 50.7257 41.7582 52.9845 37.6684 54.2053C37.1881 52.7084 36.2449 51.4026 34.9748 50.4762C33.7046 49.5498 32.1732 49.0507 30.6011 49.0507C29.029 49.0507 27.4975 49.5498 26.2274 50.4762C24.9572 51.4026 24.014 52.7084 23.5338 54.2053Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="5.59846"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.6007 39.1584C31.7373 39.1584 32.8627 38.9345 33.9128 38.4996C34.9628 38.0646 35.9169 37.4271 36.7206 36.6234C37.5243 35.8197 38.1618 34.8656 38.5968 33.8156C39.0317 32.7655 39.2556 31.6401 39.2556 30.5035C39.2556 29.3669 39.0317 28.2415 38.5968 27.1914C38.1618 26.1414 37.5243 25.1873 36.7206 24.3836C35.9169 23.5799 34.9628 22.9424 33.9128 22.5074C32.8627 22.0725 31.7373 21.8486 30.6007 21.8486C28.3053 21.8486 26.1039 22.7605 24.4808 24.3836C22.8577 26.0067 21.9458 28.2081 21.9458 30.5035C21.9458 32.7989 22.8577 35.0003 24.4808 36.6234C26.1039 38.2465 28.3053 39.1584 30.6007 39.1584Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="5.59846"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_2990_1747)">
                  <path
                    d="M0.926086 0.827637H60.2737V60.1753H0.926086V0.827637Z"
                    fill={
                      currentIndex === 4
                        ? "white"
                        : "url(#paint0_linear_2990_1747)"
                    }
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2990_1747"
                    x1="30.5999"
                    y1="0.827637"
                    x2="30.5999"
                    y2="60.1753"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#39A7FF" />
                    <stop offset="1" stopColor="#0074D1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p
              className="flex items-center"
              style={{
                color: currentIndex !== 4 ? "#39A7FFFC" : "#00589E",
                fontWeight: currentIndex !== 4 ? "400" : "600",
              }}
            >
              Automation
            </p>
          </div>
          <div className="flex-row h-32  items-center justify-center w-24 ">
            <div
              className="border-2 border-mainBlue z-2 w-16 h-16 p-2 flex items-center justify-center rounded-xl"
              style={{
                background:
                  currentIndex !== 0
                    ? "#FFFFFF"
                    : "linear-gradient(180deg, #39A7FF 0%, #0074D1 100%)",
              }}
            >
              <svg
                className="h-18 w-18"
                width="48"
                height="47"
                viewBox="0 0 48 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: currentIndex !== 0 ? "#39A7FFFC" : "white" }}
              >
                <g clipPath="url(#clip0_2990_1757)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.1135 8.73301C46.5224 8.89622 46.8731 9.17823 47.1202 9.54266C47.3674 9.90708 47.4996 10.3372 47.5 10.7775V36.2221C47.4996 36.6625 47.3674 37.0926 47.1202 37.457C46.8731 37.8214 46.5224 38.1034 46.1135 38.2666L24.8166 46.7854C24.2914 46.9954 23.7056 46.9954 23.1804 46.7854L1.88354 38.2666C1.47514 38.103 1.12509 37.8208 0.878505 37.4564C0.631917 37.092 0.50008 36.6621 0.499977 36.2221L0.499977 10.7775C0.50008 10.3375 0.631917 9.90766 0.878505 9.54328C1.12509 9.17889 1.47514 8.89669 1.88354 8.73301L22.3638 0.540327L22.3755 0.53739L23.1804 0.214265C23.7065 0.00344826 24.2935 0.00344826 24.8195 0.214265L25.6244 0.53739L25.6362 0.540327L46.1135 8.73301ZM42.0774 10.2811L24 17.5132L5.9226 10.2811L3.43748 11.2769V12.4519L22.5312 20.0894V43.3603L24 43.9478L25.4687 43.3603V20.0923L44.5625 12.4548V11.2798L42.0774 10.2811Z"
                    fill={
                      currentIndex === 0
                        ? "white"
                        : "url(#paint0_linear_2990_1747)"
                    }
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2990_1757">
                    <rect
                      width="47"
                      height="47"
                      fill="white"
                      transform="translate(0.499977)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p
              className="flex items-center"
              style={{
                color: currentIndex !== 0 ? "#39A7FFFC" : "#00589E",
                fontWeight: currentIndex !== 0 ? "400" : "600",
              }}
            >
              Delivery
            </p>
          </div>
          <div className="flex-row h-32  items-center justify-center w-24 ">
            <div
              className="border-2 border-mainBlue bg-white z-2 w-16 h-16 p-2 flex items-center justify-center rounded-xl"
              style={{
                background:
                  currentIndex !== 1
                    ? "#FFFFFF"
                    : "linear-gradient(180deg, #39A7FF 0%, #0074D1 100%)",
              }}
            >
              <svg
                className="h-18 w-18"
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: currentIndex !== 0 ? "#39A7FFFC" : "white" }}
              >
                <path
                  d="M58.2803 47.3224V28.2475L33.3999 41.7935L2.9906 25.2065L33.3999 8.61963L63.8093 25.2065V47.3224H58.2803ZM33.3999 58.3804L14.0485 47.8753V34.0529L33.3999 44.5579L52.7513 34.0529V47.8753L33.3999 58.3804Z"
                  fill={
                    currentIndex === 1
                      ? "white"
                      : "url(#paint0_linear_2990_1762)"
                  }
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2990_1762"
                    x1="33.3999"
                    y1="8.61963"
                    x2="33.3999"
                    y2="58.3804"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#39A7FF" />
                    <stop offset="1" stopColor="#0074D1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p
              className="flex items-center"
              style={{
                color: currentIndex !== 1 ? "#39A7FFFC" : "#00589E",
                fontWeight: currentIndex !== 1 ? "400" : "600",
              }}
            >
              Admissions
            </p>
          </div>
          <div className="flex-row h-32  items-center justify-center w-24 ">
            <div
              className="border-2 border-mainBlue bg-white z-2 w-16 h-16 p-2 flex items-center justify-center rounded-xl"
              style={{
                background:
                  currentIndex !== 2
                    ? "#FFFFFF"
                    : "linear-gradient(180deg, #39A7FF 0%, #0074D1 100%)",
              }}
            >
              <svg
                className="h-18 w-18"
                width="66"
                height="67"
                viewBox="0 0 66 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: currentIndex !== 0 ? "#39A7FFFC" : "white" }}
              >
                <mask
                  id="mask0_2990_1767"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="6"
                  width="61"
                  height="54"
                >
                  <path
                    d="M45.0529 52.562H30.0774V41.6707H49.1372V30.7794H60.0284V52.562H53.2214L49.1372 56.6462L45.0529 52.562Z"
                    stroke="white"
                    strokeWidth="5.75059"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.57205 8.99609H49.1372V41.6699H23.2704L17.8247 47.1156L12.3791 41.6699H5.57205V8.99609Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="5.75059"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.993 25.333H27.3544M35.5229 25.333H36.8843M16.4631 25.333H17.8245"
                    stroke="black"
                    strokeWidth="5.75059"
                    strokeLinecap="round"
                  />
                </mask>
                <g mask="url(#mask0_2990_1767)">
                  <path
                    d="M0.12619 0.82666H65.4738V66.1743H0.12619V0.82666Z"
                    fill={
                      currentIndex === 2
                        ? "white"
                        : "url(#paint0_linear_2990_1767)"
                    }
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2990_1767"
                    x1="32.8"
                    y1="0.82666"
                    x2="32.8"
                    y2="66.1743"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#39A7FF" />
                    <stop offset="1" stopColor="#0074D1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p
              className="flex items-center"
              style={{
                color: currentIndex !== 2 ? "#39A7FFFC" : "#00589E",
                fontWeight: currentIndex !== 2 ? "400" : "600",
              }}
            >
              Engagement
            </p>
          </div>
        </div>
        <div className="md:inline-block w-full">
          {/* <div className=" featuresGrid ">
						{featuresArray.map((feature, index) => {
							return (
								<Feature
									key={index}
									logo={feature.logo}
									heading={feature.heading}
									text={feature.text}
								/>
							);
						})}
					</div> */}

          <main className="sandbox md:inline h-[900px] flex item-center justify-center">
            <section className="sandbox__carousel">
              <EmblaCarousel
                slides={SLIDES}
                options={OPTIONS}
                arr={featureFunction}
                onIndexChange={handleIndexChange}
              />
            </section>
          </main>
        </div>
        {/*<div className="flex flex-col gap-12 pt-12 pb-12 z-10 md:hidden">
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
        </div>*/}
      </div>
    </>
  );
}

export default FeatureSection;
