import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Link from "next/link";
import { headers } from 'next/headers'

const PersianLanguageTraining = async ({ params: { lng } }: { params: { lng: string; } }) => {

    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const { t: tPLT } = await useTranslation(lng, 'persian-language-training');
    const { t: tS } = await useTranslation(lng, 'services');

    const path = headers().get('x-sub-path') || '/'

    return (
        <>
            <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
                <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
                <div className="xs:container px-4">
                    <div className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(3rem,10vw,7rem)] text-center text-text">
                        <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-BYekan">{tPLT('title')}</h1>
                    </div>
                </div>
            </div>
            <div className="xs:container px-4 py-[clamp(2rem,8vw,6rem)]">
                <div className="grid grid-cols-12 md:gap-8">
                    <div className=" col-span-12 lg:col-span-4 hidden lg:block">
                        <h2 className="text-2xl text-text mb-[30px]">{tS('title')}</h2>
                        <ul>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/university-registeration`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('university-registeration') && "bg-slate-50 text-first")}>
                                    {tS('university-registeration.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/visa`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('visa') && "bg-slate-50 text-first")}>
                                    {tS('visa.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/accommodation`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('accommodation') && "bg-slate-50 text-first")}>
                                    {tS('accommodation.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/part-time-job-opportunities`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('part-time-job-opportunities') && "bg-slate-50 text-first")}>
                                    {tS('part-time-job-opportunities.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/legal-assistance`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('legal-assistance') && "bg-slate-50 text-first")}>
                                    {tS('legal-assistance.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/transportation-assistance`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('transportation-assistance') && "bg-slate-50 text-first")}>
                                    {tS('transportation-assistance.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/persian-language-training`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('persian-language-training') && "bg-slate-50 text-first")}>
                                    {tS('persian-language-training.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/civic-education`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('civic-education') && "bg-slate-50 text-first")}>
                                    {tS('civic-education.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/cultural-orientation-programs`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('cultural-orientation-programs') && "bg-slate-50 text-first")}>
                                    {tS('cultural-orientation-programs.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/social-networking-events`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('social-networking-events') && "bg-slate-50 text-first")}>
                                    {tS('social-networking-events.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/health-insurance-guidance`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('health-insurance-guidance') && "bg-slate-50 text-first")}>
                                    {tS('health-insurance-guidance.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/academic-support-services`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('academic-support-services') && "bg-slate-50 text-first")}>
                                    {tS('academic-support-services.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/financial-advice`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('financial-advice') && "bg-slate-50 text-first")}>
                                    {tS('financial-advice.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/emergency-support-services`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('emergency-support-services') && "bg-slate-50 text-first")}>
                                    {tS('emergency-support-services.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/extracurricular-activities`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('extracurricular-activities') && "bg-slate-50 text-first")}>
                                    {tS('extracurricular-activities.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] md:text-lg " href={`/${lng}/services/feedback-and-improvement-mechanisms`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('feedback-and-improvement-mechanisms') && "bg-slate-50 text-first")}>
                                    {tS('feedback-and-improvement-mechanisms.title')}
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        {/* عنوان صفحه */}
                        <section className="mb-8">
                            <h1 className="text-[clamp(1.25rem,4vw,1.875rem)] font-bold text-text mb-6">{tPLT('sub-title')}</h1>
                            <p className="md:text-lg text-[#335371]">{tPLT('introduction')}</p>
                        </section>

                        {/* لماذا تعلم الفارسية؟ */}
                        <section className="mb-8">
                            <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] text-text font-bold mb-6">{tPLT('whyLearn.title')}</h2>
                            <ul className="ps-8 list-disc md:text-lg text-[#335371] space-y-1">
                                <li><strong>{tPLT('whyLearn.point1-title')}</strong> - {tPLT('whyLearn.point1-desc')}</li>
                                <li><strong>{tPLT('whyLearn.point2-title')}</strong> - {tPLT('whyLearn.point2-desc')}</li>
                                <li><strong>{tPLT('whyLearn.point3-title')}</strong> - {tPLT('whyLearn.point3-desc')}</li>
                                <li><strong>{tPLT('whyLearn.point4-title')}</strong> - {tPLT('whyLearn.point4-desc')}</li>
                            </ul>
                        </section>

                        {/* ميزات الدورة */}
                        <section className="mb-8">
                            <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] text-text font-bold mb-6">{tPLT('courseFeatures.title')}</h2>
                            <ul className="ps-8 list-disc md:text-lg text-[#335371] space-y-4">
                                <li><strong>{tPLT('courseFeatures.feature1-title')}</strong> - {tPLT('courseFeatures.feature1-desc')}</li>
                                <li><strong>{tPLT('courseFeatures.feature2-title')}</strong> - {tPLT('courseFeatures.feature2-desc')}</li>
                                <li><strong>{tPLT('courseFeatures.feature3-title')}</strong> - {tPLT('courseFeatures.feature3-desc')}</li>
                                <li><strong>{tPLT('courseFeatures.feature4-title')}</strong> - {tPLT('courseFeatures.feature4-desc')}</li>
                                <li><strong>{tPLT('courseFeatures.feature5-title')}</strong> - {tPLT('courseFeatures.feature5-desc')}</li>
                            </ul>
                        </section>

                        {/* الأسئلة الشائعة */}
                        <section className="mb-8">
                            <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] text-text font-bold mb-6">{tPLT('faq.title')}</h2>
                            <div className="mb-2">
                                <h3 className="font-semibold text-lg md:text-xl text-[#335371] mb-1">{tPLT('faq.q1')}</h3>
                                <p className="md:text-lg text-[#335371]">{tPLT('faq.a1')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-lg md:text-xl text-[#335371] mb-1">{tPLT('faq.q2')}</h3>
                                <p className="md:text-lg text-[#335371]">{tPLT('faq.a2')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-lg md:text-xl text-[#335371] mb-1">{tPLT('faq.q3')}</h3>
                                <p className="md:text-lg text-[#335371]">{tPLT('faq.a3')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-lg md:text-xl text-[#335371] mb-1">{tPLT('faq.q4')}</h3>
                                <p className="md:text-lg text-[#335371]">{tPLT('faq.a4')}</p>
                            </div>
                        </section>

                        {/* حجز الدورة */}
                        <section className="mb-8">
                            <h2 className="text-[clamp(1.25rem,4vw,1.875rem)] text-text font-bold mb-6">{tPLT('contact.title')}</h2>
                            <p className="md:text-lg text-[#335371]">{tPLT('contact.description')}</p>
                            {/* <div className="relative mt-12">
                                <Link href={`/${lng}/free-consultation`} className="relative px-[30px] py-[20px] lg:md:text-lg rounded-full bg-first text-white hover:text-text hover:bg-second">
                                    {tPLT('contact.button')}
                                </Link>
                            </div> */}
                        </section>

                    </div>
                </div>

            </div>
        </>
    );
};

export default PersianLanguageTraining;
