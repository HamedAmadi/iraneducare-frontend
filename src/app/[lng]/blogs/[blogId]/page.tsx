"use client"
// import 'react-loading-skeleton/styles.css'
import './Blog.css'
import { useGetBlog, useGetLastBlogs } from "@/hooks/blog-hooks";
import ClockIcon from "@/public-components/svg-icons/Clock/ClockIcon";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import Image from 'next/image'
import { useTranslation } from "@/app/i18n/client";
import { notFound, useRouter } from "next/navigation";
import parse from 'html-react-parser';

type Props = {
  params: {
    blogId: string
    lng: string
  }
}

const Blog = ({ params }: Props) => {
  const router = useRouter()
  const { blogId } = params
  const { lng } = params
  const { data: lastBlog } = useGetLastBlogs(5, 1)
  const { data: blog, isSuccess, error } = useGetBlog(blogId)
  const { t } = useTranslation(lng, 'blogs')

  const { enTitle, enDescription, arTitle, arDescription, faTitle, faDescription, enTags, arTags, faTags, mainImage, updatedAt } = isSuccess && blog


  const title = (lng === 'en' ? enTitle : lng === 'ar' ? arTitle : faTitle)
  const description = (lng === 'en' ? enDescription : lng === 'ar' ? arDescription : faDescription)
  const tags = (lng === 'en' ? enTags : lng === 'ar' ? arTags : faTags)

  const dateHandler = (date: string) => {
    switch (lng) {
      case 'en': return new Date(date).toLocaleString('en-US', { dateStyle: 'medium' })
      case 'ar': return new Date(date).toLocaleString('ar-SA', { dateStyle: 'medium' })
      case 'fa': return new Date(date).toLocaleString('fa-IR', { dateStyle: 'medium' })
    }
  }

  if (error?.code === 'ERR_NETWORK') {
    router.push('/main-500')
  }

  if (error?.response?.status === 404 || error?.response?.status === 500) {
    notFound();
  }

  return (
    <>
      <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
        <div className="absolute w-full h-full -z-20 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-3xl md:text-5xl font-BYekan">
            {title
              ?
              title
              :
              <Skeleton width={280} height={56} />
            }</h1>
        </div>
      </div>
      <div className="xs:container px-4 pt-20 pb-20">
        <div className="grid grid-cols-12 sm:gap-10">
          <div className="relative col-span-12 lg:col-span-8">
            <div className="relative w-full h-auto rounded-xl overflow-hidden mb-[45px]">
              {
                mainImage ?
                  <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="!relative overflow-hidden" src={mainImage.imageUrl} alt={""}></Image>
                  :
                  <Skeleton className='aspect-[2/1]' borderRadius={12} width='100%' />
              }
            </div>
            <div className="flex mb-5">
              {updatedAt ?
                <>
                  <ClockIcon className='w-5 h-5 my-auto me-2.5 fill-first' />
                  <p className='text-[#335371] text-lg'>{dateHandler(updatedAt)}</p>
                </>
                :
                <>
                  <Skeleton className="me-2.5" width={20} height={20} />
                  <Skeleton width={120} height={20} />
                </>
              }
            </div>
            <div className="blog-content text-lg text-[#335371] leading-9">
              {
                description ?
                  parse(description)
                  :
                  <Skeleton count={8} />
              }
            </div>
          </div>
          <div className="mt-10 md:mt-0 col-span-12 lg:col-span-4">
            <div className="py-10 px-[30px] mb-10 rounded-[20px] bg-[#F9F4F1]">
              <h3 className="text-2xl text-text mb-[30px]">{t('recent-post-title')}</h3>
              <ul>
                {
                  lastBlog && lastBlog.length === 0 ?
                    <p className="w-full text-center text-lg">{t('notfound-text')}</p>
                    :
                    <>
                      {
                        lastBlog ?
                          lastBlog?.map((blog: any) => (
                            <Link className="group" key={blog._id} href={`/${lng}/blogs/${blog._id}`}>
                              <li className="flex mt-6">
                                <div className="w-[90px] h-[90px] me-5">
                                  <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="!relative object-cover overflow-hidden rounded-[20px]" src={blog.mainImage.imageUrl} alt={''} />
                                </div>
                                <div className="flex flex-col">
                                  <h3 className="mb-2 text-xl leading-8 text-text line-clamp-2 group-hover:text-first">{lng === 'en' ? blog.enTitle : lng === 'ar' ? blog.arTitle : blog.faTitle}</h3>
                                  <div className="flex mt-auto">
                                    <ClockIcon className='w-5 h-5 my-auto me-2.5 fill-first' />
                                    <p className=''>{dateHandler(blog.updatedAt)}</p>
                                  </div>
                                </div>
                              </li>
                            </Link>
                          ))
                          :
                          [1, 2, 3].map((i: number) => (
                            <li key={i} className="flex mb-6">
                              <div className="w-[90px] h-[90px] me-5">
                                <Skeleton width='100%' height='100%' borderRadius='20px' />
                              </div>
                              <div className="flex flex-col">
                                <h3 className="mb-2 text-xl leading-8 text-text line-clamp-2">
                                  <Skeleton count={2} />
                                </h3>
                                <div className="flex mt-auto">
                                  <Skeleton className="me-2.5" width={20} height={20} />
                                  <Skeleton width={120} height={20} />
                                </div>
                              </div>
                            </li>
                          ))
                      }
                    </>
                }
              </ul>
            </div>
            {
              tags && tags.length !== 0 &&
              <div className="py-10 px-[30px] mb-10 rounded-[20px] bg-[#F9F4F1]">
                <h3 className="text-2xl text-text mb-[30px]">{t('tags-title')}</h3>
                <div className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                  {
                    tags.map((tag: string, i: number) => (
                      <Link className="" key={i} href={`/${lng}/tag-blogs/${tag}`}>
                        <p className="text-lg text-[#335371] py-2.5 px-[11px] border border-[#bfc5cb] rounded-[50px] hover:bg-first hover:border-first hover:text-white">{tag}</p>
                      </Link>)
                    )
                  }
                </div>
              </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
