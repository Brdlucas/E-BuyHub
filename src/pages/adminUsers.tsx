function AdminUsers({ props }) {
    return (
      <div className="w-[90%] m-auto">
            <table  className=" border-2 border-black m-auto text-center w-full text-2xl mt-5 font-semibold">
            <thead className="border-2 border-black h-[50px]">
              <th className="bg-blue-200">Prénom</th>
              <th className="border-2 border-black bg-blue-200">Nom</th>
              <th className="border-2 border-black bg-blue-200">Email</th>
              <th className="border-2 border-black bg-blue-200 w-[400px]">Administation</th>
            </thead>
      {props.map((user: any, i: any) => (
            <tbody key={i} className="h-[50px]">
              <td className="border-2 border-black">{user.firstname}</td>
              <td className="border-2 border-black">{user.lastname}</td>
              <td className="border-2 border-black">{user.email}</td>
              <div className=" flex space-x-1 m-auto w-full mt-2 text-center">
              <input type="button" className="w-[150px] m-auto cursor-pointer hover:text-blue-600" value={"modifier"}  />
              <input type="button" className=" m-auto w-[150px] cursor-pointer hover:text-red-600" value={"supprimer"}  />
              </div>
            </tbody>
        ))}
        </table>
      </div>
    )
  }


  AdminUsers.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const json = await res.json()
    return { props: json.data}
  }

  export default AdminUsers;   