import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Image from 'next/image'
import HeroBackground from "@/components/HeroBackground/HeroBackground";

const UniversityOfTabriz = async ({ params: { lng } }: { params: { lng: string; } }) => {

    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'universities')

    return (
        <>
            <HeroBackground imageSrc="/images/world-map.webp">
                {/* <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'> */}
                {/* <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div> */}
                <div className="xs:container px-4">
                    <h1 className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(4rem,10vw,7rem)] text-center text-[clamp(1.5rem,4vw,3rem)] text-text font-BYekan">{t('university-of-tabriz.title')}</h1>
                </div>
                {/* </div> */}
            </HeroBackground>
            <div className="xs:container py-[clamp(2rem,8vw,6rem)] px-4">
                <div className="relative w-full lg:w-4/5 mx-auto mb-8 md:mb-16">
                    <Image fill sizes="(min-width: 1024px) 80vw, 100vw" priority className='mx-auto rounded-[20px] !relative' src="/images/Tabriz/hero.webp" alt={t('university-of-tabriz.images-alt.main-gate')} />
                </div>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('university-of-tabriz.university-introduction.title')}</h3>
                    <p className="mb-2 md:text-lg text-[#335371]">{t('university-of-tabriz.university-introduction.desc1')}</p>
                    <p className="mb-2 md:text-lg text-[#335371]">{t('university-of-tabriz.university-introduction.desc2')}</p>
                    <p className="md:text-lg text-[#335371]">{t('university-of-tabriz.university-introduction.desc3')}</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('university-of-tabriz.list-of-faculties.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li1')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li2')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li3')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li4')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li5')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li6')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li7')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li8')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li9')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li10')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li11')}</li>
                        <li className="mb-1">{t('university-of-tabriz.list-of-faculties.li12')}</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('university-of-tabriz.welfare-facilities.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.welfare-facilities.li-title1')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.welfare-facilities.li-desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.welfare-facilities.li-title2')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.welfare-facilities.li-desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.welfare-facilities.li-title3')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.welfare-facilities.li-desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.welfare-facilities.li-title4')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.welfare-facilities.li-desc4')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.welfare-facilities.li-title5')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.welfare-facilities.li-desc5')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('university-of-tabriz.useful-info-for-students.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.useful-info-for-students.li-title1')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.useful-info-for-students.li-desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.useful-info-for-students.li-title2')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.useful-info-for-students.li-desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.useful-info-for-students.li-title3')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.useful-info-for-students.li-desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('university-of-tabriz.useful-info-for-students.li-title4')}</span>
                            :
                            <span className="ms-1">{t('university-of-tabriz.useful-info-for-students.li-desc4')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('university-of-tabriz.ranking.title')}</h3>
                    <p className="md:text-lg text-[#335371]">{t('university-of-tabriz.ranking.desc')}</p>
                </section>
            </div>
        </>
    );
};

export default UniversityOfTabriz;
