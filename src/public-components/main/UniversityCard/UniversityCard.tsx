import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  image: StaticImageData
  title: string
  desc: string
  buttonText: string
  path: string
}

const UniversityCard = ({ image, title, desc, buttonText, path }: Props) => {
  return (
    <article>
      <div className={"flex flex-col h-full p-5 pb-7 rounded-[20px] shadow-universityCard"}>
        <div className="relative w-full aspect-[16/9] overflow-hidden mb-5">
          <Image className='mx-auto rounded-[20px] rate object-cover' fill src={image} alt='university-image' />
        </div>
        <h1 className='text-2xl line-clamp-2 text-text mb-4'>{title}</h1>
        <p className='text-lg text-[#335371] mb-4 line-clamp-3 overflow-hidden mt-auto'>{desc}</p>
        <Link className='text-lg text-first font-bold' href={path}>{buttonText}</Link>
      </div>
    </article>
  );
};

export default UniversityCard;
