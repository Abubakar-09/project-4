import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className="h-screen w-screen text-sm text-white bg-[#254f1a]">
      <div className="md:w-[80vw] w-[90vw] gap-2 flex justify-center items-center m-auto h-full">
        <div className="md:w-[50%] w-full gap-6  flex  flex-col justify-center">
          <div className="md:text-5xl  text-4xl font-extrabold">
            <h2>Everything you are. In <br /> one, simple link in bio.</h2>
          </div>
          <div className="">
            <p>Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          </div>
          <div className="">
            *Sign In To get Your Own Linktree Account!
          </div>
        </div>
        <div className="w-[50%] max-md:hidden flex justify-center items-center">
          <img src="/img_1.png" alt="image" />
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSection