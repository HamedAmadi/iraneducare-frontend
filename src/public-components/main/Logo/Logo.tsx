import Link from "next/link";
import Image from "next/image"
import LogoImage from "../../../../public/images/logo.png"
const Logo = () => {
  return (
    <Link className="block w-full h-full" href="/">
      <Image fill className="!relative object-contain mx-auto" src={LogoImage} alt='logo' />
    </Link>
  );
};

export default Logo;
