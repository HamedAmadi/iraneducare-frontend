import { useTranslation } from "@/app/i18n";
import Logo from "@/public-components/main/Logo/Logo";
import EnvelopeIcon from "@/public-components/svg-icons/Envelope/EnvelopeIcon";
// import LocationIcon from "@/public-components/svg-icons/Location/LocationIcon";
import PhoneIcon from "@/public-components/svg-icons/Phone/PhoneIcon";
import TelegramIcon from "@/public-components/svg-icons/Telegram/TelegramIcon";
import WhatsAppIcon from "@/public-components/svg-icons/WhatsApp/WhatsAppIcon";
import Link from "next/link";
// import Image from 'next/image'
// import NewsLetterIcon from '../../../public/images/chart.png'
// import SubscribeForm from "../SubscribeForm/SubscribeForm";

const Footer = async ({ lng }: { lng: string; }) => {
  const { t } = await useTranslation(lng, 'footer')

  return (
    <footer className="relative pb-16 md:pb-24">
      {/* <div className="sm:container px-4 relative"> */}
      {/* <div className="relative w-full bg-first p-4 sm:p-8 rounded-[20px] -bottom-20">
          <div className="flex flex-wrap w-full justify-center lg:flex-nowrap lg:justify-between">
            <div className="flex mb-5 lg:mb-0">
              <div className="bg-second p-4 rounded-[20px] hidden lg:block">
                <Image src={NewsLetterIcon} alt={"newsletter icon"} />
              </div>
              <h2 className="text-2xl sm:text-4xl text-white my-auto lg:ms-6">{t('newsletter-title')}</h2>
            </div>
            <div className="my-auto">
              <SubscribeForm buttonText={t('newsletter-button')} placeholder={t('newsletter-placeholder')} />
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <div className="absolute w-full h-full sm:h-full -z-50 bg-footer"></div>
      <div className="container pt-16 md:pt-24">
        <div className="grid grid-cols-12 gap-4 xs:gap-8">
          <div className="col-span-12 lg:col-span-5 sm:pe-28">
            <div className="w-52 mb-[30px]">
              <Logo />
            </div>
            <p className="text-text text-lg">{t('about-us')}</p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h1 className="font-BYekan text-2xl font-bold mb-4 md:mb-[30px] text-[#131A2A]">{t('pages-title')}</h1>
            <ul>
              <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href={`/${lng}`}>{t('home')}</Link></li>
              <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href={`/${lng}/universities`}>{t('universities')}</Link></li>
              {/* <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href={`/${lng}/services`}>{t('services')}</Link></li> */}
              <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href={`/${lng}/services`}>{t('footer-services')}</Link></li>
              {/* <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href={`/${lng}/blog`}>{t('blog')}</Link></li> */}
              <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href="/contact-us">{t('contact-us')}</Link></li>
              <li className="text-text text-lg hover:text-second py-1"><Link className="py-1" href={`/${lng}/about-us`}>{t('about-us-title')}</Link></li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h1 className="font-BYekan text-2xl font-bold mb-4 md:mb-[30px] text-[#131A2A]">{t('contact-us')}</h1>
            <ul>
              {/* <li className="text-[#335371] text-lg flex py-1">
                <LocationIcon className="flex-none me-2.5 mt-1.5 w-5 h-5 fill-[#335371]" />
                {t('address')}
              </li> */}
              <li className="text-text text-lg flex py-1"><EnvelopeIcon className="my-auto me-2.5 w-5 h-5 fill-second" />iraneducare.co@gmail.com</li>
              <li className="text-text text-lg flex py-1"><PhoneIcon className="my-auto me-2.5 w-5 h-5 fill-second" /><span dir="ltr">+98903620541</span></li>
              <li className="text-text text-lg flex py-1"><TelegramIcon className="my-auto me-2.5 w-5 h-5 fill-second" /><Link className="hover:text-second" href={'#'}>{t('telegram')}</Link></li>
              <li className="text-text text-lg flex py-1"><WhatsAppIcon className="my-auto me-2.5 w-5 h-5 fill-second" /><Link className="hover:text-second" href={'#'}>{t('whatsapp')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
