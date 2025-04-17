import PhoneIcon from '@/public-components/svg-icons/Phone/PhoneIcon';
import PhoneSVG from '../../../../public/svg-icon/phone-svgrepo-com.svg'
import EnvelopeIcon from '@/public-components/svg-icons/Envelope/EnvelopeIcon';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '@/app/i18n';
import Backdrop from '@/public-components/main/Backdrop/Backdrop';

const TopHeader = async ({ lng }: { lng: string; }) => {
  // const {t} = await useTranslation( lng, 'public' )

  return (
    <>
      <div className="hidden md:block bg-first duration-1000 transition-all ease-{cubic-bezier(0,.33,.07,1.03)}">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex pe-4 text-third font-BYekan">
                <EnvelopeIcon className='w-5 h-5 fill-third my-auto' />
                <p className='px-2 py-2'>iraneducare.co@gmail.com</p>
              </div>
              <div className="flex text-third">
                <PhoneIcon className='w-5 h-5 fill-third my-auto' />
                <p className='px-2 py-2' dir='ltr'>+98903620541</p>
                {/* <p className='px-2 py-2'>{t( 'universities' )}</p> */}
              </div>
            </div>
            <div className="flex my-auto">
              <LanguageSwitcher lng={lng} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
