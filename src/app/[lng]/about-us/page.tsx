import { useTranslation } from '../../i18n'
import Image from 'next/image'
import AboutUsImage from '../../../../public/images/istockphoto-1474379083-170667a.webp'

const AboutUs = async ({ params: { lng } }: { params: { lng: string; } }) => {
  const { t } = await useTranslation(lng, 'about-us')

  return (
    <>
      <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-4xl md:text-5xl font-BYekan">{t('short-title')}</h1>
        </div>
      </div>
      <div className="container pt-16 pb-24">
        <div className="grid grid-cols-12 lg:gap-10">
          <div className="col-span-12 hidden lg:block lg:col-span-5">
            <Image fill sizes='(max-width: 768px) 100vw, 50vw' className="!relative object-cover rounded-[20px]" src={AboutUsImage} alt='about us image' />
          </div>
          <div className="col-span-12 lg:col-span-7">
            {/* <p>sadasd</p> */}
            <p className='text-xl mb-5 text-text'>{t('desc1')}</p>
            <p className='text-xl mb-5 text-text'>{t('desc2')}</p>
            <p className='text-xl mb-5 text-text'>{t('desc3')}</p>
            <p className='text-xl mb-3 text-text'>{t('little-section')}</p>
            <ul className='list-disc text-xl text-text ps-5'>
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