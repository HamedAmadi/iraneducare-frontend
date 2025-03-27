"use client"
type Props = {
  buttonText: string
  placeholder: string
}

const SubscribeForm = ( {buttonText, placeholder}: Props ) => {
  return (
    <form
      // onSubmit={handleSubmit( onSubmit )}
      noValidate>
      <div className="flex bg-white p-1 w-full h-14 xs:h-[70px] rounded-[50px]">
        <input
          // {...register( 'membershipCode', {required: true} )}
          type="text" className="text-lg w-full border-0 px-4 xs:px-7 rounded-[50px] text-[#335371]" placeholder={placeholder} />
        <button className="flex-none text-base xs:text-lg py-2.5 px-[30px] w-auto rounded-[50px] font-bold bg-second hover:bg-[#131A2A] hover:text-white" type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export default SubscribeForm;
