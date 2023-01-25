import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <ul>
      <li className='flex justify-center'>
        <p>Welcome to My Portfolio Page!
      </p>
      </li>
      </ul>
  </div>
  )
}
