'use client';
// import { useTranslation } from "@/app/i18n";
import { useTranslation } from '@/app/i18n/client';
import { fallbackLng, languages } from "@/app/i18n/settings";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HousePlus, BadgeCheck, BriefcaseBusiness, Car, Scale, Languages, Activity, AlarmCheck, BookOpen, ClipboardCheck, Globe, HeartPulse, MessageCircle, Users, Wallet } from 'lucide-react';
import ServiceCard from '@/public-components/main/ServiceCard/ServiceCard';



const Services = ({ params: { lng } }: { params: { lng: string; } }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'services')

  const services = [
    { title: (t('university-registeration.title')), path: `/${lng}/services/university-registeration`, icon: <ClipboardCheck className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('visa.title')), path: `/${lng}/services/visa`, icon: <BadgeCheck className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('accommodation.title')), path: `/${lng}/services/accommodation`, icon: <HousePlus className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('part-time-job-opportunities.title')), path: `/${lng}/services/part-time-job-opportunities`, icon: <BriefcaseBusiness className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('legal-assistance.title')), path: `/${lng}/services/legal-assistance`, icon: <Scale className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('transportation-assistance.title')), path: `/${lng}/services/transportation-assistance`, icon: <Car className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('persian-language-training.title')), path: `/${lng}/services/persian-language-training`, icon: <Languages className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('civic-education.title')), path: `/${lng}/services/civic-education`, icon: <BookOpen className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('cultural-orientation-programs.title')), path: `/${lng}/services/cultural-orientation-programs`, icon: <Globe className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('social-networking-events.title')), path: `/${lng}/services/social-networking-events`, icon: <Users className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('health-insurance-guidance.title')), path: `/${lng}/services/health-insurance-guidance`, icon: <HeartPulse className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('academic-support-services.title')), path: `/${lng}/services/academic-support-services`, icon: <GraduationCap className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('financial-advice.title')), path: `/${lng}/services/financial-advice`, icon: <Wallet className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('emergency-support-services.title')), path: `/${lng}/services/emergency-support-services`, icon: <AlarmCheck className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('extracurricular-activities.title')), path: `/${lng}/services/extracurricular-activities`, icon: <Activity className='w-16 h-16 mx-auto text-blue-500 ' /> },
    { title: (t('feedback-and-improvement-mechanisms.title')), path: `/${lng}/services/feedback-and-improvement-mechanisms`, icon: <MessageCircle className='w-16 h-16 mx-auto text-blue-500 ' /> },
  ];

  return (
    <>
      <div className='relative w-full'>
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-5xl font-BYekan">{t('title')}</h1>
        </div>
      </div>
      <div className="container pt-16 pb-24 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {services.map((service, index) => (
            <>
              <ServiceCard icon={service.icon} bgColor={index % 2 === 0 ? 'bg-[#FFF3F3]' : 'bg-[#E8FBFF]'} hoverColor={index % 2 === 0 ? 'bg-[#FFDADA]' : 'bg-[#C6F1FF]'} title={service.title} path={service.path} />
              {/* <div key={index} className="border-gray-300">
              <button
                className={`w-full flex justify-between items-center p-6 rounded-t-[20px] text-2xl text-text font-medium ${openIndex === index ? '' : 'rounded-b-[20px]'} ${index % 2 === 0 ? 'bg-[#FFF3F3] hover:bg-[#FFDADA]' : 'bg-[#E8FBFF] hover:bg-[#C6F1FF]'}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{service.title}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 text-xl rounded-b-[20px] bg-[#FBFCFD] text-[#335371]">{service.description}</div>
              </motion.div>
            </div> */}
            </>
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
