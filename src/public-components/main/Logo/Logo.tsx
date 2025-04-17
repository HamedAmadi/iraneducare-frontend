import Link from "next/link";
import Image from "next/image"
import LogoImage from "../../../../public/images/logo.png"
const Logo = () => {
  return (
    <Link href="/" className="relative block aspect-[530/133] w-full">
      <Image
        src={LogoImage}
        alt="logo"
        fill
        className="object-contain"
        priority
        sizes="(min-width: 1024px) 208px, (min-width: 768px) 176px, 160px"
      />
    </Link>
    // <Link className="block w-full h-full" href="/">
    //   <Image fill className="!relative object-contain mx-auto" src="/images/logo.png" alt='logo' />
    // </Link>
  );
};

export default Logo;
