import Link from "next/link"

export default function Admin() {
    return (
        <div className="w-[80%] m-auto flex space-x-5 h-[928px]">
            <div className="w-[50%] border-2 border-gray-400 mt-5 pb-5 rounded-[20px] text-center max-lg:h-[320px] h-[250px]">
                <h1 className="w-full mt-3 m-auto text-5xl font-semibold mb-5 max-sm:text-3xl">Tableau utilisateur</h1>
                <p className="pl-2">Vous redirige vers le tableau de utilisateurs pour en modifier ou en supprimer</p>
                <div className="md:mt-5 m-auto w-full text-center">
                    <div className=' hover:bg-blue-400 hover:text-white text-center bg-gray-400 text-white rounded-[30px] h-[50px] max-lg:pt-2 w-[40%] max-lg:w-[120px] m-auto cursor-pointer max-lg:mt-[20px]'>
                        <Link href={'adminUsers'} className="text-[30px] max-lg:text-[20px] max-lg:text-red-200">Utilisateurs</Link>
                    </div>
                </div>
            </div>
            <div className="w-[50%] border-2 border-gray-400 mt-5 pb-5 rounded-[20px] text-center max-lg:h-[320px] h-[250px]">
                <h2 className="w-full mt-3 m-auto text-5xl font-semibold mb-5 max-sm:text-3xl">Tableau produits</h2>
                <p className="pl-2">Vous redirige vers le tableau de produits pour en ajouter, modifier ou en supprimer</p>
                <div className="mt-5 m-auto w-full text-center">
                    <div className=' hover:bg-blue-400 hover:text-white text-center bg-gray-400 text-white rounded-[30px] h-[50px] max-lg:pt-2 w-[40%] max-lg:w-[120px] m-auto cursor-pointer'>
                        <Link href={'products/adminProducts'} className="text-[30px] max-lg:text-[20px] max-lg:text-red-200">Produits</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}