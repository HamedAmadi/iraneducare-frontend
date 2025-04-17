import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  image: string
  title: string
  desc: string
  buttonText: string
  path: string,
  alt: string
}

const UniversityCard = ({ image, title, desc, buttonText, path, alt }: Props) => {
  return (
    <article className='group'>
      <div className={"flex flex-col h-full p-2.5 rounded-[20px] shadow-universityCard"}>
        <div className="flex flex-col relative w-full rounded-[20px] aspect-[16/9] overflow-hidden">
          {/* <Image className='mx-auto rate object-cover group-hover:scale-105 transition-all duration-500' fill src={image} alt='university-image' /> */}
          <Image
            src={image}
            alt={alt}
            fill
            className="mx-auto rate object-cover group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className='text-xl md:text-2xl line-clamp-2 text-text mb-3 md:mb-4'>{title}</h3>
          <p className='text-base md:text-lg text-[#335371] mb-3 md:mb-4 line-clamp-3 overflow-hidden mt-auto'>{desc}</p>
          <Link className='text-lg text-first font-bold hover:text-second' href={path}>{buttonText}</Link>
        </div>
      </div>
    </article>
  );
};

export default UniversityCard;
