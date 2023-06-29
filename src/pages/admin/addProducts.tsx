import { useRouter } from "next/router"
import { FormEventHandler, useRef } from "react"
import { Products } from "../../../utils/types"

interface CreateProps {
    url: string
}

export default function AdminProducts(props: CreateProps) {
  const router = useRouter();

  const name = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const price = useRef<HTMLInputElement>(null)
  const category = useRef<HTMLSelectElement>(null)
  const stock = useRef<HTMLInputElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    let product: Products = {name: "", description: "", price: 0, category: "", stock: 0}

    if (null !== name.current && description.current && price.current && category.current && stock.current) {
      product = { name: name.current.value, description: description.current.value, price: price.current.valueAsNumber, category: category.current.value, stock: price.current.valueAsNumber}
    }

    await fetch(props.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
    });
    router.push("/admin/adminProducts")
  }
  return (
    <div>
    <h1 className="text-center text-5xl font-bold mt-3">Création d un nouveaux produit</h1>
    <div className="text-center mt-10 h-[721px]">
        <form onSubmit={handleSubmit} className="max-md:flex max-md:flex-col max-md:leading-[50px] w-[70%] m-auto" >
            <div className="flex flex-col md:w-[50%] md:m-auto md:mt-5">
              <label htmlFor="name">Nom :</label>
            <input type="text" name="name" id='name' ref={name} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="Tablette" required/>
              <label htmlFor="description">description :</label>
            <input type="text" name="description" id='description' ref={description} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="Tablette portable" required/>
              <label htmlFor="price">Prix :</label>
            <input type="number" name="price" id='price' ref={price} className="mb-3 w-[100%] m-auto max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px]" placeholder="0€" required/>
              <label htmlFor="category">Catégorie :</label>
            <select className=" m-auto mb-5 max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px] md:mt-5 w-[100%]" ref={category} name="category" id="category">
              <option value="informatique">informatique</option>
              <option value="scolaire">scolaire</option>
              <option value="cuisine">cuisine</option>
              <option value="other">autre</option>
            </select>
              <label htmlFor="stock">Stock :</label>
            <input type="number" name="stock" ref={stock} className=" m-auto mb-5 max-md:w-[90%] pl-3 bg-violet-200 max-md:h-[40px] max-md:m-auto rounded-[5px] md:h-[50px] md:mt-5 w-[100%]" placeholder='20' required/>
            <input type="submit" className="cursor-pointer md:p-3 w-[200px] bg-purple-500 hover:bg-purple-400 mt-5 mb-5 text-white rounded-lg max-md:w-[50%] m-auto" value="Ajouter"></input>
            </div>
        </form>
    </div>
</div>
  )
}

export async function getStaticProps(context: any) {
    return {
      props: {
        url: process.env.API_URL_PRODUCT,
      },
    }
  }