import React from 'react'
import Image from 'next/image'

const Weather = ({data}) => {
  return (
    <>
    
    <div class="flex justify-around mx-auto h-3/5 w-3/5  mt-8 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 sm:flex-col">
    <p class="font-normal text-8xl mt-10 text-gray-700 dark:text-gray-400">{data.main.temp.toFixed(0)}&#176;</p>
    <Image className='h-4/5 w-2/5 mt-10' src={`/images/${data.weather[0].icon}.png`} width='400' height='400'/>
    </div>
  
  </>
  )
}

export default Weather