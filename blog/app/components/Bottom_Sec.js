import React from 'react'

const Bottom_Sec = () => {
  return (
    <>
    <div className="w-[90vw] flex h-[90vh] rounded-lg items-center pb-10 max-md:hidden justify-center m-auto">
        <div className="w-[40%] bg-blue-100 h-full flex flex-col items-center justify-center">
            <div className="w-[70%] m-auto flex flex-col gap-7 text-md">
                <div className="text-4xl font-bold">What's Lorem?</div>
                <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, eos. Modi sapiente sunt labore voluptas distinctio odit beatae, veritatis itaque.</div>
                <div className="flex justify-between">
                    <div className="">20 May</div>
                    <div className="">Read More</div>
                </div>
            </div>
        </div>
        <div className="w-[60%] h-full relative">
            <img src="/img_2.png" alt="box_image" className='w-full h-full object-center object-cover' />
        </div>
    </div>
    <div className="w-[90vw] m-auto flex justify-end max-md:hidden">
        <button className='p-2 text-white font-semibold bg-purple-800 rounded-lg text-sm'>See More</button>
    </div>
    </>
  )
}

export default Bottom_Sec