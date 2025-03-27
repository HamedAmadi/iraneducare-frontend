import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Link from "next/link";
import { headers } from 'next/headers'

const UniversityRegistration = async ({ params: { lng } }: { params: { lng: string; } }) => {

    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const { t: tPTJO } = await useTranslation(lng, 'part-time-job-opportunities');
    const { t: tS } = await useTranslation(lng, 'services');

    const path = headers().get('x-sub-path') || '/'

    return (
        <>
            <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
                <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
                <div className="container">
                    <div className="pt-40 pb-28 text-center text-text">
                        <h1 className="text-5xl mb-5 font-BYekan">{tPTJO('title')}</h1>
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
                        {/* عنوان صفحه */}
                        <section className="mb-16">
                            <h1 className="text-3xl font-bold text-text mb-6">{tPTJO('sub-title')}</h1>
                            <p className="text-lg text-[#335371]">{tPTJO('introduction')}</p>
                        </section>

                        {/* مزایای کار پاره‌وقت */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tPTJO('benefits.title')}</h2>
                            <ul className="ps-8 list-disc text-lg text-[#335371] space-y-4">
                                <li><strong>{tPTJO('benefits.point1-title')}</strong> - {tPTJO('benefits.point1-desc')}</li>
                                <li><strong>{tPTJO('benefits.point2-title')}</strong> - {tPTJO('benefits.point2-desc')}</li>
                                <li><strong>{tPTJO('benefits.point3-title')}</strong> - {tPTJO('benefits.point3-desc')}</li>
                                <li><strong>{tPTJO('benefits.point4-title')}</strong> - {tPTJO('benefits.point4-desc')}</li>
                            </ul>
                        </section>

                        {/* انواع فرصت‌های شغلی */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tPTJO('jobTypes.title')}</h2>
                            <ul className="ps-8 list-disc text-lg text-[#335371] space-y-4">
                                <li><strong>{tPTJO('jobTypes.type1-title')}:</strong> {tPTJO('jobTypes.type1-desc')}</li>
                                <li><strong>{tPTJO('jobTypes.type2-title')}:</strong> {tPTJO('jobTypes.type2-desc')}</li>
                                <li><strong>{tPTJO('jobTypes.type3-title')}:</strong> {tPTJO('jobTypes.type3-desc')}</li>
                                <li><strong>{tPTJO('jobTypes.type4-title')}:</strong> {tPTJO('jobTypes.type4-desc')}</li>
                                <li><strong>{tPTJO('jobTypes.type5-title')}:</strong> {tPTJO('jobTypes.type5-desc')}</li>
                            </ul>
                        </section>

                        {/* مراحل دریافت شغل */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tPTJO('howToApply.title')}</h2>
                            <ul className="text-lg text-[#335371] space-y-4">
                                <li><strong>{tPTJO('howToApply.step1-title')}:</strong> {tPTJO('howToApply.step1-desc')}</li>
                                <li><strong>{tPTJO('howToApply.step2-title')}:</strong> {tPTJO('howToApply.step2-desc')}</li>
                                <li><strong>{tPTJO('howToApply.step3-title')}:</strong> {tPTJO('howToApply.step3-desc')}</li>
                            </ul>
                        </section>

                        {/* چرا خدمات ما؟ */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tPTJO('whyUs.title')}</h2>
                            <ul className="ps-8 list-disc text-lg text-[#335371] space-y-1">
                                <li><strong>{tPTJO('whyUs.point1-title')}</strong> {tPTJO('whyUs.point1-desc')}</li>
                                <li><strong>{tPTJO('whyUs.point2-title')}</strong> {tPTJO('whyUs.point2-desc')}</li>
                                <li><strong>{tPTJO('whyUs.point3-title')}</strong> {tPTJO('whyUs.point3-desc')}</li>
                                <li><strong>{tPTJO('whyUs.point4-title')}</strong> {tPTJO('whyUs.point4-desc')}</li>
                            </ul>
                        </section>

                        {/* سوالات متداول */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tPTJO('faq.title')}</h2>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tPTJO('faq.q1')}</h3>
                                <p className="text-lg text-[#335371]">{tPTJO('faq.a1')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tPTJO('faq.q2')}</h3>
                                <p className="text-lg text-[#335371]">{tPTJO('faq.a2')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tPTJO('faq.q3')}</h3>
                                <p className="text-lg text-[#335371]">{tPTJO('faq.a3')}</p>
                            </div>
                            <div className="mb-2">
                                <h3 className="font-semibold text-xl text-[#335371] mb-1">{tPTJO('faq.q4')}</h3>
                                <p className="text-lg text-[#335371]">{tPTJO('faq.a4')}</p>
                            </div>
                        </section>

                        {/* بخش تماس */}
                        <section className="mb-16">
                            <h2 className="text-3xl text-text font-bold mb-6">{tPTJO('contact.title')}</h2>
                            <p className="text-lg text-[#335371]">{tPTJO('contact.description')}</p>
                            {/* <div className="relative mt-12">
                                <Link href={`/${lng}/free-consultation`} className="relative px-[30px] py-[20px] lg:text-lg rounded-full bg-first text-white hover:text-text hover:bg-second">
                                    {tPTJO('contact.button')}
                                </Link>
                            </div> */}
                        </section>
                    </div>
                </div>

            </div>
        </>
    );
};

export default UniversityRegistration;
