'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

interface GalleryProps {
    images: { src: string; alt: string }[],
    title: string
}

export default function Gallery({ images, title }: GalleryProps) {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    return (
        <section className="mb-8">
            <h3 className="text-xl md:text-2xl text-text font-bold mb-4">{title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="relative cursor-pointer aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                        onClick={() => {
                            setOpen(true)
                            setIndex(i)
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map(img => ({
                    src: img.src,
                    description: img.alt,
                }))}
                plugins={[Thumbnails, Fullscreen]}
            />
        </section>
    )
}
