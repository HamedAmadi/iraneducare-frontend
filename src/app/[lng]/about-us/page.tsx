import { useTranslation } from '../../i18n'
import Image from 'next/image'
import HeroBackground from '@/components/HeroBackground/HeroBackground';

const AboutUs = async ({ params: { lng } }: { params: { lng: string; } }) => {
  const { t } = await useTranslation(lng, 'about-us')

  return (
    <>
      <HeroBackground imageSrc="/images/world-map.webp">
        {/* <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'> */}
        {/* <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div> */}
        <div className="container">
          <h1 className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(4rem,10vw,7rem)] text-center text-[clamp(1.875rem,4vw,3rem)] text-text font-BYekan">{t('short-title')}</h1>
        </div>
        {/* </div> */}
      </HeroBackground>
      <div className="container pt-[clamp(1rem,8vw,6rem)] pb-24">
        <div className="grid grid-cols-12 lg:gap-10">
          <div className="col-span-12 hidden lg:block lg:col-span-5">
            <Image fill sizes='(max-width: 768px) 100vw, 50vw' className="!relative object-cover rounded-[20px]" src="/images/about-us.webp" alt='about us image' />
          </div>
          <div className="col-span-12 lg:col-span-7">
            {/* <p>sadasd</p> */}
            <p className='md:text-xl mb-5 text-text'>{t('desc1')}</p>
            <p className='md:text-xl mb-5 text-text'>{t('desc2')}</p>
            <p className='md:text-xl mb-5 text-text'>{t('desc3')}</p>
            <p className='md:text-xl mb-3 text-text'>{t('little-section')}</p>
            <ul className='list-disc md:text-xl text-text ps-5'>
              <li className='mb-2'>{t('li1')}</li>
              <li>{t('li2')}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs