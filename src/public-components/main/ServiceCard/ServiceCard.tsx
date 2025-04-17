import "./ServiceCard.css";
import { Fullscreen, GraduationCap } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  icon: React.ReactElement
  bgColor: string
  title: string
  path: string
  hoverColor: string
  desc: string
  buttonText: string
}
const ServiceCard = ({ icon, bgColor, title, path, hoverColor, desc, buttonText }: Props) => {
  return (
    <article className="group">
      <div className={`flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-[20px] text-center ${bgColor} ${hoverColor} relative top-0 transition-all duration-500 ease-out hover:-top-1 hover:[box-shadow:0px_0px_60px_0px_rgba(0,0,0,0.08)]`}>
        <div className="mb-2 md:mb-4 border-2 border-[#131a2a1a] rounded-full w-[80px] h-[80px] md:w-[106px] md:h-[106px] mx-auto relative">
          <div className="h-full align-middle icon-effect">
            <div className="h-full align-middle group-hover:[transform:rotateY(360deg)] transition-all ease-out duration-500">
              {icon}
            </div>
          </div>
        </div>
        <h1 className='text-[22px] md:text-2xl text-text'>{title}</h1>
        <div className="mt-auto">

          <div className="w-14 h-[2px] bg-first mx-auto my-2 md:my-4" />
        </div>
        <p className='text-base/7 md:text-lg/7 line-clamp-3 overflow-hidden text-text mb-5 md:mb-10'>{desc}</p>
        <div>
          <Link href={path} className="inline-block border border-first px-6 py-3 md:px-7 md:py-4 text-base font-bold rounded-[50px] text-first group-hover:text-third group-hover:bg-first group-hover:border-first transition-all duration-500">
            {buttonText}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
