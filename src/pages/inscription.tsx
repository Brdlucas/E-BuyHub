import { useRouter } from "next/router"
import { FormEventHandler, useRef } from "react"
import { Users } from "../../utils/types"

export default function Inscription() {
  // création du router pour la redirection de page après connection
  const router = useRouter()
  // les valeurs a utiliser dans les "refs"
  const firstname = useRef<HTMLInputElement>(null)
  const lastname = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  // Fonction pour créer un nouveau utilisateur
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()

    // construct new todo, create variable, check it item.current is not null to pass type checks
    let users: Users = { firstname: "", lastname: "", email: "", password: "", }
    if (null !== firstname.current && lastname.current && email.current && password.current) {
      users = { firstname: firstname.current.value, lastname: lastname.current.value, email: email.current.value, password: password.current.value }
    }

    // API request
    await fetch('http://localhost:3000/api/users', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then(response => response.json())
      .catch(error => {
        // Gestion de l'erreur
        console.error(error)
      });

    // retourne vers la page home
    router.push("/")
  }
  return (
    <div className="h-[916px]">
      <h1 className="text-center text-5xl font-bold mt-3">Inscription</h1>
      <div className="text-center mt-10  h-[721px]">
        <form onSubmit={handleSubmit} className="max-md:flex max-md:flex-col max-md:leading-[50px] w-[70%] m-auto" >
          <label htmlFor='lastname'>Nom :</label>
          <input type="text" name="lastname" id='lastname' ref={lastname} className="md:ml-3 max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[40px]" placeholder="Martin" required />
          <label htmlFor='firstname' className="md:ml-[20px]"> Prénom : </label>
          <input type="text" name="firstname" id='firstname' ref={firstname} className="max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[40px]" placeholder="Jean" required />
          <div className="flex flex-col md:w-[50%] md:m-auto md:mt-5">
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id='email' ref={email} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="exemple@gmail.com" required />
            <label htmlFor="email">Mot de passe :</label>
            <input type="password" name="password" id='password' ref={password} className=" m-auto mb-5 max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px] md:mt-5 w-[100%]" placeholder='**********' required />
            <input type="submit" className="cursor-pointer md:p-3 w-[200px] bg-purple-500 mt-5 mb-5 text-white rounded-lg max-md:w-[50%] m-auto" value="Inscription" />
          </div>
        </form>
      </div>
    </div>
  )

}