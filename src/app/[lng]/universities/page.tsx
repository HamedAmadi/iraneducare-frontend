import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import UniversityCard from "@/public-components/main/UniversityCard/UniversityCard";
import TehranUniversityOfMedicalSciencesImage from '../../../../public/images/TehranMed/7011medicine copy_4_crop_23_crop_4_crop.jpg'
import TabrizUniversityImage from '../../../../public/images/Tabriz/62394992.jpg'
import KhajeNasirUniversityImage from '../../../../public/images/KNTU/N83144130-72734417.jpg'
import ShirazUniversityImage from '../../../../public/images/Shiraz/Shiraz University (6).jpg'
import IsfahanTechUniversityImage from '../../../../public/images/IUT/11967080_941.png'
import TabrizMedUniversityImage from '../../../../public/images/TabrizMed/1725001825_pic 05 .png'
import IsfahanMedUniversityImage from '../../../../public/images/IMU/dji_0236_0.jpg'
import SBMUniversityImage from '../../../../public/images/ShahidBeheshtiMed/sbmuniversity_crop_1_crop.jpg'
import ShirazMedUniversityImage from '../../../../public/images/ShirazMed/Slider_1.jpg'
import MashhadMedUniversityImage from '../../../../public/images/MashhadMed/mashhad.jpg'
import TehranUniversityImage from '../../../../public/images/Tehran/hero.jpg'
import SharifUniversityImage from '../../../../public/images/Sharif/hero.jpg'
import IUSTImage from '../../../../public/images/IUST/hero.jpg'
import HeroBackground from "@/components/HeroBackground/HeroBackground";
import ShahidBeheshtiImage from '../../../../public/images/ShahidBeheshti/article.jpg'
// import FerdowsiUniversityImage from '../../../../public/images/Ferdowsi/ferdowsi (1).jpg'

const Universities = async ({ params: { lng } }: { params: { lng: string; } }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'universities')

  return (
    <>
      <HeroBackground imageSrc="/images/world-map.webp">
        {/* <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'> */}
        {/* <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div> */}
        <div className="container">
          <h1 className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(4rem,10vw,7rem)] text-center text-[clamp(1.875rem,4vw,3rem)] text-text font-BYekan">{t('title')}</h1>
        </div>
        {/* </div> */}
      </HeroBackground>
      <div className="xs:container py-[clamp(2rem,8vw,6rem)] px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <UniversityCard image="/images/Tehran/hero.webp" alt={t('university-of-tehran.images-alt.main-gate')} title={t('university-of-tehran.title')} desc={t('university-of-tehran.university-introduction.desc1')} buttonText={t('university-of-tehran.button')} path={`/${lng}/universities/university-of-tehran`} />
          <UniversityCard image="/images/Sharif/hero.webp" alt={t('sharif-university-of-technology.images-alt.main-gate')} title={t('sharif-university-of-technology.title')} desc={t('sharif-university-of-technology.university-introduction.desc1')} buttonText={t('sharif-university-of-technology.button')} path={`/${lng}/universities/sharif-university-of-technology`} />
          <UniversityCard image="/images/IUST/hero-m.webp" alt={t('iran-university-of-science-and-technology.images-alt.main-gate')} title={t('iran-university-of-science-and-technology.title')} desc={t('iran-university-of-science-and-technology.university-introduction.desc1')} buttonText={t('iran-university-of-science-and-technology.button')} path={`/${lng}/universities/iran-university-of-science-and-technology`} />
          <UniversityCard image="/images/AmirKabir/amirkabir-m.webp" alt={t('amirkabir-university-of-technology.images-alt.main-gate')} title={t('amirkabir-university-of-technology.title')} desc={t('amirkabir-university-of-technology.university-introduction.desc1')} buttonText={t('amirkabir-university-of-technology.button')} path={`/${lng}/universities/amirkabir-university-of-technology`} />
          <UniversityCard image="/images/ShahidBeheshti/hero.webp" alt={t('shahid-beheshti-university.images-alt.main-gate')} title={t('shahid-beheshti-university.title')} desc={t('shahid-beheshti-university.university-introduction.desc1')} buttonText={t('shahid-beheshti-university.button')} path={`/${lng}/universities/shahid-beheshti-university`} />
          <UniversityCard image="/images/Ferdowsi/ferdowsi-m.webp" alt={t('ferdowsi-university-of-mashhad.images-alt.main-gate')} title={t('ferdowsi-university-of-mashhad.title')} desc={t('ferdowsi-university-of-mashhad.university-introduction.desc1')} buttonText={t('ferdowsi-university-of-mashhad.button')} path={`/${lng}/universities/ferdowsi-university-of-mashhad`} />
          <UniversityCard image="/images/Tabriz/hero.webp" alt={t('university-of-tabriz.images-alt.main-gate')} title={t('university-of-tabriz.title')} desc={t('university-of-tabriz.university-introduction.desc1')} buttonText={t('university-of-tabriz.button')} path={`/${lng}/universities/university-of-tabriz`} />
          <UniversityCard image="/images/KNTU/hero.webp" alt={t('kn-toosi-university-of-technology.images-alt.Mechanical-faculty')} title={t('kn-toosi-university-of-technology.title')} desc={t('kn-toosi-university-of-technology.university-introduction.desc1')} buttonText={t('kn-toosi-university-of-technology.button')} path={`/${lng}/universities/kn-toosi-university-of-technology`} />
          <UniversityCard image="/images/Shiraz/hero.webp" alt={t('shiraz-university.images-alt.overview-campus')} title={t('shiraz-university.title')} desc={t('shiraz-university.university-introduction.desc1')} buttonText={t('shiraz-university.button')} path={`/${lng}/universities/shiraz-university`} />
          <UniversityCard image="/images/IUT/hero.webp" alt={t('isfahan-university-of-technology.images-alt.main-gate')} title={t('isfahan-university-of-technology.title')} desc={t('isfahan-university-of-technology.university-introduction.desc1')} buttonText={t('isfahan-university-of-technology.button')} path={`/${lng}/universities/isfahan-university-of-technology`} />
          <UniversityCard image="/images/TabrizMed/hero.webp" alt={t('tabriz-university-of-medical-sciences.images-alt.main-gate')} title={t('tabriz-university-of-medical-sciences.title')} desc={t('tabriz-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('tabriz-university-of-medical-sciences.button')} path={`/${lng}/universities/tabriz-university-of-medical-sciences`} />
          <UniversityCard image="/images/IMU/hero-l.webp" alt={t('isfahan-university-of-medical-sciences.images-alt.overview-campus')} title={t('isfahan-university-of-medical-sciences.title')} desc={t('isfahan-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('isfahan-university-of-medical-sciences.button')} path={`/${lng}/universities/isfahan-university-of-medical-sciences`} />
          <UniversityCard image="/images/ShahidBeheshtiMed/hero.webp" alt={t('shahid-beheshti-university-of-medical-sciences.images-alt.overview-campus')} title={t('shahid-beheshti-university-of-medical-sciences.title')} desc={t('shahid-beheshti-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('shahid-beheshti-university-of-medical-sciences.button')} path={`/${lng}/universities/shahid-beheshti-university-of-medical-sciences`} />
          <UniversityCard image="/images/TehranMed/hero.webp" alt={t('tehran-university-of-medical-sciences.images-alt.building')} title={t('tehran-university-of-medical-sciences.title')} desc={t('tehran-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('tehran-university-of-medical-sciences.button')} path={`/${lng}/universities/tehran-university-of-medical-sciences`} />
          <UniversityCard image="/images/ShirazMed/hero.webp" alt={t('shiraz-university-of-medical-sciences.images-alt.building')} title={t('shiraz-university-of-medical-sciences.title')} desc={t('shiraz-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('shiraz-university-of-medical-sciences.button')} path={`/${lng}/universities/shiraz-university-of-medical-sciences`} />
          <UniversityCard image="/images/MashhadMed/hero.webp" alt={t('mashhad-university-of-medical-sciences.images-alt.building')} title={t('mashhad-university-of-medical-sciences.title')} desc={t('mashhad-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('mashhad-university-of-medical-sciences.button')} path={`/${lng}/universities/mashhad-university-of-medical-sciences`} />
        </div>
      </div>
    </>
  );
};

export default Universities;
