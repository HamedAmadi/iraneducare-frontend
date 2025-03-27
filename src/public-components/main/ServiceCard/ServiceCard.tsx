import { GraduationCap } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  icon: React.ReactElement
  bgColor: string
  title: string
  path: string
  hoverColor: string
}
const ServiceCard = ({ icon, bgColor, title, path, hoverColor }: Props) => {
  return (
    <Link href={path}>
      <article>
        <div className={`p-10 rounded-[20px] text-center ${bgColor} hover:${hoverColor}`}>
          <div className="mb-5">
            {icon}
          </div>
          <h1 className='text-2xl text-text'>{title}</h1>
          <div className="w-14 h-[2px] bg-first mx-auto my-4" />
          {/* <p className='text-lg line-clamp-3 overflow-hidden text-[#335371]'>{desc}</p> */}
        </div>
      </article>
    </Link>
  );
};

export default ServiceCard;
