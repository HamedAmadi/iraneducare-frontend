"use client"
import './consultation.css'
import Link from 'next/link'
import Input from '@/public-components/main/Input/input'
import { SubmitHandler, useForm } from 'react-hook-form';
import ButtonSpinner from '@/public-components/main/ButtonSpinner/ButtonSpinner';
import EnvelpeIcon from '@/public-components/svg-icons/Envelope/EnvelopeIcon';
import { useAddConsultation } from '@/hooks/consultation-hooks';
import toast from 'react-hot-toast';
import { useTranslation } from '@/app/i18n/client';
import TelegramIcon from '@/public-components/svg-icons/Telegram/TelegramIcon';
import WhatsAppIcon from '@/public-components/svg-icons/WhatsApp/WhatsAppIcon';
import HeroBackground from '@/components/HeroBackground/HeroBackground';

export type ConsultationForm = {
  fullName: string
  email: string
  mobileNumber: string
  description: string
}

const FreeConsultation = ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = useTranslation(lng, 'consultation')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ConsultationForm>({ mode: "onSubmit" });
  const { mutate: addConsultation, isLoading } = useAddConsultation()

  const onSubmit: SubmitHandler<ConsultationForm> = (data) => {
    console.log(data)
    addConsultation(data, {
      onSuccess: (res) => {
        toast.success(t('success-message'), { duration: 3000 })
        reset()
      },
      onError: (err: any) => {
        console.log(err)
        if (err.response) {
          toast.error(t('error-message'))
        }
        else {
          // toast.error( 'خطایی در سرور رخ داده است! لطفا مجددا تلاش کنید' )
          toast.error(t('error-message'))
        }
      }
    })
  };
  return (
    <>
      <HeroBackground imageSrc="/images/world-map.webp">
        {/* <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'> */}
        {/* <div className="absolute w-full h-full -z-50 opacity-30 bg-home-banner"></div> */}
        <div className="container">
          <h1 className="pt-[clamp(6rem,16vw,10rem)] pb-[clamp(4rem,10vw,7rem)] text-center text-[clamp(1.875rem,4vw,3rem)] text-text font-BYekan">{t('title')}</h1>
          {/* <h1 className="pt-40 pb-28 text-center text-3xl md:text-5xl font-BYekan">{t('title')}</h1> */}
        </div>
        {/* </div> */}
      </HeroBackground>
      <div className="py-[clamp(1rem,8vw,6rem)] xs:container px-4">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="px-4 py-6 md:p-10 rounded-[20px] bg-second12">
              <p className='text-lg md:text-xl mb-8'>{t('form-desc')}</p>
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
                <Input {...register('description', {
                  required: t('description-required-message'),
                  pattern: {
                    value: /^(?!\s*$).+/,
                    message: t('description-required-message')
                  }
                }
                )} type={"textarea"} name={"description"} errors={errors} placeholder={t('description-ph')} />
                <button className='flex justify-center py-2.5 px-10 md:text-lg text-third bg-first hover:bg-second rounded-[50px]' disabled={isLoading} type="submit">
                  {isLoading && <ButtonSpinner />}
                  {t('button-text')}
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 mt-10 md:mt-0">
            {/* <h2 className='text-5xl text-text mb-7'>{t( 'title2' )}</h2> */}
            <p className='text-lg text-text mb-6'>{t('second-desc')}</p>
            <ul>
              <li className='flex mb-[30px]'>
                <div className="bg-second10 rounded-full flex w-[60px] h-[60px]">
                  <TelegramIcon className="flex-none m-auto w-7 h-7 fill-first" />
                </div>
                <div className="flex flex-col ms-4 justify-between">
                  <Link className='text-xl text-first my-auto' href={'#'}>{t('telegram')}</Link>
                  <p className='text-lg text-text'><span dir='ltr'>+98903620541</span></p>
                </div>
              </li>
              <li className='flex mb-[30px]'>
                <div className="bg-second10 rounded-full flex w-[60px] h-[60px]">
                  <WhatsAppIcon className="flex-none m-auto align-middle w-7 h-7 fill-first" />
                </div>
                <div className="flex flex-col ms-4 justify-between">
                  <Link className='text-xl text-first' href={'#'}>{t('whatsapp')}</Link>
                  <p className='text-lg text-text'><span dir='ltr'>+98903620541</span></p>
                </div>
              </li>
              <li className='flex mb-[30px]'>
                <div className="bg-second10 rounded-full flex w-[60px] h-[60px]">
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
  )
}

export default FreeConsultation