import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Link from "next/link";
import { headers } from 'next/headers'

const CivicEducation = async ({ params: { lng } }: { params: { lng: string; } }) => {

    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const { t: tSNE } = await useTranslation(lng, 'social-networking-events');
    const { t: tS } = await useTranslation(lng, 'services');

    const path = headers().get('x-sub-path') || '/'

    return (
        <>
            <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
                <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
                <div className="container">
                    <div className="pt-40 pb-28 text-center text-text">
                        <h1 className="text-5xl mb-5 font-BYekan">{tSNE('title')}</h1>
                    </div>
                </div>
            </div>
            <div className="container py-16">
                <div className="grid grid-cols-12 gap-8">
                    <div className=" col-span-12 lg:col-span-4 hidden lg:block">
                        <h2 className="text-2xl text-text mb-[30px]">{tS('title')}</h2>
                        <ul>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/university-registeration`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('university-registeration') && "bg-slate-50 text-first")}>
                                    {tS('university-registeration.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/visa`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('visa') && "bg-slate-50 text-first")}>
                                    {tS('visa.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/accommodation`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('accommodation') && "bg-slate-50 text-first")}>
                                    {tS('accommodation.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/part-time-job-opportunities`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('part-time-job-opportunities') && "bg-slate-50 text-first")}>
                                    {tS('part-time-job-opportunities.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/legal-assistance`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('legal-assistance') && "bg-slate-50 text-first")}>
                                    {tS('legal-assistance.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/transportation-assistance`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('transportation-assistance') && "bg-slate-50 text-first")}>
                                    {tS('transportation-assistance.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/persian-language-training`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('persian-language-training') && "bg-slate-50 text-first")}>
                                    {tS('persian-language-training.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/civic-education`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('civic-education') && "bg-slate-50 text-first")}>
                                    {tS('civic-education.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/cultural-orientation-programs`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('cultural-orientation-programs') && "bg-slate-50 text-first")}>
                                    {tS('cultural-orientation-programs.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/social-networking-events`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('social-networking-events') && "bg-slate-50 text-first")}>
                                    {tS('social-networking-events.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/health-insurance-guidance`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('health-insurance-guidance') && "bg-slate-50 text-first")}>
                                    {tS('health-insurance-guidance.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/academic-support-services`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('academic-support-services') && "bg-slate-50 text-first")}>
                                    {tS('academic-support-services.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/financial-advice`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('financial-advice') && "bg-slate-50 text-first")}>
                                    {tS('financial-advice.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/emergency-support-services`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('emergency-support-services') && "bg-slate-50 text-first")}>
                                    {tS('emergency-support-services.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/extracurricular-activities`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('extracurricular-activities') && "bg-slate-50 text-first")}>
                                    {tS('extracurricular-activities.title')}
                                </li>
                            </Link>
                            <Link className="text-[#335371] text-lg " href={`/${lng}/services/feedback-and-improvement-mechanisms`}>
                                <li className={"border-b border-[#E1E1E1] p-2 hover:text-first hover:bg-slate-50 " + (path.includes('feedback-and-improvement-mechanisms') && "bg-slate-50 text-first")}>
                                    {tS('feedback-and-improvement-mechanisms.title')}
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <section className="mb-16">
                            <h1 className="text-3xl font-bold text-text mb-6">{tSNE('sub-title')}</h1>
                            <p className="text-lg text-[#335371]">{tSNE('introduction')}</p>
                        </section>

                        {/* چرا شرکت در این برنامه؟ */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tSNE('whyParticipate.title')}</h2>
                            <ul className="ps-8 list-disc text-lg text-[#335371] space-y-1">
                                <li><strong>{tSNE('whyParticipate.point1-title')}</strong> - {tSNE('whyParticipate.point1-desc')}</li>
                                <li><strong>{tSNE('whyParticipate.point2-title')}</strong> - {tSNE('whyParticipate.point2-desc')}</li>
                                <li><strong>{tSNE('whyParticipate.point3-title')}</strong> - {tSNE('whyParticipate.point3-desc')}</li>
                                <li><strong>{tSNE('whyParticipate.point4-title')}</strong> - {tSNE('whyParticipate.point4-desc')}</li>
                            </ul>
                        </section>

                        {/* انواع رویدادها */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tSNE('eventTypes.title')}</h2>
                            <ul className="ps-8 list-disc text-lg text-[#335371] space-y-1">
                                <li><strong>{tSNE('eventTypes.event1-title')}</strong> - {tSNE('eventTypes.event1-desc')}</li>
                                <li><strong>{tSNE('eventTypes.event2-title')}</strong> - {tSNE('eventTypes.event2-desc')}</li>
                                <li><strong>{tSNE('eventTypes.event3-title')}</strong> - {tSNE('eventTypes.event3-desc')}</li>
                                <li><strong>{tSNE('eventTypes.event4-title')}</strong> - {tSNE('eventTypes.event4-desc')}</li>
                                <li><strong>{tSNE('eventTypes.event5-title')}</strong> - {tSNE('eventTypes.event5-desc')}</li>
                            </ul>
                        </section>

                        {/* چگونه شرکت کنیم؟ */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tSNE('howToJoin.title')}</h2>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('howToJoin.step1-title')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('howToJoin.step1-desc')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('howToJoin.step2-title')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('howToJoin.step2-desc')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('howToJoin.step3-title')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('howToJoin.step3-desc')}</p>
                            </div>
                        </section>

                        {/* چرا ما؟ */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tSNE('whyUs.title')}</h2>
                            <ul className="ps-8 list-disc text-lg text-[#335371] space-y-1">
                                <li>{tSNE('whyUs.point1')}</li>
                                <li>{tSNE('whyUs.point2')}</li>
                                <li>{tSNE('whyUs.point3')}</li>
                                <li>{tSNE('whyUs.point4')}</li>
                            </ul>
                        </section>

                        {/* سوالات متداول */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tSNE('faq.title')}</h2>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('faq.q1')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('faq.a1')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('faq.q2')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('faq.a2')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('faq.q3')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('faq.a3')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tSNE('faq.q4')}</h3>
                                <p className="text-lg text-[#335371]">{tSNE('faq.a4')}</p>
                            </div>
                        </section>

                        {/* تماس و ثبت‌نام */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tSNE('contact.title')}</h2>
                            <p className="text-lg text-[#335371]">{tSNE('contact.description')}</p>
                            {/* <div className="relative mt-12">
                                <Link href={`/${lng}/free-consultation`} className="relative px-[30px] py-[20px] lg:text-lg rounded-full bg-first text-white hover:text-text hover:bg-second">
                                    {tSNE('contact.button')}
                                </Link>
                            </div> */}
                        </section>


                    </div>
                </div>

            </div>
        </>
    );
};

export default CivicEducation;
