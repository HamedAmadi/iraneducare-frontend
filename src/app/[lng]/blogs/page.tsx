"use client"
import { useGetBlogs, useGetLastBlogs } from "@/hooks/blog-hooks";
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import { useTranslation } from "@/app/i18n/client";
// import 'react-loading-skeleton/styles.css'
import BlogCard from "@/public-components/main/BlogCard/BlogCard";
import ClockIcon from "@/public-components/svg-icons/Clock/ClockIcon";

const Blogs = ({ params: { lng } }: { params: { lng: string } }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const { data, hasNextPage, fetchNextPage, error } = useGetBlogs(6, searchTerm)
  const { data: lastBlog, isLoading } = useGetLastBlogs(5, 1)

  const { t } = useTranslation(lng, 'blogs')

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTimeout(() => setSearchTerm(value), 1000);
  }

  const dateHandler = (date: string) => {
    switch (lng) {
      case 'en': return new Date(date).toLocaleString('en-US', { dateStyle: 'medium' })
      case 'ar': return new Date(date).toLocaleString('ar-SA', { dateStyle: 'medium' })
      case 'fa': return new Date(date).toLocaleString('fa-IR', { dateStyle: 'medium' })
    }
  }
  if (error?.code === 'ERR_NETWORK' || error?.response?.status === 500) {
    router.push('/main-500')
  }

  return (
    <>
      <div className='relative w-full h-fit -z-10 bg-center bg-no-repeat bg-cover bg-[url("../../../public/images/world-map.png")]'>
        <div className="absolute w-full h-full -z-20 opacity-30 bg-home-banner"></div>
        <div className="container">
          <h1 className="pt-40 pb-28 text-center text-4xl md:text-5xl font-BYekan">{t('title')}</h1>
        </div>
      </div>
      <div className="xs:container px-4 pt-20 pb-20">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <InfiniteScroll
              className="!overflow-visible"
              next={fetchNextPage}
              hasMore={hasNextPage || false}
              loader={<></>}
              dataLength={data?.pages.reduce((total, page) => total + page.length, 0) || 0}
            >
              {
                data && data?.pages[0].length === 0 ?
                  <p className="w-full text-center text-xl">{t('notfound-text')}</p>
                  :
                  <div className="">
                    {
                      data ?
                        data?.pages.map((page) =>
                          page.map((blog: any) => (
                            <BlogCard
                              key={blog._id}
                              image={blog.mainImage.imageUrl}
                              title={lng === 'en' ? blog.enTitle : lng === 'ar' ? blog.arTitle : blog.faTitle}
                              desc={lng === 'en' ? blog.enDescription : lng === 'ar' ? blog.arDescription : blog.faDescription}
                              date={dateHandler(blog.updatedAt)}
                              lng={lng}
                              id={blog._id}
                            />
                          ))
                        )
                        :
                        [1, 2, 3].map((i: number) => (
                          <article key={i} className='h-full mb-12'>
                            <div className="rounded-[20px] bg-white flex flex-col shadow-universityCard overflow-hidden h-full justify-items-stretch">
                              <div className="w-full h-auto aspect-[2/1] relative">
                                <Skeleton width='100%' height='100%' className="-top-1" />
                              </div>
                              <div className="pt-[45px] pb-[54px] px-10">
                                <h1 className='text-3xl leading-loose line-clamp-1 overflow-hidden'><Skeleton width={300} /></h1>
                                <div className="my-[13px] flex">
                                  <Skeleton className="me-2.5" width={20} height={20} />
                                  <Skeleton width={120} height={20} />
                                </div>
                                <div className="desc text-lg text-[#335371] leading-9 line-clamp-5 overflow-ellipsis overflow-hidden mt-[17px]">
                                  <Skeleton count={5} />
                                </div>
                                <div className="flex mt-10 mb-1.5">
                                  <Skeleton borderRadius="60px" width={120} height={60} />
                                </div>
                              </div>
                            </div>
                          </article>
                        ))
                    }
                  </div>
              }
            </InfiniteScroll>
          </div>
          <div className=" col-span-12 lg:col-span-4">
            <div className="py-10 px-[30px] mb-10 rounded-[20px] bg-[#F9F4F1]">
              <h3 className="text-2xl text-text mb-[30px]">{t('search-title')}</h3>
              <input className="border border-[#E1E1E1] h-[60px] w-full px-6 rounded-[6px] text-[#335371]" name="search" type="text" onChange={searchHandler} placeholder={t('search-title')} />
            </div>
            <div className="py-10 px-[30px] mb-10 rounded-[20px] bg-[#F9F4F1]">
              <h3 className="text-2xl text-text mb-[30px]">{t('recent-post-title')}</h3>
              <ul>
                {
                  lastBlog && lastBlog.length === 0 ?
                    <p className="w-full text-center text-lg">{t('notfound-text')}</p>
                    :
                    <div className="">
                      {
                        data ?
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
                    </div>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
