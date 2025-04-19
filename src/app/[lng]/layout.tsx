import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { dir } from 'i18next'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import TopHeader from "@/components/TopHeader/TopHeader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Providers from "@/utils/provider";
import { Toaster } from "react-hot-toast";
// import Providers from '@/utils/provider';

// const inter = Inter({ subsets: ["latin"] });
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// export async function generateMetadata({ params: { lng } }: {
//   params: {
//     lng: string;
//   };
// }) {
//   if (languages.indexOf(lng) < 0) lng = fallbackLng
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { t, i18n } = await useTranslation(lng)
//   return {
//     title: 'IranEduCare',
//     description: 'We provide as much as possible information about opportunities and possibilities of Iranian universities for foreigner students.',
//     icons: {
//       icon: '/favicon.ico',
//     },
//   }
// }

export async function generateMetadata({ params: { lng } }: { params: { lng: keyof typeof titleMap } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const baseUrl = 'https://iraneducare.ir';

  const titleMap = {
    en: 'IranEduCare | Study in Iran for International Students',
    fa: 'تحصیل در ایران | خدمات برای دانشجویان بین‌المللی',
    ar: 'الدراسة في إيران | دعم الطلاب الدوليين',
  };

  const descMap = {
    en: 'We help international students study in Iran. Get support for university admission, visa, accommodation, and more.',
    fa: 'ما به دانشجویان بین‌المللی برای تحصیل در ایران کمک می‌کنیم؛ از پذیرش دانشگاه تا ویزا و اسکان.',
    ar: 'نحن نساعد الطلاب الدوليين على الدراسة في إيران. التسجيل، التأشيرات، السكن والمزيد.',
  };

  return {
    title: titleMap[lng],
    description: descMap[lng],
    alternates: {
      canonical: `${baseUrl}/${lng}`,
      languages: {
        en: `${baseUrl}/en`,
        fa: `${baseUrl}/fa`,
        ar: `${baseUrl}/ar`,
        'x-default': `${baseUrl}/en`,
      }
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

const IRANSansWeb = localFont({
  src: '../../../public/fonts/IRANSans/_persian-number/woff2/IRANSansWeb(FaNum).woff2',
  variable: '--iransans',
  display: 'swap',
})

const BYekan = localFont({
  src: '../../../public/fonts/BYekan/BYekan+.ttf',
  variable: '--yekan',
  display: 'swap',
})

const IRANSansWebBold = localFont({
  src: '../../../public/fonts/IRANSans/_persian-number/woff2/IRANSansWeb(FaNum)_Bold.woff2',
  variable: '--iransans-bold',
  display: 'swap',
})

const IRANSansWebLight = localFont({
  src: '../../../public/fonts/IRANSans/_persian-number/woff2/IRANSansWeb(FaNum)_Light.woff2',
  variable: '--iransans-light',
  display: 'swap',
})

const IRANSansWebMedium = localFont({
  src: '../../../public/fonts/IRANSans/_persian-number/woff2/IRANSansWeb(FaNum)_Medium.woff2',
  variable: '--iransans-medium',
  display: 'swap',
})

const IRANSansWebEnNo = localFont({
  src: '../../../public/fonts/IRANSans/woff2/IRANSansWeb.woff2',
  variable: '--iransans-enNo',
  display: 'swap',
})

const InterFont = localFont({
  src: '../../../public/fonts/Inter/InterDisplay-Regular.woff2',
  variable: '--inter-black',
  display: 'swap',
})

const RootLayout = async ({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) => {
  const { t, i18n } = await useTranslation(lng)
  return (
    <html lang={lng} dir={dir(lng)} className={` ${BYekan.variable} ${IRANSansWebMedium.variable} ${IRANSansWebBold.variable} ${IRANSansWebLight.variable} ${IRANSansWeb.variable} ${IRANSansWebEnNo.variable} ${IRANSansWeb.variable} ${InterFont.variable}`}>
      <head />
      <body className={i18n.language === 'en' ? 'font-InterFont' : 'font-IRANSanse'}>
        <Providers>
          <Toaster />
          <TopHeader lng={lng} />
          <Header lng={lng} />
          {children}
          <Footer lng={lng} />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout
