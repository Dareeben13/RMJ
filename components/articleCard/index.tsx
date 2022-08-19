import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade";

interface ArticleCardProps {
  date: string;
  excerpt: string;
  image: any;
}

export const ArticleCard = (props: ArticleCardProps) => {
  const { date, excerpt, image } = props;

  return (
    <Fade style={{ width: "100%" }} bottom>
      <div className="col-span-4">
        <div className="relative w-full">
          <Link href="/" className="focus:outline-none group peer relative block w-full">
            <a>
              <div className="aspect-h-4 aspect-w-3 yuut rounded-lg">
                <div className="black-overlay"></div>
                <div className="focus-ring w-full rounded-lg object-cover object-center h-full transition backdrop-blur-xl"></div>
                <Image src={image} className="focus-ring w-full rounded-lg object-cover object-center transition transition-opacity" />
              </div>
              <div className="mt-8 text-xl font-medium text-slate-500">{date}</div>
              <div className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">{excerpt}</div>
            </a>
          </Link>
        </div>
      </div>
    </Fade>
  );
};
