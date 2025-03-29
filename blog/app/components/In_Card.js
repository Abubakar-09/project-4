import Link from 'next/link'
import React from 'react'


const In_Card = (props) => {
  return (
    <>
      <Link href='/post'>
        <div className="flex text-sm border-[1px] rounded-lg flex-col justify-between pb-2 w-[25vw] h-[85vh] md:h-[65vh] max-md:w-[100%]">
          <div className="relative w-full h-[60%]"><img src={`${props.img}`} alt="box_img" className='w-full h-full object-center object-cover rounded-t-lg' /></div>
          <div className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem sapiente est. Consequuntur, neque inventore?</div>
          <div className="px-2 flex justify-between">
            <p className="">May 20th 2025</p>
            <p className="font-bold">Read More</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default In_Card