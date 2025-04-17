// 'use client';
import { useTranslation } from "@/app/i18n";
// import { useTranslation } from '@/app/i18n/client';
import { fallbackLng, languages } from "@/app/i18n/settings";
// import { useState } from 'react';
// import { motion } from 'framer-motion';
import { GraduationCap, HousePlus, BadgeCheck, BriefcaseBusiness, Car, Scale, Languages, Activity, AlarmCheck, BookOpen, ClipboardCheck, Globe, HeartPulse, MessageCircle, Users, Wallet } from 'lucide-react';
import ServiceCard from '@/public-components/main/ServiceCard/ServiceCard';



const Services = async ({ params: { lng } }: { params: { lng: string; } }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'services')

  const services = [
    { title: (t('university-registeration.title')), desc: (t('university-registeration.desc')), buttonText: (t('university-registeration.button')), path: `/${lng}/services/university-registeration`, icon: <ClipboardCheck className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('visa.title')), desc: (t('visa.desc')), buttonText: (t('visa.button')), path: `/${lng}/services/visa`, icon: <BadgeCheck className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('accommodation.title')), desc: (t('accommodation.desc')), buttonText: (t('accommodation.button')), path: `/${lng}/services/accommodation`, icon: <HousePlus className='w-10 md:w-14 h-full m-auto text-first4  ' /> },
    { title: (t('part-time-job-opportunities.title')), desc: (t('part-time-job-opportunities.desc')), buttonText: (t('part-time-job-opportunities.button')), path: `/${lng}/services/part-time-job-opportunities`, icon: <BriefcaseBusiness className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('legal-assistance.title')), desc: (t('legal-assistance.desc')), buttonText: (t('legal-assistance.button')), path: `/${lng}/services/legal-assistance`, icon: <Scale className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('transportation-assistance.title')), desc: (t('transportation-assistance.desc')), buttonText: (t('transportation-assistance.button')), path: `/${lng}/services/transportation-assistance`, icon: <Car className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('persian-language-training.title')), desc: (t('persian-language-training.desc')), buttonText: (t('persian-language-training.button')), path: `/${lng}/services/persian-language-training`, icon: <Languages className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('civic-education.title')), desc: (t('civic-education.desc')), buttonText: (t('civic-education.button')), path: `/${lng}/services/civic-education`, icon: <BookOpen className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('cultural-orientation-programs.title')), desc: (t('cultural-orientation-programs.desc')), buttonText: (t('cultural-orientation-programs.button')), path: `/${lng}/services/cultural-orientation-programs`, icon: <Globe className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('social-networking-events.title')), desc: (t('social-networking-events.desc')), buttonText: (t('social-networking-events.button')), path: `/${lng}/services/social-networking-events`, icon: <Users className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('health-insurance-guidance.title')), desc: (t('health-insurance-guidance.desc')), buttonText: (t('health-insurance-guidance.button')), path: `/${lng}/services/health-insurance-guidance`, icon: <HeartPulse className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('academic-support-services.title')), desc: (t('academic-support-services.desc')), buttonText: (t('academic-support-services.button')), path: `/${lng}/services/academic-support-services`, icon: <GraduationCap className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('financial-advice.title')), desc: (t('financial-advice.desc')), buttonText: (t('financial-advice.button')), path: `/${lng}/services/financial-advice`, icon: <Wallet className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('emergency-support-services.title')), desc: (t('emergency-support-services.desc')), buttonText: (t('emergency-support-services.button')), path: `/${lng}/services/emergency-support-services`, icon: <AlarmCheck className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('extracurricular-activities.title')), desc: (t('extracurricular-activities.desc')), buttonText: (t('extracurricular-activities.button')), path: `/${lng}/services/extracurricular-activities`, icon: <Activity className='w-10 md:w-14 h-full m-auto text-first4' /> },
    { title: (t('feedback-and-improvement-mechanisms.title')), desc: (t('feedback-and-improvement-mechanisms.desc')), buttonText: (t('feedback-and-improvement-mechanisms.button')), path: `/${lng}/services/feedback-and-improvement-mechanisms`, icon: <MessageCircle className='w-10 md:w-14 h-full m-auto text-first4' /> },
  ];

  return (
    <>
      {/* <div className='relative w-full'>
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-5xl font-BYekan">{t('title')}</h1>
        </div>
      </div> */}
      <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(4rem,10vw,7rem)] text-center text-[clamp(1.875rem,4vw,3rem)] text-text font-BYekan">{t('title')}</h1>
        </div>
      </div>
      <div className="xs:container py-[clamp(2rem,8vw,6rem)] px-4">
        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7"> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {services.map((service, index) => (
            <ServiceCard icon={service.icon} bgColor={index % 2 === 0 ? 'bg-second12' : 'bg-first12'} hoverColor={index % 2 === 0 ? 'hover:bg-second11' : 'hover:bg-first11'} title={service.title} path={service.path} desc={service.desc} buttonText={service.buttonText} />
          ))}
        </div>
      </div>
    </>

  );
}

export default Services;

// import {useTranslation} from "@/app/i18n";
// import {fallbackLng, languages} from "@/app/i18n/settings";
// import ServiceCard from "@/public-components/main/ServiceCard/ServiceCard";
// import Icon1 from "../../../../public/images/frame.png"
// const Services = async ( {params: {lng}}: {params: {lng: string;}} ) => {

//   if ( languages.indexOf( lng ) < 0 ) lng = fallbackLng
//   const {t} = await useTranslation( lng, 'services' )

//   return (
//     <>
//       <div className='relative w-full'>
//         <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
//         <div className="container">
//           <h1 className="pt-40 pb-28 text-center text-5xl font-BYekan">{t( 'title' )}</h1>
//         </div>
//       </div>
//       <div className="container pt-16 pb-24">
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
//           <ServiceCard icon={Icon1} bgColor={'bg-[#FFF3F3]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#E8FBFF]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#FFF3F3]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#E8FBFF]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#FFF3F3]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#E8FBFF]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#FFF3F3]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#E8FBFF]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//           <ServiceCard icon={Icon1} bgColor={'bg-[#FFF3F3]'} title={t( 'title1' )} desc={t( 'desc1' )} path={`/${lng}/services/service-number-one`} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;
