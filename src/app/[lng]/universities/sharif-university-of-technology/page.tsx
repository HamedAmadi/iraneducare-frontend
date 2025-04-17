import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Image from 'next/image'
import HeroBackground from "@/components/HeroBackground/HeroBackground";
import Gallery from "@/components/Gallery/Gallery";
import FactulySharifUniversityImage from '../../../../../public/images/Sharif/factuly.jpg'
import WelfareSharifUniversityImage from '../../../../../public/images/Sharif/welfare.jpg'
import gallery1 from '../../../../../public/images/Sharif/20250225_133625.jpg'
import gallery2 from '../../../../../public/images/Sharif/20250225_133638.jpg'
import gallery3 from '../../../../../public/images/Sharif/20250225_133742.jpg'
import gallery4 from '../../../../../public/images/Sharif/20250225_134125.jpg'
import gallery5 from '../../../../../public/images/Sharif/20250303_132419.jpg'
import gallery6 from '../../../../../public/images/Sharif/20250303_132458.jpg'

const SharifUniversityOfTechnology = async ({ params: { lng } }: { params: { lng: string; } }) => {

    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'universities')

    return (
        <>
            <HeroBackground imageSrc="/images/world-map.webp">
                {/* <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'> */}
                {/* <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div> */}
                <div className="xs:container px-4">
                    <h1 className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(4rem,10vw,7rem)] text-center text-[clamp(1.5rem,4vw,3rem)] text-text font-BYekan">{t('sharif-university-of-technology.title')}</h1>
                </div>
                {/* </div> */}
            </HeroBackground>
            <div className="xs:container py-[clamp(2rem,8vw,6rem)] px-4">
                <div className="relative w-full lg:w-4/5 mx-auto mb-8 md:mb-16">
                    <Image fill sizes="(min-width: 1024px) 80vw, 100vw" priority className='mx-auto rounded-[20px] !relative' src="/images/Sharif/hero.webp" alt={t('sharif-university-of-technology.images-alt.main-gate')} />
                </div>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.university-introduction.title')}</h3>
                    <p className="mb-2 md:text-lg text-[#335371]">{t('sharif-university-of-technology.university-introduction.desc1')}</p>
                    <p className="mb-2 md:text-lg text-[#335371]">{t('sharif-university-of-technology.university-introduction.desc2')}</p>
                    <p className="md:text-lg text-[#335371]">{t('sharif-university-of-technology.university-introduction.desc3')}</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.key-achievements.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">{t('sharif-university-of-technology.key-achievements.li1')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.key-achievements.li2')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.key-achievements.li3')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.key-achievements.li4')}</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.vision-and-mission.title')}</h3>
                    <p className="md:text-lg text-[#335371]">{t('sharif-university-of-technology.vision-and-mission.desc')}</p>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.list-of-faculties.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li1')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li2')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li3')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li4')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li5')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li6')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li7')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li8')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li9')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li10')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li11')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li12')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li13')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li14')}</li>
                        <li className="mb-1">{t('sharif-university-of-technology.list-of-faculties.li15')}</li>
                    </ul>
                </section>
                <div className="relative w-full lg:w-3/4 mx-auto h-auto aspect-[16/9] my-8 md:my-16">
                    <Image
                        src="/images/Sharif/factuly.webp"
                        alt={t('sharif-university-of-technology.images-alt.faculty-building-1')}
                        fill
                        className="rounded-[20px] mx-auto object-cover"
                        sizes="(min-width: 1024px) 80vw, 100vw"
                        priority={false}
                    />
                </div>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.notable-alumni.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.notable-alumni.name1')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.notable-alumni.desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.notable-alumni.name2')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.notable-alumni.desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.notable-alumni.name3')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.notable-alumni.desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.notable-alumni.name4')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.notable-alumni.desc4')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.notable-alumni.name5')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.notable-alumni.desc5')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.welfare-facilities.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.welfare-facilities.li-title1')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.welfare-facilities.li-desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.welfare-facilities.li-title2')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.welfare-facilities.li-desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.welfare-facilities.li-title3')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.welfare-facilities.li-desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.welfare-facilities.li-title4')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.welfare-facilities.li-desc4')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.welfare-facilities.li-title5')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.welfare-facilities.li-desc5')}</span>
                        </li>
                    </ul>
                </section>
                <div className="relative  w-full lg:w-3/4 mx-auto h-auto aspect-[16/9] my-8 md:my-16">
                    <Image
                        src="/images/Sharif/welfare.webp"
                        alt={t('sharif-university-of-technology.images-alt.green-space')}
                        fill
                        className="rounded-[20px] mx-auto object-cover"
                        sizes="(min-width: 1024px) 80vw, 100vw"
                        priority={false}
                    />
                </div>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.useful-info-for-students.title')}</h3>
                    <ul className="ps-8 md:text-lg list-disc text-[#335371]">
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.useful-info-for-students.li-title1')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.useful-info-for-students.li-desc1')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.useful-info-for-students.li-title2')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.useful-info-for-students.li-desc2')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.useful-info-for-students.li-title3')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.useful-info-for-students.li-desc3')}</span>
                        </li>
                        <li className="mb-1">
                            <span className="font-bold">{t('sharif-university-of-technology.useful-info-for-students.li-title4')}</span>
                            :
                            <span className="ms-1">{t('sharif-university-of-technology.useful-info-for-students.li-desc4')}</span>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h3 className="text-xl md:text-2xl text-text font-bold mb-2">{t('sharif-university-of-technology.ranking.title')}</h3>
                    <p className="md:text-lg text-[#335371]">{t('sharif-university-of-technology.ranking.desc')}</p>
                </section>
                <Gallery
                    title={t('photo-gallery')}
                    images={[
                        { src: "/images/Sharif/factuly (2).webp", alt: t('sharif-university-of-technology.images-alt.indoor-view-2') },
                        { src: "/images/Sharif/hava-faza.webp", alt: t('sharif-university-of-technology.images-alt.aerospace-faculty') },
                        { src: "/images/Sharif/nama shishe.webp", alt: t('sharif-university-of-technology.images-alt.building-1') },
                        { src: "/images/Sharif/fazaye sabz.webp", alt: t('sharif-university-of-technology.images-alt.indoor-view-1') },
                        { src: "/images/Sharif/fazayesabz2.webp", alt: t('sharif-university-of-technology.images-alt.green-space') },
                        { src: "/images/Sharif/fazay baz.webp", alt: t('sharif-university-of-technology.images-alt.distant-view-building') },
                        { src: "/images/Sharif/factuly.webp", alt: t('sharif-university-of-technology.images-alt.faculty-building-1') },
                        { src: "/images/Sharif/welfare.webp", alt: t('sharif-university-of-technology.images-alt.green-space') },
                    ]}
                />
            </div>
        </>
    );
};

export default SharifUniversityOfTechnology;
