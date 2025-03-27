"use client"
import { useGetHomeBlogs } from "@/hooks/blog-hooks";
import HomeBlogCard from "@/public-components/main/HomeBlogCard/HomeBlogCard";
import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'

const HomeBlogs = ({ lng }: { lng: string }) => {
  // const { data, isLoading } = useGetHomeBlogs(4, 1, '')


  const dateHandler = (date: string) => {
    switch (lng) {
      case 'en': return new Date(date).toLocaleString('en-US', { dateStyle: 'medium' })
      case 'ar': return new Date(date).toLocaleString('ar-SA', { dateStyle: 'medium' })
      case 'fa': return new Date(date).toLocaleString('fa-IR', { dateStyle: 'medium' })
    }
  }
  // console.log(data)
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-7">
      {/* {
        data ?
          data.map( ( blog: any ) => {
            return (
              <HomeBlogCard key={blog._id}
                image={blog.mainImage.imageUrl}
                title={lng === 'en' ? blog.enTitle : lng === 'ar' ? blog.arTitle : blog.faTitle}
                desc={lng === 'en' ? blog.enDescription : lng === 'ar' ? blog.arDescription : blog.faDescription}
                date={dateHandler( blog.updatedAt )}
                lng={lng}
                id={blog._id} />
            )
          } )
          :
          [1, 2, 3].map( ( i: number ) => {
            return (
              <article key={i} className="p-2.5 rounded-[20px] bg-bgColor border-bgColor">
                <div className="w-full h-[290px]">
                  <Skeleton borderRadius={20} height='100%' />
                </div>
                <h1 className='my-6 text-xl font-bold px-2.5'><Skeleton width={160} /></h1>
                <div className="px-2.5 line-clamp-3 mb-6">
                  <p><Skeleton count={3} /></p>
                </div>
              </article>
            )
          } )
      } */}
    </div>
  );
};

export default HomeBlogs;
