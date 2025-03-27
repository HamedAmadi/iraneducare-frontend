"use client"
import axios from "axios"

const client = axios.create( {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/blog/`,
  headers: {
    'Content-Type': 'application/json'
  }
} )

export const getBlogs = async ( limit: number, page: number, searchTerm: string ) => {
  const {data} = await client.get( '/getBlogs', {
    params: {
      search: searchTerm,
      page: page,
      limit: limit
    }
  } )
  console.log( data )
  return data.blogs
}

export const getBlog = async ( id: string ) => {
  const {data} = await client.get( `/get/${id}`, {withCredentials: true} )
  console.log( data )
  return data.blog
}

export const getBlogsByTag = async ( limit: number, page: number, tag: string, searchTerm: string ) => {
  console.log( tag )
  const {data} = await client.get( '/getBlogsByTag', {
    params: {
      search: searchTerm,
      page: page,
      limit: limit,
      tag: tag,
    }
  } )
  console.log( data )
  return data.blogs
}