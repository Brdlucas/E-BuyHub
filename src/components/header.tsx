import Link from "next/link"

export const Header:React.FC = () => 
{
    return  <header className="bg-purple-950 h-16 text-white" style={{border: "2px bg-purple solid", borderBottomLeftRadius: '50px', 
    borderBottomRightRadius: '50px',}}>
        <Link href={"/"}><h1 className="absolute flex top-0 left-0 ml-20 w-38 text-center text-3xl mt-3 font-bold">E-Buy-Hub</h1></Link>
        <nav className="absolute h-12 w-96 flex space-x-5 top-0 right-0 pl-2 text-center mt-2 mx-10">
            <Link className="bg-purple-900 h-13 w-32 pt-3" style={{borderRadius: '30px'}} href={"/contact"}>Contact</Link>
            <Link className="bg-purple-900 h-13 w-32 pt-3" style={{borderRadius: '30px'}} href={"/#"}>A propos</Link>
            <Link className="bg-purple-900 h-13 w-32 pt-3" style={{borderRadius: '30px'}} href={"/#"}>Connexion</Link>
        </nav>
        </header>
}