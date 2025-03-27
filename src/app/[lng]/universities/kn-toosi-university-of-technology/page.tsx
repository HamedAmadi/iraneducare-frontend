import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Image from 'next/image'
import KhajeNasirUniversityImage from '../../../../../public/images/khajenasir.jpg'

const KNToosiUniversityOfTechnology = async ({ params: { lng } }: { params: { lng: string; } }) => {

    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'universities')

    return (
        <>
            <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
                <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
                <div className="container">
                    <h1 className="pt-40 pb-28 text-center text-text text-5xl font-BYekan">{t('kn-toosi-university-of-technology.title')}</h1>
                </div>
            </div>
            <div className="container py-16">
                <div className="relative w-full mb-16">
                    <Image fill className='mx-auto rounded-[20px] !relative' src={KhajeNasirUniversityImage} alt='university image' />
                </div>
                <section className="mb-8">
                    <h3 className="text-2xl text-text font-bold mb-2">{t('kn-toosi-university-of-technology.university-introduction.title')}</h3>
                    <p className="mb-2 text-lg text-[#335371]">{t('kn-toosi-university-of-technology.university-introduction.desc1')}</p>
                    <p className="mb-2 text-lg text-[#335371]">{t('kn-toosi-university-of-technology.university-introduction.desc2')}</p>
                    <p className="text-lg text-[#335371]">{t('kn-toosi-university-of-technology.university-introduction.desc3')}</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl text-text font-bold mb-2">{t('kn-toosi-university-of-technology.list-of-faculties.title')}</h3>
                    <ul className="ps-8 text-lg list-disc text-[#335371]">
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li1')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li2')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li3')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li4')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li5')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li6')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li7')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li8')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li9')}</li>
                        <li className="mb-1">{t('kn-toosi-university-of-technology.list-of-faculties.li10')}</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl text-text font-bold mb-2">{t('kn-toosi-university-of-technology.notable-alumni.title')}</h3>
                    <ul className="ps-8 text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.notable-alumni.name1')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.notable-alumni.desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.notable-alumni.name2')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.notable-alumni.desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.notable-alumni.name3')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.notable-alumni.desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.notable-alumni.name4')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.notable-alumni.desc4')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.notable-alumni.name5')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.notable-alumni.desc5')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl text-text font-bold mb-2">{t('kn-toosi-university-of-technology.welfare-facilities.title')}</h3>
                    <ul className="ps-8 text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.welfare-facilities.li-title1')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.welfare-facilities.li-desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.welfare-facilities.li-title2')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.welfare-facilities.li-desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.welfare-facilities.li-title3')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.welfare-facilities.li-desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.welfare-facilities.li-title4')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.welfare-facilities.li-desc4')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.welfare-facilities.li-title5')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.welfare-facilities.li-desc5')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl text-text font-bold mb-2">{t('kn-toosi-university-of-technology.useful-info-for-students.title')}</h3>
                    <ul className="ps-8 text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.useful-info-for-students.li-title1')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.useful-info-for-students.li-desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.useful-info-for-students.li-title2')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.useful-info-for-students.li-desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.useful-info-for-students.li-title3')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.useful-info-for-students.li-desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.useful-info-for-students.li-title4')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.useful-info-for-students.li-desc4')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('kn-toosi-university-of-technology.useful-info-for-students.li-title5')}</span>
                            :
                            <span className="ms-1">{t('kn-toosi-university-of-technology.useful-info-for-students.li-desc5')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-2xl text-text font-bold mb-2">{t('kn-toosi-university-of-technology.ranking.title')}</h3>
                    <p className="text-lg text-[#335371]">{t('kn-toosi-university-of-technology.ranking.desc')}</p>
                </section>
            </div>
        </>
    );
};

export default KNToosiUniversityOfTechnology;
