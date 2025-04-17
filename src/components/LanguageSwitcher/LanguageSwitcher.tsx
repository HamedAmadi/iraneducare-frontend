'use client'
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { useTranslation } from "@/app/i18n/client";
import ArrowDown from "@/public-components/svg-icons/ArrowDown/ArrowDown";
import Backdrop from "@/public-components/main/Backdrop/Backdrop";

const LanguageSwitcher = ({ lng, secondColor }: { lng: string, secondColor?: boolean }) => {
  const [dropdownIsVisible, setDropDownVisible] = useState<boolean>(false)
  const { i18n } = useTranslation(lng)
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const toggleDropdown = () => {
    setDropDownVisible(!dropdownIsVisible)
  }

  const setToEn = () => {
    router.push(
      currentPathname.replace(`/${currentLocale}`, `/en`)
    );
  }
  const setToAr = () => {
    router.push(
      currentPathname.replace(`/${currentLocale}`, `/ar`)
    );
  }
  const setToFa = () => {
    router.push(
      currentPathname.replace(`/${currentLocale}`, `/fa`)
    );
  }

  return (
    <>
      <div className="">
        {
          lng === 'en' ?
            <button className={"group w-[88px] flex justify-between py-1 px-2 " + (secondColor ? 'text-text' : 'bg-first3 text-third hover:text-third hover:bg-second')} onClick={toggleDropdown}>
              English
              <ArrowDown className={"w-4 h-4 my-auto ms-1 " + (secondColor ? 'fill-text' : 'fill-third group-hover:fill-third')} />
            </button>
            : lng === 'fa' ?
              <button className={"group w-[88px] flex justify-between py-1  px-2 " + (secondColor ? 'text-text' : 'bg-first3 text-third hover:text-third hover:bg-second')} onClick={toggleDropdown}>
                فارسی
                <ArrowDown className={"w-4 h-4 my-auto ml-1 " + (secondColor ? 'fill-text' : 'fill-third group-hover:fill-third')} />
              </button>
              :
              <button className={"group w-[88px] flex justify-between py-1  px-2 " + (secondColor ? 'text-text' : 'bg-first3 text-third hover:text-third hover:bg-second')} onClick={toggleDropdown}>
                العربية
                <ArrowDown className={"w-4 h-4 my-auto ml-1 " + (secondColor ? 'fill-text' : 'fill-third group-hover:fill-third')} />
              </button>
        }
        <div className={"absolute w-[88px] border-t-2 border-first text-text bg-third mt-2 shadow-md z-[101] " + (dropdownIsVisible ? 'block' : 'hidden')}>
          <ul className="list-none">
            {lng !== 'en' &&
              <li className="py-2 px-4 hover:text-third hover:bg-first font-InterFont cursor-pointer" onClick={setToEn}>
                English
              </li>
            }
            {lng !== 'ar' &&
              <li className="py-2 px-4 hover:text-third hover:bg-first font-IRANSanse cursor-pointer" onClick={setToAr}>
                العربية
              </li>
            }
            {lng !== 'fa' &&
              <li className="py-2 px-4 hover:text-third hover:bg-first font-IRANSanse cursor-pointer" onClick={setToFa}>
                فارسی
              </li>
            }
          </ul>
        </div>
      </div>
      {dropdownIsVisible &&
        <Backdrop close={toggleDropdown} />
      }
    </>
  );
};

export default LanguageSwitcher;
