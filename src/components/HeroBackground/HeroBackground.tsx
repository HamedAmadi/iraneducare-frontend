import Image from 'next/image'
import { ReactNode } from 'react'

interface HeroBackgroundProps {
    imageSrc: string
    overlayClassName?: string
    children?: ReactNode
    priority?: boolean
}
const HeroBackground = ({
    imageSrc,
    overlayClassName = 'bg-home-banner opacity-30',
    children,
    priority = true,
}: HeroBackgroundProps) => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* تصویر بکگراند */}
            <div className="absolute inset-0 -z-50">
                <Image
                    src={imageSrc}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={priority}
                />
            </div>

            {/* لایه نیمه‌شفاف رنگی روی تصویر */}
            <div className={`absolute inset-0 -z-40 ${overlayClassName}`}></div>

            {/* محتوای بخش */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}


export default HeroBackground