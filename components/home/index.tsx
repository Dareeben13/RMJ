import Image from "next/image";
// import GlassGirl from "../../assets/glass-girl.png";
import GlassGirl from "../../assets/kody-flying_red.png";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

export const LandingPage = () => {
  return (
    <div>
      <header className="relative mx-10vw">
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
          <div className="col-span-full res-img mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-8 lg:-mt-24 lg:-mr-5vw lg:px-0">
            <Zoom>
              <Image
                // sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1279px) 50vw, (min-width: 1280px) 900px"
                className="h-auto w-full object-contain max-h-75vh"
                src={GlassGirl}
                alt="3D Illustration of a Girl on Glasses Representing Rose's serious face"
              />
            </Zoom>
          </div>
          <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
            <div className="flex flex-auto flex-col">
              <TypeAnimation
                sequence={["I'm also a big extreme sports enthusiast. When I'm not hanging out with my family or at the computer you can find me bing watching rom-coms or playing video games.", 2000]}
                speed={2}
                wrapper="h2"
                repeat={0}
                className="leading-loose head-h2 text-4xl md:text-4xl text-black dark:text-white"
              />
            </div>
            <div className="hidden pt-12 lg:block">
              <Link href="#articles">
                <a className=" inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition text-lg">
                  <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
                    <div className="absolute text-gray-200 dark:text-gray-600">
                      <svg width="60" height="60">
                        <circle stroke="currentColor" strokeWidth="2" fill="transparent" r="28" cx="30" cy="30"></circle>
                        <circle
                          className="text-primary"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="transparent"
                          r="28"
                          cx="30"
                          cy="30"
                          style={{ strokeDasharray: "175.929 175.929", transform: "rotate(-90deg)", transformOrigin: "30px 30px", strokeDashoffset: "175.92918860102841" }}
                        ></circle>
                      </svg>
                    </div>
                    <span style={{ transform: "none" }}>
                      <svg className="transform rotate-0 text-white" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <span className="ml-8 text-xl text-white font-medium">Learn more about RMJ</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="h-40 lg:h-48"></div> */}
    </div>
  );
};
