import { useRouter } from "next/router"
import { FormEventHandler, useRef } from "react"
import { Users } from "../../utils/types"
import Link from "next/link"

export default function Connexion() {
  const router = useRouter()

  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
      e.preventDefault()

      let users: Users = { firstname: "", lastname: "", email: "", password: "",}
if (null !== email.current && password.current) {
  users = { firstname: "", lastname: "", email: email.current.value, password: password.current.value }
}

      await fetch('http://localhost:3000/api/users', {
          method: "get",
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      })
      router.push("/")
  }

    return (
      <div>
        <h1 className="text-center text-5xl font-bold mt-3">Connexion</h1>
        <div className="text-center mt-10 h-[721px]">
            <form onSubmit={handleSubmit} className="max-md:flex max-md:flex-col max-md:leading-[50px] w-[70%] m-auto" >
                <div className="flex flex-col md:w-[50%] md:m-auto md:mt-5">
                  <label htmlFor="email">Email :</label>
                <input type="email" name="email" id='email' ref={email} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="exemple@gmail.com" required/>
                  <label htmlFor="email">Mot de passe :</label>
                <input type="password" name="password" ref={password} id='password' className=" m-auto mb-5 max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px] md:mt-5 w-[100%]" placeholder='**********' required/>
                <input type="submit" className="cursor-pointer md:p-3 w-[200px] bg-purple-500 hover:bg-purple-400 mt-5 mb-5 text-white rounded-lg max-md:w-[50%] m-auto" value="Connexion"></input>
                </div>
            </form>
                <div className="text-center mt-8">
                    <h2>Vous êtes nouveau ? <Link className="bg-blue-200 p-2 rounded hover:bg-blue-100" href={"/inscription"}>Inscrivez-vous !</Link> </h2>
                </div>
        </div>
    </div>
    )
    }

// export async function getStaticProps(context: any) {
//     return {
//       props: {
//         url: process.env.API_URL,
//       },
//     }
//   }
