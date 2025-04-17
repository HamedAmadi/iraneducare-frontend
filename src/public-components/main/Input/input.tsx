"use client"
import { forwardRef } from "react";
import { FieldErrors } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
type InputProps = {
  type: string
  name: string
  label?: string
  placeholder: string
  errors?: FieldErrors
  disabled?: boolean
  dir?: string,
  dirtyFields?: any
  onChange?: any
  isValid?: boolean
  isDirty?: boolean
  value?: any
}

const Input = forwardRef<any, InputProps>(({ type, errors, name, label, placeholder, value, dirtyFields, isDirty, isValid, disabled, dir, ...rest }, ref) => {

  console.log(errors)
  switch (type) {
    case 'text': return (
      <>
        <div className='mb-5 w-full'>
          <input className={'w-full px-5 h-14 border text-inputText rounded-[20px] bg-transparent md:text-lg ' + (errors && name in errors ? 'border-[#dc3232]' : 'border-[#E1E1E1]')} disabled={disabled} ref={ref} type={'text'} placeholder={placeholder} name={name} {...rest} />
          <div className="flex justify-between mt-1">
            <ErrorMessage
              errors={errors}
              name={name}
              render={(messages) => {
                return (
                  <p className='text text-[#dc3232]'>{messages.message}</p>
                )
              }}
            />
          </div>
        </div>
      </>
    );
    case 'email': return (
      <>
        <div className='mb-5 w-full'>
          <input className={'w-full px-5 h-14 border text-inputText font-IRANSansWebEnNo rounded-[20px] bg-transparent md:text-lg ' + (errors && name in errors ? 'border-[#dc3232]' : 'border-[#E1E1E1]')} disabled={disabled} ref={ref} type={'email'} placeholder={placeholder} name={name} {...rest} />
          <div className="flex justify-between mt-1">
            <ErrorMessage
              errors={errors}
              name={name}
              render={(messages) => {
                return (
                  <p className='text-[#dc3232]'>{messages.message}</p>
                )
              }}
            />
          </div>
        </div>
      </>
    )
    case 'mobileNumber': return (
      <>
        <div className='mb-5 w-full'>
          <input dir={dir} className={'w-full px-5 h-14 border text-inputText rounded-[20px] bg-transparent md:text-lg ' + (errors && name in errors ? 'border-[#dc3232]' : 'border-[#E1E1E1]')} disabled={disabled} ref={ref} type='tel' placeholder={placeholder} name={name} {...rest} />
          <div className="flex justify-between mt-1">
            <ErrorMessage
              errors={errors}
              name={name}
              render={(messages) => {
                return (
                  <p className='text-[#dc3232]'>{messages.message}</p>
                )
              }}
            />
          </div>
        </div>
      </>
    )
    case 'number': return (
      <>
        <div className='mb-5 w-full'>
          <input className={'w-full px-5 h-14 border text-inputText rounded-[20px] bg-transparent md:text-lg ' + (errors && name in errors ? 'border-[#dc3232]' : 'border-[#E1E1E1]')} disabled={disabled} ref={ref} type='number' placeholder={placeholder} name={name} {...rest} />
          <div className="flex justify-between mt-1">
            <ErrorMessage
              errors={errors}
              name={name}
              render={(messages) => {
                return (
                  <p className='text-[#dc3232]'>{messages.message}</p>
                )
              }}
            />
          </div>
        </div>
      </>
    )
    case 'textarea': return (
      <>
        <div className='mb-5 w-full'>
          <textarea className={'w-full p-5 border text-inputText rounded-[20px] bg-transparent text-lg ' + (errors && name in errors ? 'border-[#dc3232]' : 'border-[#E1E1E1]')} disabled={disabled} ref={ref} placeholder={placeholder} rows={4} name={name} {...rest} />
          <div className="flex justify-between mt-1">
            <ErrorMessage
              errors={errors}
              name={name}
              render={(messages) => {
                return (
                  <p className='text-[#dc3232]'>{messages.message}</p>
                )
              }}
            />
          </div>
        </div>
      </>
    )
    default: return null
  }
})

export default Input;