import React from 'react'

const NewsSection = () => {
  return (
    <>
      <div className=" m-auto w-[90vw] border-[1px] border-slate-400 my-16 max-md:gap-4  flex max-md:flex-col justify-between items-center">
        <div className="md:p-14 max-md:p-4 flex flex-col gap-5 md:w-[60%] h-full">
          <div className="font-extrabold text-4xl">Long Establish</div>
          <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum delectus numquam ipsa dolor illo magni labore totam amet nihil!</div>
          <div className="flex justify-between">
            <p>20th May 2025</p>
            <p className='font-bold'>Read More..</p>
          </div>
        </div>
        <div className="relative h-full md:w-[40%]">
          <img src="/img_1.png" alt="img" className="object-cover object-center h-full w-full" />
        </div>
      </div>
    </>
  )
}

export default NewsSection