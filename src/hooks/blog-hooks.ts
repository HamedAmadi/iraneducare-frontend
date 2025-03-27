"use client"
import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import * as api from "../services/blog-apis"
import {AxiosError} from "axios";

export const useGetBlogs = ( limit: number, searchTerm: string ) => {
  return useInfiniteQuery<any, AxiosError>( ["blogs", limit, searchTerm], ( {pageParam = 1} ) => api.getBlogs( limit, pageParam, searchTerm ), {
    getNextPageParam: ( lastPage, allPages ) => {
      const nextPage =
        lastPage.length === 0 ? undefined : allPages.length + 1;
      return nextPage;
    },
  } )
}

export const useGetHomeBlogs = ( limit: number, page: number, searchTerm: string ) => {
  return useQuery( ["homeBlogs", limit, page, searchTerm], () => api.getBlogs( limit, page, searchTerm ), {keepPreviousData: true} )
}

export const useGetLastBlogs = ( limit: number, page: number ) => {
  return useQuery( ["lastBlogs", limit, page], () => api.getBlogs( limit, page, '' ), {keepPreviousData: true} )
}

export const useGetBlog = ( id: string ) => {
  return useQuery<any, AxiosError>( ['blog', id], () => api.getBlog( id ) )
}

export const useGetBlogsByTag = ( limit: number, tag: string, searchTerm: string ) => {
  return useInfiniteQuery<any, AxiosError>( ["tagBlogs", limit, tag, searchTerm], ( {pageParam = 1} ) => api.getBlogsByTag( limit, pageParam, tag, searchTerm ), {
    // getNextPageParam: ( lastPage ) => lastPage.nextCursor,
    getNextPageParam: ( lastPage, allPages ) => {
      const nextPage =
        lastPage.length === 1 ? allPages.length + 1 : undefined;
      return nextPage;
    },
  } )
}