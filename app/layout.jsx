import './globals.css'
import Nav1 from "../app/components/nav bar/page"
import Footer from "../app/components/footer/page"
import Skills from "./Skills/page"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className='bg-white border- gray-200 px-2 sm:px-1.5 py-2.5 rounded bg-gradient-to-r from-blue-400 to-purple-300'>
        <nav><Nav1/></nav>
        {children}
        </body>
        <Footer/>
    </html>
  )
}
