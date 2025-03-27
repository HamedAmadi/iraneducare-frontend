"use client"
import { useTranslation } from "@/app/i18n/client";
import Logo from "@/public-components/main/Logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/public-hooks";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import CloseIcon from "@/public-components/svg-icons/Close/CloseIcon";
import MenuIcon from "@/public-components/svg-icons/Menu/MenuIcon";
import { useEffect, useState } from "react";
import Backdrop from "@/public-components/main/Backdrop/Backdrop";

const Header = ({ lng }: { lng: string; }) => {
  const scrollPosition = useScrollPosition()
  const path = usePathname()
  const { t } = useTranslation(lng, 'public')
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    setIsShow(false)
  }, [path]);

  return (
    <>
      <div className={'duration-1000 transition-all ease-{cubic-bezier(0,.33,.07,1.03)} z-50 fixed w-full ' + (scrollPosition > 20 ? 'bg-white shadow-sm top-0' : 'bg-transparent top-0 md:top-10')}>
        <div className="xs:container px-4">
          <div className="flex justify-between h-16 md:h-auto">
            <div className="w-40 md:w-44 my-auto lg:w-52">
              <Logo />
            </div>
            <nav className="hidden md:flex my-auto py-8 lg:text-lg">
              <div className={"mx-3 xl:mx-6 font-semibold hover:text-first " + (path === `/${lng}` ? "text-first" : "text-[#131A2A] ")}>
                <Link href={`/${lng}`}>{t('home')}</Link>
              </div>
              <div className={"mx-3 xl:mx-6 font-semibold hover:text-first " + (path.includes(`/${lng}/universities`) ? "text-first" : "text-[#131A2A] ")}>
                <Link href={`/${lng}/universities`}>{t('universities')}</Link>
              </div>
              <div className={"mx-3 xl:mx-6 font-semibold hover:text-first " + (path.includes(`/${lng}/services`) ? "text-first" : "text-[#131A2A] ")}>
                <Link href={`/${lng}/services`}>{t('services')}</Link>
              </div>
              {/* <div className={"mx-3 xl:mx-6 font-semibold hover:text-first " + (path === `/${lng}/blog` ? "text-first" : "text-[#131A2A] ")}>
                <Link href={`/${lng}/blogs`}>{t('blog')}</Link>
              </div> */}
              <div className={"mx-3 xl:mx-6 font-semibold hover:text-first hidden lg:block " + (path === `/${lng}/contact-us` ? "text-first" : "text-[#131A2A] ")}>
                <Link href={`/${lng}/contact-us`}>{t('contact-us')}</Link>
              </div>
              <div className={"mx-3 xl:mx-6 font-semibold hover:text-first " + (path === `/${lng}/about-us` ? "text-first" : "text-[#131A2A] ")}>
                <Link href={`/${lng}/about-us`}>{t('about-us')}</Link>
              </div>
            </nav>
            <div className="hidden md:block my-auto">
              <Link href={`/${lng}/free-consultation`} className="py-2 px-3 lg:px-6 lg:py-4 lg:text-lg border-2 border-first rounded-full text-text hover:text-white hover:bg-first">
                {t('free-consultation')}
              </Link>
            </div>
            <div className="flex md:hidden my-auto">
              <LanguageSwitcher secondColor={true} lng={lng} />
              {isShow ?
                <button onClick={() => setIsShow(false)} className="md:hidden" type="button">
                  <CloseIcon className="fill-first w-7 h-7" />
                </button>
                :
                <button onClick={() => setIsShow(true)} className="md:hidden" type="button">
                  <MenuIcon className="fill-first w-7 h-7" />
                </button>
              }
            </div>
          </div>
          <div className={"absolute z-[110] w-full start-0 end-0 overflow-hidden shadow-collapseMenu bg-white transition-all ease-in-out duration-300 " + (isShow ? 'block transition-all ease-in-out duration-300' : 'hidden')}>
            <ul>
              <Link href={`/${lng}`}><li className={"py-2.5 px-5 " + (path === `/${lng}` ? 'bg-first text-white' : 'bg-white text-text')}>{t('home')}</li></Link>
              <Link href={`/${lng}/universities`}><li className={"py-2.5 px-5 " + (path.includes(`/${lng}/universities`) ? 'bg-first text-white' : 'bg-white text-text')}>{t('universities')}</li></Link>
              <Link href={`/${lng}/services`}><li className={"py-2.5 px-5 " + (path.includes(`/${lng}/services`) ? 'bg-first text-white' : 'bg-white text-text')}>{t('services')}</li></Link>
              {/* <Link href={`/${lng}/blogs`}><li className={"py-2.5 px-5 " + ((path.includes(`/${lng}/blogs`) || path.includes(`/${lng}/tag-blogs`)) ? 'bg-first text-white' : 'bg-white text-text')}>{t('blog')}</li></Link> */}
              <Link href={`/${lng}/contact-us`}><li className={"py-2.5 px-5 " + (path === `/${lng}/contact-us` ? 'bg-first text-white' : 'bg-white text-text')}>{t('contact-us')}</li></Link>
              <Link href={`/${lng}/about-us`}><li className={"py-2.5 px-5 " + (path === `/${lng}/about-us` ? 'bg-first text-white' : 'bg-white text-text')}>{t('about-us')}</li></Link>
            </ul>
          </div>
        </div>
      </div>
      {isShow &&
        <Backdrop close={() => setIsShow(false)} />
      }
    </>
  );
};

export default Header;
