import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="bg-gray-50 h-[70vh] max-md:py-5 max-md:min-h-screen">
        <div className="flex h-full w-[90vw]  max-md:flex-col m-auto gap-2 items-center">
          <div className="md:w-[50%] h-full flex flex-col justify-center gap-4">
            <h2 className='font-extrabold text-6xl flex items-center'>Make Better <br /> Coffee <img src="/mug.png" alt="mug" /></h2>
            <p className='text-2xl'>Why Learn How To Blog?</p>
          </div>
          <div className="md:w-[50%] h-full  relative flex items-end justify-center">
            <img src="/banner.png" className='object-contain w-[80%] h-[80%] object-center' alt="banner" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection