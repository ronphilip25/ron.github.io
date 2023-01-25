import React from 'react'
import Link from "next/link"

export default function page() {
  return (
    <div class="container about-page flex flex-wrap items-center justify-center mx-auto">
      <div className="items-center justify-between hidden w-full sm:flex md:flex md:w-auto md:order-1" id="mobile-menu-2">
      <Link href={"/"}></Link>
        <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
          <h1>
          <p>A FullStack developer that is knowledgeable in technologies like</p>
          <span class='skills-span'>HTML5, CSS3, SASS JavaScript,MongoDB,Express, React, NodeJS, REST, Bootstrap, Postman and Git </span>
           and platforms such as
          <span class="skills-span"> Mongodb, AWS, Firebase, Heroku, Stripe and Vercel</span>
          </h1>
        </li>
        <li>
        <div className='flex'>
       <div class="stage">
       <div class="cubespinner">
       <div class="face1"><img className='rounded-3xl h-full w-full' src="https://cdn.worldvectorlogo.com/logos/css-3.svg"/></div>
       <div class="face2"><img className='rounded-lg h-full w-full' src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"/></div>
       <div class="face3"><img className='h-full w-full' src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"/></div>
       <div class="face4"><img className='h-full w-full' src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/></div>
       <div class="face5"><img className='h-full w-full' src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"/></div>
       <div class="face6"><img className='h-full w-full' src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"/></div>
       </div>
       </div>
       </div>
        </li>
        </ul> 
      </div>
      <section>
      <div>

      </div>
      </section>
      </div>
     
    
    
  )
}
