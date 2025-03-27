import Image from 'next/image'
import parse from 'html-react-parser';
import Link from 'next/link';
import './HomeBlogCard.css'
import {useTranslation} from '@/app/i18n/client';


type Props = {
  image: any,
  title: string,
  desc: string,
  date: string | undefined,
  lng: string,
  id: string
}

const HomeBlogCard = ( {image, title, date, desc, lng, id}: Props ) => {

  const {t} = useTranslation( lng, 'blogs' )

  return (
    <Link href={`/${lng}/blogs/${id}`} className='group'>
      <article className="relative p-2.5 rounded-[20px] bg-bgColor border-bgColor flex flex-col">
        <div className="w-full h-[290px]">
          <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="!relative object-cover overflow-hidden rounded-[20px]" src={image} alt={''} />
        </div>
        <h1 className='text-2xl leading-tight line-clamp-2 overflow-hidden mt-6 px-4 group-hover:text-first'>{title}</h1>
        <div className="desc text-lg text-[#335371] leading-7 overflow-ellipsis overflow-hidden px-4 line-clamp-3 mb-6 mt-4">
          {parse( desc )}
        </div>
        <p className='absolute top-[33px] end-[35px] py-[13px] px-[18px] leading-5 bg-first text-white text-xl font-medium rounded-[20px]'>{date}</p>
      </article>
    </Link>
  );
};

export default HomeBlogCard;
