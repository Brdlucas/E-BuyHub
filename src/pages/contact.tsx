import { FormEventHandler, useRef } from 'react'
import { Contacts } from '../../utils/types'
import { useRouter } from "next/router"

export default function Contact() {

const router = useRouter()

const firstname = useRef<HTMLInputElement>(null)
const lastname = useRef<HTMLInputElement>(null)
const email = useRef<HTMLInputElement>(null)
const title = useRef<HTMLInputElement>(null)
const isdescription = useRef<HTMLInputElement>(null)


const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
  event.preventDefault();


  let iscontact: Contacts = { firstname: "", lastname: "", email: "", title: "", isdescription: "",}
  if (null !== firstname.current && lastname.current && email.current && title.current && isdescription.current) {
    iscontact = { firstname: firstname.current.value, lastname: lastname.current.value, email: email.current.value, title: email.current.value, isdescription: isdescription.current.value }
  }


  await fetch('http://localhost:3000/api/contacts', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(iscontact),
  })
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    });


  router.push("/")
}
return (
    <div>
        <h1 className="text-center text-5xl font-bold mt-3">Contact</h1>
        <div className="text-center mt-10 h-[721px]">
            <form  onSubmit={handleSubmit} className="max-md:flex max-md:flex-col max-md:leading-[50px] w-[70%] m-auto" >
                <label htmlFor='lastname'>Nom :</label>
                <input type="text" name="lastname" id='lastname' ref={lastname} className="md:ml-3 max-md:w-[90%] pl-3 bg-violet-200 text-white max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[40px]" placeholder="Martin" required/>
                <label htmlFor='firstname' className="md:ml-[20px]"> Prénom : </label>
                <input type="text" name="firstname" id='firstname' ref={firstname} className="max-md:w-[90%] pl-3 bg-violet-200 text-white max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[40px]" placeholder="Jean" required/>
                <div className="flex flex-col md:w-[50%] md:m-auto md:mt-5">
                  <label htmlFor="email">Email :</label>
                <input type="email" name="email" id='email' ref={email} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 text-white max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="exemple@gmail.com" required/>
                  <label htmlFor="email">Titre :</label>
                <input type="text" name="title" id='title' ref={title} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 text-white max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="Problème | Demande" required/>
                  <label htmlFor="email">Description :</label>
                <input type="text" name="description" id='description' ref={isdescription} className="m-auto mb-5 max-md:w-[90%] pl-3 bg-violet-200 text-white max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[250px] md:mt-5 w-[100%]" required/>
                <input type="submit" className="cursor-pointer md:p-3 w-[200px] hover:bg-purple-400 bg-purple-500 mt-5 mb-5 text-white rounded-lg max-md:w-[50%] m-auto" value="Envoyez" />
                </div>
            </form>
        </div>
    </div>
    )

}

      