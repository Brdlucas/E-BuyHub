import { useRouter } from "next/router"
import { FormEvent, FormEventHandler, useRef } from "react"
import { Users } from "../../utils/types"


// Définit le props pour le connecter au .env situé en bas
interface CreateProps {
  url: string
}

export default function Inscription(props: CreateProps) {
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
  let users: Users = { firstname: "", lastname: "", email: "", password: "",}
  if (null !== firstname.current && lastname.current && email.current && password.current) {
    users = { firstname: firstname.current.value, lastname: lastname.current.value, email: email.current.value, password: password.current.value }
  }

  // Make the API request
  await fetch(props.url, {
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

  // after api request, push back to main page
  router.push("/")
}
return (
    <div>
            <h1 className="text-center text-5xl font-bold mt-3">Inscription</h1>
            <div className="flex justify-center mt-3">
                <form  onSubmit={handleSubmit} className="w-5/6 mt-10 text-center" >
                    <label htmlFor='lastname'>Nom :</label>
                    <input type="text" name="lastname" id='lastname' ref={lastname} className="form-input mx-5 text-center px-4 py-3 bg-violet-200 rounded-lg" placeholder="Martin"></input>
                    <label htmlFor='firstname'>Prénom :</label>
                    <input type="text" name="firstname" id='firstname' ref={firstname} className="form-input mx-5 text-center px-4 py-3 bg-violet-200 rounded-lg" placeholder="Jean"></input>
                    <br />
                    <label htmlFor='email'>Email :</label>
                    <input type="email" name="email" id='email' ref={email} className="form-input w-1/3 px-4 mx-5 mt-5 py-3 bg-violet-200 rounded-lg" placeholder="exemple@gmail.com"></input>
                    <br />
                    <label htmlFor='password'>MDP :</label>
                    <input type="password" name="password" id='password' ref={password} className="form-input w-1/3 px-4 mx-5 mt-5 py-3 bg-violet-200 rounded-lg" placeholder='**********' />
                    <br />
                    <input type="submit" className="bg-purple-500 mt-5 text-white rounded-lg p-3" value="Inscription"></input>
                </form>
            </div>
        </div>
  )


  
}

// exporter getStaticProps pour fournir l'URL de l'API au composant
export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL,
    },
  }
}