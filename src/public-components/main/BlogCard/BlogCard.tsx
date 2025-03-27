import parse from 'html-react-parser';
import Image from 'next/image'
import './blogCard.css'
import ClockIcon from '../../svg-icons/Clock/ClockIcon';
import Link from 'next/link';
import {useTranslation} from '@/app/i18n/client';

type Props = {
  image: any,
  title: string,
  desc: string,
  date: string | undefined,
  lng: string,
  id: string
}
const BlogCard = ( {image, title, desc, date, lng, id}: Props ) => {
  const {t} = useTranslation( lng, 'blogs' )

  return (
    <article className='h-full mb-12'>
      <div className="rounded-[20px] bg-bgColor flex flex-col shadow-universityCard overflow-hidden h-full justify-items-stretch">
        <div className="w-full h-auto relative">
          <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="!relative object-contain" src={image} alt={''} />
        </div>
        <div className="pt-[45px] pb-[54px] px-5 sm:px-10">
          <h1 className='text-3xl leading-loose line-clamp-1 overflow-hidden'>{title}</h1>
          <div className="my-[13px] flex">
            <ClockIcon className='w-5 h-5 my-auto me-2.5 fill-first' />
            <p className='text-[#335371] text-lg'>{date}</p>
          </div>
          <div className="desc text-lg text-[#335371] leading-9 line-clamp-5 overflow-ellipsis overflow-hidden mt-[17px]">
            {parse( desc )}
          </div>
          <div className="flex mt-10 mb-1.5">
            <Link href={`/${lng}/blogs/${id}`} className={"py-2.5 px-10 text-lg rounded-full bg-first text-white hover:text-text hover:bg-second " + ( lng === 'en' && 'tracking-[.6px]' )}>
              {t( 'read-more' )}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
