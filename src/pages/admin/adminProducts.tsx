import Link from "next/link"


function AdminUsers({ props }: any) {
    return (
      <div className="w-[90%] m-auto">
        <div className="text-center mt-5">
        <Link className="bg-blue-400 text-white font-bold hover:bg-blue-200 p-2 pl-[100px] text-[30px] px-[100px] w-full m-auto rounded-[20px]" href={'/admin/addProducts'}>Ajouter</Link>
        </div>
            <table  className=" border-2 border-black m-auto text-center w-full text-2xl mt-5 font-semibold">
            <thead className="border-2 border-black h-[50px]">
              <th className="bg-blue-200 w-[200px]">Nom</th>
              <th className="border-2 border-black bg-blue-200 w-[800px]">Description</th>
              <th className="border-2 border-black bg-blue-200 w-[200px]">Prix</th>
              <th className="border-2 border-black bg-blue-200 w-[400px]">Catégorie</th>
              <th className="border-2 border-black bg-blue-200 w-[400px]">Stockage</th>
              <th className="border-2 border-black bg-blue-200 w-[20px]">Actions</th>
            </thead>
            {props.map((product: any, i: any) => (
            <tbody key={i} className="h-[50px]">
              <td className="border-2 border-black">{product.name}</td>
              <td className="border-2 border-black">{product.description}</td>
              <td className="border-2 border-black">{product.price}€</td>
              <td className="border-2 border-black">{product.category}</td>
              <td className="border-2 border-black">{product.stock}</td>
              <div className=" flex space-x-1 m-auto w-full mt-2 text-center">
              <input type="button" className="w-[150px] m-auto cursor-pointer hover:text-blue-600" value={"modifier"}  />
              <input type="button" className=" m-auto w-[150px] cursor-pointer hover:text-red-600" value={"supprimer"}  />
              </div>
            </tbody>
        ))}
        </table>
        <div className="text-center mt-5">
        <Link className="bg-blue-400 text-white hover:text-gray-700 hover:bg-blue-200 p-2 pl-[100px] text-[30px]  px-[100px] w-full m-auto rounded-[20px]" href={'/admin/admin'}>Retour</Link>
        </div>
      </div>
    )
  }


  AdminUsers.getInitialProps = async () => {
    const res = await fetch('/api/products')
    const json = await res.json()
    return { props: json.data}
  }
  
  export default AdminUsers;   