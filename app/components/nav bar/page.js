import React from 'react'
import Link from "next/link"
import Image from 'next/image'

function page() {
  return (         
  <nav class="px-2 sm:px-1.5 py-2.5 rounded bg-gradient-to-r from-blue-300 to-cyan-300">
  <div class="md:container md:mx-auto flex flex-wrap items-center justify-between mx-auto">
  <Link href={"/"} class="flex items-center">
      <img src="https://img.icons8.com/ios7/600/000000/r-key.png" class="h-6 mr-3 sm:h-9 rounded-lg max-w-xs hover:scale-125 shadow shadow-violet-400/90 hover:shadow-red-400/90 transition duration-300 ease-in-out" alt="Current Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ron Philip</span>
  </Link>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-slate-500 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-blue-6 00" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img class="w-8 h-8 rounded-full max-w-xs hover:scale-125 shadow shadow-violet-400/90 hover:shadow-red-400/90 transition duration-300 ease-in-out" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="user photo"></img>
      </button>
      <div class=" z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
        <div class="px-4 py-3">
          <span class="block text-sm text-blue-600 dark:text-white">Ron Philip</span>
          <span class="block text-sm font-medium text-blue-500 truncate dark:text-gray-400">ronlip2571@gmail.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li className='px-1 py-1 text-center rounded-lg max-w-xs hover:scale-125 transition duration-300 ease-in-out'><Link href={"/Contacts"}><img className='px-1 py-2 h-12 w-12' src='https://icons.veryicon.com/png/o/education-technology/ui-icon/contacts-77.png'/>Contact</Link>
        </li>
        <li className='px-1 py-1 text-center rounded-lg max-w-xs hover:scale-125 transition duration-300 ease-in-out'><Link href={"/About"}><img className='px-1 py-1 h-12 w-12' src='https://www.svgrepo.com/download/43426/profile.svg'/>About</Link>
        </li>
        <li className='px-1 py-1 text-center rounded-lg max-w-xs hover:scale-125 transition duration-300 ease-in-out'><Link href={"/Skills"}><img className='px-1 py-1 h-12 w-12' src='skills.png'/>Skills</Link>
        </li>
    </ul>
     
  </div>
  </div>
</nav>



  )
}

export default page
