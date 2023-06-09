import Image from "next/image"

export default function About() {
    return <div>
        <h1 className="mb-5 text-center font-bold text-5xl mt-5">A propos</h1>
        <div className="text-center md:flex md:space-x-10 md:w-[70%] m-auto md:mt-5 md:leading-9 md:justify-center bg-neutral-100 md:p-5 rounded-[30px] font-medium pb-3 max-md:w-[95%]">
        <Image className="pt-3 md:text-left max-md:mt-3 max-md:m-auto md:w-[200px] md:h-[200px] lg:w-[250px]" src={'/img/rob1.jpg'} alt="tel" height={0} width={200} />
        <p className="md:w-[900px] max-md:text-center max-md:mt-5">
        Bienvenue sur E-Hub-Buy - votre destination de choix pour une expérience d achat en ligne exceptionnelle. 
        Nous sommes fiers d être un site e-commerce dynamique qui s efforce de vous offrir une vaste gamme de 
        produits de qualité, associée à un service clientèle remarquable.

        Chez E-Hub-Buy, nous savons que votre temps est précieux. C est pourquoi nous avons créé une plateforme conviviale, 
        intuitive et facile à naviguer, vous permettant de trouver rapidement et facilement les articles que vous recherchez. 
        Que vous souhaitiez mettre à jour votre garde-robe, équiper votre maison, ou trouver le cadeau parfait, nous avons tout 
        ce dont vous avez besoin, et bien plus encore.
        </p>
        </div>

        <div className="max-md:mt-[50px] text-center md:flex md:space-x-10 md:w-[70%] m-auto md:mt-5 md:leading-9 md:justify-center bg-neutral-100 md:p-5 rounded-[30px] font-medium pt-3 max-md:w-[95%]">
        <p className="md:w-[900px] max-md:text-center max-md:mt-5">
        Notre équipe est constamment à l affût des tendances les plus récentes et des marques de confiance, afin de vous 
        proposer une sélection soigneusement choisie de produits de haute qualité. De la mode aux produits électroniques, 
        en passant par les articles de sport, la beauté et bien d autres catégories, vous êtes assuré de trouver des articles qui correspondent à votre style et à vos besoins.

        Chez E-Hub-Buy, votre satisfaction est notre priorité absolue. Nous nous engageons à offrir un service clientèle 
        de premier ordre, accessible et réactif, pour répondre à toutes vos questions, préoccupations ou demandes d assistance. 
        Nous croyons en l importance de bâtir des relations durables avec nos clients, basées sur la confiance, l intégrité et la transparence.
        </p>
        <Image className="pb-3 md:text-left max-md:mt-3 max-md:m-auto md:w-[200px] md:h-[200px] lg:w-[250px]" src={'/img/rob.avif'} alt="tel" height={0} width={200} />
        </div>

        <div className="max-md:mt-[50px] text-center md:flex md:space-x-10 md:w-[70%] m-auto md:mt-5 md:leading-9 md:justify-center bg-neutral-100 md:p-5 rounded-[30px] font-medium pb-3 max-md:w-[95%]">
        <Image className="pt-3 md:text-left max-md:mt-3 max-md:m-auto md:w-[200px] md:h-[200px] lg:w-[250px]" src={'/img/rob2.avif'} alt="tel" height={0} width={200} />
        <p className="md:w-[900px] max-md:text-center max-md:mt-5">
        De plus, nous comprenons l importance de la sécurité lors des achats en ligne. C est pourquoi nous avons mis en place des 
        mesures de sécurité avancées pour protéger vos informations personnelles et vos transactions. Vous pouvez donc faire vos achats 
        en toute tranquillité d esprit, en sachant que vos données sont sécurisées.

        Nous nous engageons également en faveur d une expérience d achat durable. Nous encourageons la consommation responsable en
         mettant en avant des produits respectueux de l environnement et en travaillant avec des partenaires engagés dans des pratiques éthiques.

        Merci d avoir choisi E-Hub-Buy comme votre partenaire dachat en ligne. Nous sommes ravis de vous offrir une expérience de 
        magasinage pratique, fiable et gratifiante. Explorez notre site dès maintenant et laissez-nous vous accompagner dans votre parcours d achat en ligne, avec la garantie d une satisfaction totale.
        </p>
        </div>
    </div>
}