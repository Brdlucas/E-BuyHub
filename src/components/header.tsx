import Link from "next/link"

export const Header:React.FC = () => 
{

return  <header className=" bg-purple-950 h-16 text-white max-md:h-[450px]" style={{border: "2px bg-purple solid", borderBottomLeftRadius: '50px' , borderBottomRightRadius: '50px',}}>
    <div className="ml-10 max-md:m-auto w-[250px]">
        <Link className="bg-black md:w-[5px]" href={"/"}><h1 className="max-md:m-auto max-md:w-[250px] md:w-[250px] font-bold text-5xl max-md:text-center">E-Buy-Hub</h1></Link>
    </div>
            <nav className="md:absolute md:w-96 md:flex md:space-x-5 md:top-0 md:right-0 md:pl-2 text-center md:mt-2 md:mx-[80px] max-[md]:flex max-md:flex-col">
                <Link className="max-md:w-[300px] max-md:rounded-[30px] max-md:m-auto max-md:flex max-md:justify-center max-md:mb-5 max-md:h-20 max-md:pt-5" href={"/article"}> 
                <h3 className="border-2 hover:bg-purple-800 border-black max-md:bg-purple-900 max-md:w-[300px] pb-3 max-md:text-3xl max-md:pt-3 font-bold rounded-full md:bg-purple-900 md:h-13 md:w-32 md:pt-3">Article</h3> 
                </Link>
                <Link className="max-md:w-[300px] max-md:rounded-[30px] max-md:m-auto max-md:flex max-md:justify-center max-md:mb-5 max-md:h-20 max-md:pt-5" href={"/contact"}> 
                <h3 className="border-2 border-black hover:bg-purple-800 max-md:bg-purple-900 max-md:w-[300px] pb-3 max-md:text-3xl max-md:pt-3 font-bold rounded-full md:bg-purple-900 md:h-13 md:w-32 md:pt-3">Contact</h3> 
                </Link>
                <Link className="max-md:w-[300px] max-md:rounded-[30px] max-md:m-auto max-md:flex justify-center max-md:mb-20  max-md:h-20 max-md:pt-5" href={"/connexion"}> 
                <h3 className="border-2 border-black hover:bg-purple-800 max-md:bg-purple-900 max-md:w-[300px] pb-3 max-md:text-3xl max-md:pt-3 font-bold rounded-full md:bg-purple-900 md:h-13 md:w-32 md:pt-3">Connexion</h3> 
                </Link>
            </nav>
        </header>
} 