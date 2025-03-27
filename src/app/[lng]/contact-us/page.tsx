"use client"
import './contact-us.css'
import Link from 'next/link'
import Input from '@/public-components/main/Input/input'
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonSpinner from '@/public-components/main/ButtonSpinner/ButtonSpinner';
import LocationIcon from '@/public-components/svg-icons/Location/LocationIcon';
import EnvelpeIcon from '@/public-components/svg-icons/Envelope/EnvelopeIcon';
import toast from 'react-hot-toast';
import { useTranslation } from '@/app/i18n/client';
import TelegramIcon from '@/public-components/svg-icons/Telegram/TelegramIcon';
import WhatsAppIcon from '@/public-components/svg-icons/WhatsApp/WhatsAppIcon';
import { useAddContactUs } from '@/hooks/contactus-hooks';

export type ContactUsForm = {
  fullName: string
  email: string
  mobileNumber: string
  subject: string
  text: string
}
const ContactUs = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'contact-us')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactUsForm>({ mode: "onSubmit" });
  const { mutate: addContactUs, isLoading } = useAddContactUs()

  const onSubmit: SubmitHandler<ContactUsForm> = (data) => {
    console.log(data)
    addContactUs(data, {
      onSuccess: (res) => {
        console.log(res)
        toast.success(t('success-message'), { duration: 3000 })
        reset()
      },
      onError: (err: any) => {
        console.log(err)
        if (err.response) {
          toast.error(t('error-message'))
        }
        else {
          toast.error(t('error-message'))
        }
      }
    })
  };

  return (
    <>
      <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
        <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-4xl md:text-5xl font-BYekan">{t('title')}</h1>
        </div>
      </div>
      <div className="py-20 container">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="p-10 rounded-[20px] bg-[#F9F4F1]">
              <h2 className='text-4xl md:text-5xl text-text mb-7'>{t('form-title')}</h2>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input {...register('fullName',
                  {
                    required: t('fullName-required-message'),
                    pattern: {
                      value: /^(?!\s*$).+/,
                      message: t('fullName-required-message')
                    }
                  })} type={"text"} name={"fullName"} errors={errors} placeholder={t('fullName-ph')} />
                <Input {...register('email', {
                  required: t('email-required-message'),
                  pattern: {
                    value: /^\S+@\S+\.\S{2,4}$/,
                    message: t('email-pattern-message')
                  }
                })} type={"email"} name={"email"} errors={errors} placeholder={t('email-ph')} />
                <Input dir={lng === 'en' ? 'ltr' : 'rtl'} {...register('mobileNumber', {
                  // required: "Enter your mobile number",
                  pattern: {
                    value: /^(?:00|\\+)[0-9\\s.\\/-]{6,20}$/,
                    message: t('mobileNumber-pattern-message')
                  }
                })} type={"mobileNumber"} name={"mobileNumber"} errors={errors} placeholder={t('mobileNumber-ph')} />
                <Input {...register('subject',
                  {
                    required: t('subject-required-message'),
                    pattern: {
                      value: /^(?!\s*$).+/,
                      message: t('subject-required-message')
                    }
                  })} type={"text"} name={"subject"} errors={errors} placeholder={t('subject-ph')} />
                <Input {...register('text', {
                  required: t('text-required-message'),
                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: t('text-required-message')
                  }
                }
                )} type={"textarea"} name={"text"} errors={errors} placeholder={t('text-ph')} />
                <button className='flex justify-center py-2.5 px-10 text-lg text-white bg-first hover:bg-second hover:text-text font-bold rounded-[50px]' disabled={isLoading} type="submit">
                  {isLoading && <ButtonSpinner />}
                  {t('button-text')}
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-12 mt-10 md:mt-0 lg:col-span-4">
            <h2 className='text-4xl md:text-5xl text-text mb-7'>{t('title2')}</h2>
            <p className='text-lg text-text mb-6'>{t('second-desc')}</p>
            <ul>
              {/* <li className='flex mb-[30px]'>
                <div className="bg-[#F9F4F1] rounded-full flex w-[60px] h-[60px]">
                  <LocationIcon className="flex-1 m-auto w-7 h-7 fill-first" />
                </div>
                <div className="flex flex-col ms-4 justify-between">
                  <h3 className='text-xl text-text'>{t('location')}</h3>
                  <p className='text-lg text-text my-auto'>{t('address')}</p>
                </div>
              </li> */}
              <li className='flex mb-[30px]'>
                <div className="bg-[#F9F4F1] rounded-full flex w-[60px] h-[60px]">
                  <TelegramIcon className="flex-none m-auto w-7 h-7 fill-first" />
                </div>
                <div className="flex flex-col ms-4 justify-between">
                  <Link className='text-xl text-first my-auto' href={'#'}>{t('telegram')}</Link>
                  <p className='text-lg text-text'><span dir='ltr'>+98903620541</span></p>
                </div>
              </li>
              <li className='flex mb-[30px]'>
                <div className="bg-[#F9F4F1] rounded-full flex w-[60px] h-[60px]">
                  <WhatsAppIcon className="flex-none m-auto align-middle w-7 h-7 fill-first" />
                </div>
                <div className="flex flex-col ms-4 justify-between">
                  <Link className='text-xl text-first' href={'#'}>{t('whatsapp')}</Link>
                  <p className='text-lg text-text'><span dir='ltr'>+98903620541</span></p>
                </div>
              </li>
              <li className='flex mb-[30px]'>
                <div className="bg-[#F9F4F1] rounded-full flex w-[60px] h-[60px]">
                  <EnvelpeIcon className="flex-none m-auto w-7 h-7 fill-first" />
                </div>
                <div className="flex flex-col ms-4 justify-between">
                  <h3 className='text-xl text-text'>{t('email')}</h3>
                  <p className='text-lg text-text my-auto'>iraneducare.co@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs