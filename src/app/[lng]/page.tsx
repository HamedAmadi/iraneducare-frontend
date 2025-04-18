import Image from 'next/image'
import { useTranslation } from '../i18n'
import { languages, fallbackLng } from '../i18n/settings'
import ServiceCard from '@/public-components/main/ServiceCard/ServiceCard'
import UniversityCard from '@/public-components/main/UniversityCard/UniversityCard'
// import HomeBlogs from '@/components/HomeBlogs/HomeBlogs'
import Link from 'next/link'
import { BadgeCheck, BriefcaseBusiness, Car, ClipboardCheck, GraduationCap, HousePlus, Scale } from 'lucide-react'
import HeroBackground from '@/components/HeroBackground/HeroBackground'

const Home = async ({ params: { lng } }: { params: { lng: string; } }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'home')
  const { t: tU } = await useTranslation(lng, 'universities')

  return (
    <>
      <div className='relative'>
        <HeroBackground imageSrc="/images/world-map.webp">

          <div className="container">

            <section className='pt-[clamp(8rem,20vw,12rem)] pb-[clamp(2rem,10vw,4rem)]'>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div className="text-start">
                  <div className='mb-8'>
                    <h1 className='text-[clamp(1.625rem,3vw,2.25rem)] font-bold mb-[clamp(1rem,1.5vw,2rem)]'>
                      {t('home-banner.title1')}
                    </h1>
                    <h1 className='text-[clamp(1.625rem,3vw,2.25rem)] font-bold'>
                      {t('home-banner.title2')}
                    </h1>
                  </div>
                  <p className='text-[clamp(1.125rem,2vw,1.25rem)]'>{t('home-banner.text')}</p>
                  <div className="relative mt-12">
                    <Link
                      href={`/${lng}/free-consultation`}
                      className="relative inline-block px-[30px] py-[20px] lg:text-lg rounded-full bg-first text-white hover:bg-second"
                    >
                      {t('free-consultation')}
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:block relative">
                  <div className="absolute mx-auto my-auto -top-20 xl:top-0 bottom-0 left-0 right-0  -z-30 w-[360px] h-[360px] xl:w-[400px] xl:h-[400px] bg-second rounded-full"></div>

                  <div className="flex justify-around">
                    <div className="relative -mt-8 w-[240px] xl:w-[280px] h-[203px] xl:h-[236px]">
                      <Image
                        src="/images/AmirKabir-banner.webp"
                        alt="university image"
                        fill
                        className="rounded-2xl !relative object-cover"
                        sizes="(min-width: 1280px) 280px, 240px"
                        priority
                      />
                    </div>

                    <div className="relative -mt-12 w-[240px] xl:w-[280px] h-[219px] xl:h-[252px]">
                      <Image
                        src="/images/IUST-banner.webp"
                        alt="university image"
                        fill
                        className="rounded-2xl !relative object-cover"
                        sizes="(min-width: 1280px) 280px, 240px"
                        priority
                      />
                    </div>
                  </div>

                  <div className="relative mx-auto mt-4 w-[360px] xl:w-[380px] h-[187px] xl:h-[198]">
                    <Image
                      src="/images/tehran-banner.webp"
                      alt="university image"
                      fill
                      className="rounded-2xl !relative mx-auto object-cover"
                      sizes="(min-width: 1280px) 380px, 360px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </HeroBackground>
      </div>
      <section className='xs:container px-4 pt-[clamp(3rem,10vw,6rem)] pb-12'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="relative">
            <div className='relative hidden lg:block overflow-hidden'>
              <Image fill sizes='(max-width: 768px) 100vw, 50vw' className="!relative object-cover rounded-2xl" src="/images/about-us.webp" alt={"statistic-image"} />
            </div>
          </div>
          <div className="">
            <h2 className={'font-bold font-BYekan text-first mb-4 md:mb-6 ' + (lng === 'en' ? 'text-base md:text-xl' : 'text-lg md:text-2xl')}>{t('home-about-us.short-title')}</h2>
            <p className='text-base md:text-xl mb-4 md:mb-5 text-text'>{t('home-about-us.desc1')}</p>
            <p className='text-base md:text-xl mb-4 md:mb-5 text-text'>{t('home-about-us.desc2')}</p>
            <p className='text-base md:text-xl text-text'>{t('home-about-us.desc3')}</p>
          </div>
        </div>
      </section>
      <section className="xs:container px-4 pt-12 pb-12">
        <h2 className={'font-bold font-BYekan text-center text-first mb-4 ' + (lng === 'en' ? 'text-base md:text-xl' : 'text-lg md:text-2xl')}>{t('home-service.short-title')}</h2>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-8 md:mb-14 leading-normal text-center'>{t('home-service.long-title')}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <ServiceCard icon={<ClipboardCheck className='w-10 md:w-14 h-full m-auto text-first4 ' />} bgColor={'bg-second12'} hoverColor={'hover:bg-second11'} title={t('home-service.university-registration.title')} path={`/${lng}/services/university-registeration`} desc={t('home-service.university-registration.desc')} buttonText={t('home-service.university-registration.button')} />
          <ServiceCard icon={<BadgeCheck className='w-10 h-full m-auto text-first4 ' />} bgColor={'bg-first12'} hoverColor={'hover:bg-first11'} title={t('home-service.visa.title')} path={`/${lng}/services/visa`} desc={t('home-service.visa.desc')} buttonText={t('home-service.university-registration.button')} />
          <ServiceCard icon={<HousePlus className='w-10 h-full m-auto text-first4 ' />} bgColor={'bg-second12'} hoverColor={'hover:bg-second11'} title={t('home-service.accommodation.title')} path={`/${lng}/services/accommodation`} desc={t('home-service.accommodation.desc')} buttonText={t('home-service.university-registration.button')} />
          <ServiceCard icon={<BriefcaseBusiness className='w-10 h-full m-auto text-first4 ' />} bgColor={'bg-first12'} hoverColor={'hover:bg-first11'} title={t('home-service.part-time-job-opportunities.title')} path={`/${lng}/services/part-time-job-opportunities`} desc={t('home-service.part-time-job-opportunities.desc')} buttonText={t('home-service.university-registration.button')} />
          <ServiceCard icon={<Scale className='w-10 h-full m-auto text-first4 ' />} bgColor={'bg-second12'} hoverColor={'hover:bg-second11'} title={t('home-service.legal-assistance.title')} path={`/${lng}/services/legal-assistance`} desc={t('home-service.legal-assistance.desc')} buttonText={t('home-service.university-registration.button')} />
          <ServiceCard icon={<Car className='w-10 h-full m-auto text-first4 ' />} bgColor={'bg-first12'} hoverColor={'hover:bg-first11'} title={t('home-service.transportation-assistance.title')} path={`/${lng}/services/transportation-assistance`} desc={t('home-service.transportation-assistance.desc')} buttonText={t('home-service.university-registration.button')} />
        </div>
      </section>
      <section className="xs:container px-4 pt-12 pb-24">
        <h2 className={'font-bold font-BYekan text-center text-first mb-4 ' + (lng === 'en' ? 'text-base md:text-xl' : 'text-lg md:text-2xl')}>{t('home-university.short-title')}</h2>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl mb-8 md:mb-14 leading-normal text-center'>{t('home-university.long-title')}</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <UniversityCard image="/images/Tehran/hero.webp" alt={tU('university-of-tehran.images-alt.main-gate')} title={t('home-university.university-of-tehran.title')} desc={t('home-university.university-of-tehran.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/university-of-tehran`} />
          <UniversityCard image="/images/Sharif/hero.webp" alt={tU('sharif-university-of-technology.images-alt.main-gate')} title={t('home-university.sharif-university-of-technology.title')} desc={t('home-university.sharif-university-of-technology.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/sharif-university-of-technology`} />
          <UniversityCard image="/images/IUST/hero-m.webp" alt={tU('iran-university-of-science-and-technology.images-alt.main-gate')} title={t('home-university.iran-university-of-science-and-technology.title')} desc={t('home-university.iran-university-of-science-and-technology.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/iran-university-of-science-and-technology`} />
          <UniversityCard image="/images/AmirKabir/amirkabir-m.webp" alt={tU('amirkabir-university-of-technology.images-alt.main-gate')} title={t('home-university.amirkabir-university-of-technology.title')} desc={t('home-university.amirkabir-university-of-technology.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/amirkabir-university-of-technology`} />
          <UniversityCard image="/images/ShahidBeheshti/hero.webp" alt={tU('shahid-beheshti-university.images-alt.main-gate')} title={t('home-university.shahid-beheshti-university.title')} desc={t('home-university.shahid-beheshti-university.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/shahid-beheshti-university`} />
          <UniversityCard image="/images/Ferdowsi/ferdowsi-m.webp" alt={tU('ferdowsi-university-of-mashhad.images-alt.main-gate')} title={t('home-university.ferdowsi-university-of-mashhad.title')} desc={t('home-university.ferdowsi-university-of-mashhad.desc')} buttonText={t('home-university.button')} path={`/${lng}/universities/ferdowsi-university-of-mashhad`} />
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