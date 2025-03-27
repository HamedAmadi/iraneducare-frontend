"use client"
import {useTranslation} from "@/app/i18n/client";

const UserWidget = ( {lng}: {lng: string;} ) => {
  const {t} = useTranslation( lng, 'public' )
  return (
    <>
      <button className="py-2 px-6 font-bold border-2 border-first rounded-full text-text hover:text-white hover:bg-first">
        {t( 'free-consultation' )}
      </button>
    </>
  );
};

export default UserWidget;
