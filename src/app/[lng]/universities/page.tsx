import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import UniversityCard from "@/public-components/main/UniversityCard/UniversityCard";
import TehranUniversityImage from '../../../../public/images/tehran-university.jpg'
import TehranUniversityOfMedicalSciencesImage from '../../../../public/images/tehran-university-of-medical-sciences.jpg'
import SharifUniversityImage from '../../../../public/images/Sharif-University.jpg'
import IUSTImage from '../../../../public/images/IUST.jpg'
import AmirKabirImage from '../../../../public/images/amirkabir.jpg'
import ShahidBeheshtiImage from '../../../../public/images/sbu.jpg'
import FerdowsiUniversityImage from '../../../../public/images/ferdowsi.jpg'
import TabrizUniversityImage from '../../../../public/images/tabriz.jpg'
import KhajeNasirUniversityImage from '../../../../public/images/khajenasir.jpg'
import ShirazUniversityImage from '../../../../public/images/shiraz.jpg'
import IsfahanTechUniversityImage from '../../../../public/images/sanatiIsfehan.png'
import TabrizMedUniversityImage from '../../../../public/images/tabriz-medical.png'
import IsfahanMedUniversityImage from '../../../../public/images/isfahan-medical.jpg'
import SBMUniversityImage from '../../../../public/images/sbmuniversity.jpg'
import ShirazMedUniversityImage from '../../../../public/images/shirazmed.jpg'
import MashhadMedUniversityImage from '../../../../public/images/mashhadmed.jpg'

const Universities = async ({ params: { lng } }: { params: { lng: string; } }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'universities')

  return (
    <>
      <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-5xl font-BYekan">{t('title')}</h1>
        </div>
      </div>
      <div className="container pt-16 pb-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          <UniversityCard image={TehranUniversityImage} title={t('university-of-tehran.title')} desc={t('university-of-tehran.university-introduction.desc1')} buttonText={t('university-of-tehran.button')} path={`/${lng}/universities/university-of-tehran`} />
          <UniversityCard image={SharifUniversityImage} title={t('sharif-university-of-technology.title')} desc={t('sharif-university-of-technology.university-introduction.desc1')} buttonText={t('sharif-university-of-technology.button')} path={`/${lng}/universities/sharif-university-of-technology`} />
          <UniversityCard image={IUSTImage} title={t('iran-university-of-science-and-technology.title')} desc={t('iran-university-of-science-and-technology.university-introduction.desc1')} buttonText={t('iran-university-of-science-and-technology.button')} path={`/${lng}/universities/iran-university-of-science-and-technology`} />
          <UniversityCard image={AmirKabirImage} title={t('amirkabir-university-of-technology.title')} desc={t('amirkabir-university-of-technology.university-introduction.desc1')} buttonText={t('amirkabir-university-of-technology.button')} path={`/${lng}/universities/amirkabir-university-of-technology`} />
          <UniversityCard image={ShahidBeheshtiImage} title={t('shahid-beheshti-university.title')} desc={t('shahid-beheshti-university.university-introduction.desc1')} buttonText={t('shahid-beheshti-university.button')} path={`/${lng}/universities/shahid-beheshti-university`} />
          <UniversityCard image={FerdowsiUniversityImage} title={t('ferdowsi-university-of-mashhad.title')} desc={t('ferdowsi-university-of-mashhad.university-introduction.desc1')} buttonText={t('ferdowsi-university-of-mashhad.button')} path={`/${lng}/universities/ferdowsi-university-of-mashhad`} />
          <UniversityCard image={TabrizUniversityImage} title={t('university-of-tabriz.title')} desc={t('university-of-tabriz.university-introduction.desc1')} buttonText={t('university-of-tabriz.button')} path={`/${lng}/universities/university-of-tabriz`} />
          <UniversityCard image={KhajeNasirUniversityImage} title={t('kn-toosi-university-of-technology.title')} desc={t('kn-toosi-university-of-technology.university-introduction.desc1')} buttonText={t('kn-toosi-university-of-technology.button')} path={`/${lng}/universities/kn-toosi-university-of-technology`} />
          <UniversityCard image={ShirazUniversityImage} title={t('shiraz-university.title')} desc={t('shiraz-university.university-introduction.desc1')} buttonText={t('shiraz-university.button')} path={`/${lng}/universities/shiraz-university`} />
          <UniversityCard image={IsfahanTechUniversityImage} title={t('isfahan-university-of-technology.title')} desc={t('isfahan-university-of-technology.university-introduction.desc1')} buttonText={t('isfahan-university-of-technology.button')} path={`/${lng}/universities/isfahan-university-of-technology`} />
          <UniversityCard image={TabrizMedUniversityImage} title={t('tabriz-university-of-medical-sciences.title')} desc={t('tabriz-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('tabriz-university-of-medical-sciences.button')} path={`/${lng}/universities/tabriz-university-of-medical-sciences`} />
          <UniversityCard image={IsfahanMedUniversityImage} title={t('isfahan-university-of-medical-sciences.title')} desc={t('isfahan-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('isfahan-university-of-medical-sciences.button')} path={`/${lng}/universities/isfahan-university-of-medical-sciences`} />
          <UniversityCard image={SBMUniversityImage} title={t('shahid-beheshti-university-of-medical-sciences.title')} desc={t('shahid-beheshti-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('shahid-beheshti-university-of-medical-sciences.button')} path={`/${lng}/universities/shahid-beheshti-university-of-medical-sciences`} />
          <UniversityCard image={TehranUniversityOfMedicalSciencesImage} title={t('tehran-university-of-medical-sciences.title')} desc={t('tehran-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('tehran-university-of-medical-sciences.button')} path={`/${lng}/universities/tehran-university-of-medical-sciences`} />
          <UniversityCard image={ShirazMedUniversityImage} title={t('shiraz-university-of-medical-sciences.title')} desc={t('shiraz-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('shiraz-university-of-medical-sciences.button')} path={`/${lng}/universities/shiraz-university-of-medical-sciences`} />
          <UniversityCard image={MashhadMedUniversityImage} title={t('mashhad-university-of-medical-sciences.title')} desc={t('mashhad-university-of-medical-sciences.university-introduction.desc1')} buttonText={t('mashhad-university-of-medical-sciences.button')} path={`/${lng}/universities/mashhad-university-of-medical-sciences`} />
        </div>
      </div>
    </>
  );
};

export default Universities;
