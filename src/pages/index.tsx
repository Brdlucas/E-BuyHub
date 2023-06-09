import React, { FormEventHandler, useRef } from 'react'
import Image from 'next/image'
import { newsLetters } from '../../utils/types'
import { useRouter } from "next/router"

interface CreateProps {
  url: string
}

export default function Index(props: CreateProps) {

  const router = useRouter()

  const email = useRef<HTMLInputElement>(null)
  

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    let letter: newsLetters = {email: ""};
    if (null !== email.current) {
      letter = {email: email.current.value}
    }

    await fetch(props.url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(letter),
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
    })
    router.push("/")
  }

  return (
    <section className="mt-5">
      <div className=' m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-black max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>        
        <div className='bg-slate-100 w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-neutral-500'>
          <Image className='m-auto mt-2' src={'/img/sch.jpg'} height={0} width={150} alt='sch.jpg' />
          <hr className='mt-2 border border-neutral-600'/>
          <p className='ml-1 font-bold'>Seche-cheveux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="text" value="En savoir plus" className='text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='bg-slate-100 w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-neutral-500'>
          <Image className='m-auto mt-2' src={'/img/ciseaux.jpg'} height={0} width={220} alt='ciseaux.jpg' />
          <hr className='mt-2 border border-neutral-600'/>
          <p className='ml-1 font-bold'>Siceaux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="text" value="En savoir plus" className='text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='bg-slate-100 w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-neutral-500'>
          <Image className='m-auto mt-2' src={'/img/sac.webp'} height={0} width={150} alt='sch.jpg' />
          <hr className='mt-2 border border-neutral-600'/>
          <p className='ml-1 font-bold'>Sac a dos</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="text" value="En savoir plus" className='text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        </div>
        <p className='rounded-[50px] bg-purple-900 text-center pb-3 w-[80px] mb-5 border border-black text-white m-auto text-6xl cursor-pointer'>+</p>
      </div>
      <p className=' w-[70%] m-auto mt-5 leading-9 justify-center bg-neutral-100 p-5 rounded-[30px] font-medium'>
      Découvrez une expérience exclusive, rejoignez notre communauté et ne manquez plus jamais les dernières actualités, offres spéciales et contenus 
      captivants ! Inscrivez-vous dès maintenant à notre newsletter et plongez dans un monde d informations passionnantes.

      Notre newsletter est conçue spécialement pour les esprits curieux comme le vôtre. Vous recevrez régulièrement des articles soigneusement sélectionnés, 
      des conseils pratiques, des tutoriels, des analyses approfondies et bien plus encore. Que vous soyez passionné par les voyages, la technologie, la mode, 
      la santé, ou tout autre domaine, nous avons quelque chose de fascinant à vous offrir.

      En vous inscrivant, vous rejoindrez une communauté dynamique composée de personnes partageant les mêmes intérêts et d experts passionnés. Vous aurez 
      également l opportunité de participer à des discussions enrichissantes, de poser des questions directement aux experts et de partager vos propres connaissances.

      Mais ce n est pas tout ! En tant qu abonné privilégié, vous bénéficierez d avantages exclusifs tels que des réductions spéciales, des invitations à des 
      événements VIP, des concours passionnants et bien d autres surprises encore. Nous souhaitons récompenser votre engagement et votre fidélité en vous offrant des 
      avantages uniques.

      Rejoignez-nous dès maintenant en remplissant simplement le formulaire d inscription ci-dessous. C est rapide, facile et totalement gratuit ! Ne manquez
       pas cette occasion de rester informé(e) et de vous connecter à une communauté passionnée.

      Inscrivez-vous à notre newsletter dès aujourd hui et laissez-nous vous emmener dans un voyage extraordinaire au cœur de l information. Soyez au courant 
      de tout ce qui compte pour vous.
      </p>
      <form onSubmit={handleSubmit} className='text-center'>
        <input name="email" id="email" type="email" placeholder="email" ref={email} className='bg-purple-950 m-auto text-white pl-3 w-[50%] mt-5 max-md:w-[95%] h-[50px] mb-5 rounded-[20px]'></input>
        <input type="submit" value="Envoyez"  className='font-bold mb-5 bg-purple-900 ml-5 w-[10%] max-md:w-[50%] h-[50px] text-white rounded-[30px] hover:bg-purple-800 cursor-pointer'></input>
      </form>
      </section>

  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      url: process.env.API_URL_LETTER,
    },
  }
}

