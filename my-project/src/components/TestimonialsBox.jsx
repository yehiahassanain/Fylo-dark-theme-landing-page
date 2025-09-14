import React from 'react'

const TestimonialsBox = ({desc, image, position, name}) => {
  return (
    <div className='text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c] '>
      <p className='mb-[20px]'>{desc}</p>
      <div className='flex items-center gap-[15px]'>
        <img src={`/src/assets/images/${image}`} className='w-[50px] h-[50px] rounded-full objext-contain ' />
        <div >
        <strong>{name}</strong>
        <p>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsBox
