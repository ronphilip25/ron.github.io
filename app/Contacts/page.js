import React from 'react'
import Link from "next/link"

export default function page() {
  return (
    <div>
      <section>
      <Link href={"/Contacts"}></Link>
      <div className='container flex flex-wrap items-center justify-center mx-auto mb-4 md:mb-0'>
      <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
      <li className='space-x-5 justify-evenly px-1 py-2'>
        <Link href='https://www.facebook.com/ronphilip.sanchez/'><img className='h-10 w-10 rounded-lg max-w-xs hover:scale-125 ease-in-out shadow shadow-sky-600/90 hover:shadow-blue-800/90 transition duration-300 ease-in-out' src='https://www.svgrepo.com/show/204338/facebook.svg'/></Link>
      </li>
      <li className='space-x-5 justify-evenly px-1 py-2'>
        <Link href='https://www.instagram.com/ronphilip_/'><img className='h-10 w-10 rounded-lg max-w-xs hover:scale-125 ease-in-out shadow shadow-[#8a3ab9] hover:shadow-red-400/90 transition duration-300 ease-in-out' src='https://www.svgrepo.com/show/204359/instagram.svg'/></Link>
      </li>
      <li className='space-x-5 justify-evenly px-1 py-2'>
        <Link href='https://twitter.com/RonPhilip_'><img className='h-10 w-10 rounded-lg max-w-xs hover:scale-125  ease-in-out shadow shadow-gray-600/50 hover:shadow-sky-600/90 transition duration-300 ease-in-out' src='https://www.svgrepo.com/show/204339/twitter.svg'/></Link>
      </li>
      <li className='space-x-5 justify-evenly px-1 py-2'>
      <Link href={"/home/user"}><img className='h-10 w-10 rounded-lg max-w-xs hover:scale-125 shadow shadow-violet-400/90 hover:shadow-red-400/90 transition duration-300 ease-in-out' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png'/></Link>
      </li>
    </ul>
     
    </div>
    </section>
    </div>
  )
}
