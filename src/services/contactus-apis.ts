"use client"
import {ContactUsForm} from "@/app/[lng]/contact-us/page"
import axios, {AxiosError} from "axios"
const client = axios.create( {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/contactUS/`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
} )


export const addContactUs = async ( _data: ContactUsForm ) => {
  console.log( _data )
  const {data} = await client.post( '/addContactUs', _data, {withCredentials: true} )
  console.log( data )
  return data
}