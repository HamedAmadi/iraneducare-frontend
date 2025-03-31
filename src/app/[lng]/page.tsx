import Image from 'next/image'
import BannerImage1 from '../../../public/images/1815970_540.jpg'
import BannerImage2 from '../../../public/images/IMG-20200428-WA0026.jpg'
import BannerImage3 from '../../../public/images/TehranUniversityEntrancePanorama (1).jpg'
import AboutUsImage from '../../../public/images/istockphoto-1474379083-170667a.webp'
import TehranUniversityImage from '../../../public/images/tehran-university.jpg'
import SharifUniversityImage from '../../../public/images/Sharif-University.jpg'
import IUSTImage from '../../../public/images/IUST.jpg'
import AmirKabirImage from '../../../public/images/amirkabir.jpg'
import ShahidBeheshtiImage from '../../../public/images/sbu.jpg'
import FerdowsiUniversityImage from '../../../public/images/ferdowsi.jpg'
import { useTranslation } from '../i18n'
import { languages, fallbackLng } from '../i18n/settings'
import ServiceCard from '@/public-components/main/ServiceCard/ServiceCard'
import UniversityCard from '@/public-components/main/UniversityCard/UniversityCard'
import HomeBlogs from '@/components/HomeBlogs/HomeBlogs'
import Link from 'next/link'
import { BadgeCheck, BriefcaseBusiness, Car, GraduationCap, HousePlus, Scale } from 'lucide-react'

const Home = async ({ params: { lng } }: { params: { lng: string; } }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'home')

  // edited

  return (
    <>
      <div className='relative'>
        <div className='absolute w-full h-full -z-50 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'></div>
        <div className="absolute w-full h-full -z-40 opacity-30 bg-home-banner"></div>
        <div className="container">
          <section className='pt-40 lg:pt-48 pb-16'>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="text-start">
                <div className='mb-8'>
                  <h1 className={'text-3xl font-MediumIRANSanse md:text-4xl mb-6'}>{t('home-banner.title1')}</h1>
                  <h1 className='text-3xl font-MediumIRANSanse md:text-4xl'>{t('home-banner.title2')}</h1>
                </div>
                <p className='text-xl'>{t('home-banner.text')}</p>
                <div className="relative mt-12">
                  <Link href={`/${lng}/free-consultation`} className="relative px-[30px] py-[20px] lg:text-lg rounded-full bg-first text-white hover:bg-second">
                    {t('free-consultation')}
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute mx-auto my-auto top-0 bottom-0 left-0 right-0 -z-30 w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] bg-second rounded-full"></div>
                <div className="flex justify-around">
                  <div className="relative -mt-8 w-[240px] xl:w-[280px]">
                    <Image className='rounded-2xl !relative object-cover' layout="fill" src={BannerImage1} objectFit="cover" alt='university image' />
                  </div>
                  <div className="relative -mt-12 w-[240px] xl:w-[280px]">
                    <Image className='rounded-2xl !relative object-cover' layout="fill" src={BannerImage2} objectFit="cover" alt='university image' />
                  </div>
                </div>
                <div className="relative mx-auto mt-4 w-[360px] xl:w-[380px]">
                  <Image className='rounded-2xl !relative mx-auto object-cover' layout="fill" src={BannerImage3} objectFit="cover" alt='university image' />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className='xs:container px-4 pt-16 pb-24'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="relative">
            <div className='relative hidden lg:block overflow-hidden'>
              <Image fill sizes='(max-width: 768px) 100vw, 50vw' className="!relative object-cover rounded-2xl" src={AboutUsImage} alt={"statistic-image"} />
            </div>
          </div>
          <div className="">
            <h2 className={'font-bold font-BYekan text-first mb-6 text-xl'}>{t('home-about-us.short-title')}</h2>
            <p className='text-xl mb-5 text-text'>{t('home-about-us.desc1')}</p>
            <p className='text-xl mb-5 text-text'>{t('home-about-us.desc2')}</p>
            <p className='text-xl text-text'>{t('home-about-us.desc3')}</p>
          </div>
        </div>
      </section>
      <section className="xs:container px-4 pt-16 pb-24">
        <h2 className={'font-bold font-BYekan text-center text-first mb-4 ' + (lng === 'en' ? 'text-base' : 'text-xl')}>{t('home-service.short-title')}</h2>
        <h1 className='text-3xl md:text-4xl mb-14 leading-normal text-center'>{t('home-service.long-title')}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <ServiceCard icon={<GraduationCap className='w-16 h-16 mx-auto text-blue-500 ' />} bgColor={'bg-[#FFF3F3]'} hoverColor={'bg-[#FFDADA]'} title={t('home-service.university-registration.title')} path={`/${lng}/services/university-registration`} />
          <ServiceCard icon={<BadgeCheck className='w-16 h-16 mx-auto text-blue-500 ' />} bgColor={'bg-[#E8FBFF]'} hoverColor={'bg-[#C6F1FF]'} title={t('home-service.visa.title')} path={`/${lng}/services/visa`} />
          <ServiceCard icon={<HousePlus className='w-16 h-16 mx-auto text-blue-500 ' />} bgColor={'bg-[#FFF3F3]'} hoverColor={'bg-[#FFDADA]'} title={t('home-service.accommodation.title')} path={`/${lng}/services/accommodation`} />
          <ServiceCard icon={<BriefcaseBusiness className='w-16 h-16 mx-auto text-blue-500 ' />} bgColor={'bg-[#E8FBFF]'} hoverColor={'bg-[#C6F1FF]'} title={t('home-service.part-time-job-opportunities.title')} path={`/${lng}/services/part-time-job-opportunities`} />
          <ServiceCard icon={<Scale className='w-16 h-16 mx-auto text-blue-500 ' />} bgColor={'bg-[#FFF3F3]'} hoverColor={'bg-[#FFDADA]'} title={t('home-service.legal-assistance.title')} path={`/${lng}/services/legal-assistance`} />
          <ServiceCard icon={<Car className='w-16 h-16 mx-auto text-blue-500 ' />} bgColor={'bg-[#E8FBFF]'} hoverColor={'bg-[#C6F1FF]'} title={t('home-service.transportation-assistance.title')} path={`/${lng}/servicestransportation-assistance`} />
        </div>
      </section>
      <section className="xs:container px-4 pt-16 pb-24">
        <h2 className={'font-bold font-BYekan text-center text-first mb-4 ' + (lng === 'en' ? 'text-base' : 'text-xl')}>{t('home-university.short-title')}</h2>
        <h1 className='text-3xl md:text-4xl mb-14 leading-normal text-center'>{t('home-university.long-title')}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <UniversityCard image={TehranUniversityImage} title={t('home-university.university-of-tehran.title')} desc={t('home-university.university-of-tehran.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/university-of-tehran`} />
          <UniversityCard image={SharifUniversityImage} title={t('home-university.sharif-university-of-technology.title')} desc={t('home-university.sharif-university-of-technology.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/sharif-university-of-technology`} />
          <UniversityCard image={IUSTImage} title={t('home-university.iran-university-of-science-and-technology.title')} desc={t('home-university.iran-university-of-science-and-technology.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/iran-university-of-science-and-technology`} />
          <UniversityCard image={AmirKabirImage} title={t('home-university.amirkabir-university-of-technology.title')} desc={t('home-university.amirkabir-university-of-technology.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/amirkabir-university-of-technology`} />
          <UniversityCard image={ShahidBeheshtiImage} title={t('home-university.shahid-beheshti-university.title')} desc={t('home-university.shahid-beheshti-university.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/shahid-beheshti-university`} />
          <UniversityCard image={FerdowsiUniversityImage} title={t('home-university.ferdowsi-university-of-mashhad.title')} desc={t('home-university.ferdowsi-university-of-mashhad.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/ferdowsi-university-of-mashhad`} />
        </div>
      </section>
      {/* <div className="relative w-full h-fit">
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="xs:container px-4">
          <section className='pt-16 pb-20'>
            <h2 className={'font-bold font-BYekan text-center text-first mb-16 ' + (lng === 'en' ? 'text-base' : 'text-xl')}>{t('latest-blog')}</h2>
            <h1 className='text-5xl mb-14 leading-normal text-center'>{t( 'home-service.long-title' )}</h1>
            <HomeBlogs lng={lng} />
          </section>
        </div>
      </div> */}
    </>
  );
}

export default Home