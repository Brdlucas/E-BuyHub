import React from "react"
import Link from "next/link"

 export const Footer:React.FC = () =>
{
    return <footer className="relative mt-[80px] bg-purple-900">
    <div className="table-footer-group absolute inset-x-0 bottom-0 h-16 bg-purple-900 text-white">
      <nav className="mt-1 space-x-10 text-center">
      <Link href={"/about"}>A propos</Link>
      <Link href={"/contact"}>Contact</Link>
      </nav>
    </div>
  </footer>
}
