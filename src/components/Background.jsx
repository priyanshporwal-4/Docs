import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
        <nav className='absolute w-full top-[5%] py-10 flex justify-center text-xl text-zinc-600 font-semibold'>Documents.</nav>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background