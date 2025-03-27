"use client"
import {ConsultationForm} from "@/app/[lng]/free-consultation/page"
import axios, {AxiosError} from "axios"
const client = axios.create( {
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/consultation/`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
} )


export const addConsultation = async ( _data: ConsultationForm ) => {
  console.log( _data )
  const {data} = await client.post( '/addConsultation', _data, {withCredentials: true} )
  console.log( data )
  return data
}

// export const signIn = async ( _data: SignInForm ) => {
//   console.log( _data )
//   const {data} = await client.post( '/signin', _data, {withCredentials: true} )
//   console.log( data )
//   return data
// }

// export const getAdminList = async () => {
//   const {data} = await client.get( '/getAdminList', {withCredentials: true} )
//   console.log( data )
//   return data
// }

// export const verifyAdmin = async ( userId: string ) => {
//   const {data} = await client.get( `/verifyAdmin/${userId}`, {withCredentials: true} )
//   console.log( data )
//   return data
// }

// export const deactiveAdmin = async ( userId: string ) => {
//   const {data} = await client.get( `/deactiveAdmin/${userId}`, {withCredentials: true} )
//   console.log( data )
//   return data
// }

// export const checkSignIn = async () => {
//   const {data} = await client.get( '/checkSignIn', {withCredentials: true} )
//   console.log( data )
//   return data
// }

// export const logout = async ( {} ) => {
//   const {data} = await client.get( '/logOut', {withCredentials: true} )
//   console.log( data )
//   return data
// }