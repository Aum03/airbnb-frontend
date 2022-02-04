import Image from 'next/image'
import React from 'react'

function LargeCard({img,description,title,buttonText}) {
    return (
        <div className='py-16 cursor-pointer relative'>
            <div className='relative h-96 min-w-[300px]'>
                <Image src={img}
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'/>
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl w-64 mb-3'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 mt-5 rounded-lg'>{buttonText}</button>
            </div>
        </div>
    )
}

export default LargeCard
