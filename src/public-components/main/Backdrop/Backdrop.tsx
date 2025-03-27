'use client'
import {MouseEventHandler} from 'react'

interface Props {
  close: MouseEventHandler<HTMLDivElement>
}

const Backdrop = ( {close}: Props ) => {
  return (
    <div className='fixed w-full h-full z-[20] top-0 right-0' onClick={close}></div>
  )
}


export default Backdrop