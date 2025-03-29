import React from 'react'
import In_Card from './In_Card'

const Cards = () => {
  return (
    <>
    <div className="w-[90vw] m-auto justify-between flex gap-3 max-md:flex-col flex-wrap my-10">
    <In_Card img="/img_1.png"/>
    <In_Card img="/img_2.png"/>
    <In_Card img="/img_3.png"/>
    </div>
    </>
  )
}

export default Cards