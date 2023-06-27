import Link from "next/link"

export default function Admin() {
    return (
        <div className="w-[80%] m-auto flex space-x-5">
            <div className="w-[50%] border-2 border-gray-400 mt-5 pb-5 rounded-[20px] text-center">
            <h1 className="w-full mt-3 m-auto text-5xl font-semibold mb-5">Tableau utilisateur</h1>
            <p className="pl-2">Vous redirige vers le tableau de utilisateurs pour en modifier ou en supprimer</p>
            <div className="mt-5 m-auto w-full text-center">
            <Link className="bg-blue-400 hover:bg-blue-200 p-2 pl-[100px] text-[30px] px-[100px] w-full m-auto rounded-[20px]" href={'/adminUsers'}>Utilisateurs</Link>
            </div>
            </div>
            <div className="w-[50%] border-2 border-gray-400 mt-5 pb-5 rounded-[20px] text-center">
            <h2 className="w-full mt-3 m-auto text-5xl font-semibold mb-5">Tableau produits</h2>
            <p className="pl-2">Vous redirige vers le tableau de produits pour en ajouter, modifier ou en supprimer</p>
            <div className="mt-5 m-auto w-full text-center">
            <Link className="bg-blue-400 hover:bg-blue-200 p-2 pl-[100px] text-[30px]  px-[100px] w-full m-auto rounded-[20px]" href={'/adminProducts'}>Produits</Link>
            </div>
            </div>
        </div>
    )
}