import Link from "next/link";
import { ArticleCard } from "../articleCard";
import SplashCar from "../../assets/splash-car.jpg";
import SplashRoad from "../../assets/splash-road.jpg";
import SplashCups from "../../assets/splash-cups.jpg";

export const BlogExcerpt = () => {
  const articles = [
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashCar,
      id: "1",
    },
    {
      date: "October 15, 2022",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashRoad,
      id: "12",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashCups,
      id: "11",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashCar,
      id: "15",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashRoad,
      id: "21",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashCups,
      id: "189",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashCar,
      id: "145",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashRoad,
      id: "241",
    },
    {
      date: "May 12, 2021",
      excerpt: "How to create a Next.js app with TypeScript",
      image: SplashCups,
      id: "199",
    },
  ];

  return (
    <section id="articles">
      <div className="relative mx-10vw">
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl">
          <div className="col-span-full flex flex-col space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
            <div className="space-y-2 lg:space-y-0">
              <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">Article recommendations</h2>
              <p className="leading-tight text-3xl md:text-4xl text-gray-400 dark:text-slate-500">Prepared especially for you.</p>
            </div>
            <Link href="/">
              <a className="text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition">
                <span className="mr-8 text-xl font-medium">See the full articles</span>
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
                        style={{ strokeDasharray: "175.929, 175.929", transform: "rotate(-90deg)", transformOrigin: "30px 30px", strokeDashoffset: "175.92918860102841" }}
                      ></circle>
                    </svg>
                  </div>
                  <span style={{ transform: "none" }}>
                    <svg className="transform -rotate-90" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-10 lg:h-12"></div>
      <div className="relative mx-10vw">
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16">
          {articles.map(({ id, ...rest }) => (
            <ArticleCard {...rest} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
