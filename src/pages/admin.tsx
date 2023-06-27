import Link from "next/link"

export default function Admin() {
    return (
        <div className="w-[80%] m-auto flex space-x-5">
            <div className="w-[50%] border-2 border-gray-400 mt-5 pb-5 rounded-[20px]">
            <h1 className="w-[400px]  m-auto text-5xl font-semibold mb-5">Tableau utilisateur</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, at in ut dolor</p>
            <div className="mt-5 m-auto w-[150px] text-center">
            <Link className="bg-blue-400 hover:bg-blue-200 p-2 pl-[50px] px-[50px] w-full m-auto rounded-[20px]" href={'/adminProducts'}>Utilisateurs</Link>
            </div>
            </div>
            <div className="w-[50%] border-2 border-gray-400 mt-5 pb-5 rounded-[20px]">
            <h2 className="w-[400px] m-auto text-5xl font-semibold mb-5">Tableau produits</h2>
            <p className="pl-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, at in ut dolor</p>
            <div className="mt-5 m-auto w-[150px] text-center">
            <Link className="bg-blue-400 hover:bg-blue-200 p-2 pl-[50px] px-[50px] w-full m-auto rounded-[20px]" href={'/adminUsers'}>Produits</Link>
            </div>
            </div>
        </div>
    )
}