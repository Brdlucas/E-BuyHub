import Image from "next/image"
import Link from "next/link";

export default function Article({ props }: any) {
  const categoryOnly = 'informatique';
  const CategoryFiltres = props.filter((objet: any) => {
    return objet.category === categoryOnly;
  });

  const SchoolOnly = 'scolaire';
  const SchoolFiltres = props.filter((objet: any) => {
    return objet.category === SchoolOnly;
  });

  const OtherOnly = 'autre';
  const OtherFiltres = props.filter((objet: any) => {
    return objet.category === OtherOnly;
  });

  return (
    <section>
      <h1 className="md:ml-[190px] max-md:m-auto mt-[20px] font-bold text-center w-[220px] text-4xl">Informatique</h1>
      <div className='mt-1 m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-violet-300 max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>
          {
            CategoryFiltres.slice(2).map((productInfo: any) => (
              <div key={productInfo._id} className='w-[250px] m-auto mt-5 h-[330px] rounded-[25px] border-2 border-gray-300'>
                <Image className='m-auto mt-2' src={'/img/ecran.png'} height={0} width={150} alt='sch.jpg' />
                <hr className='mt-2 border dark:bg-gray-900' />
                <p className='ml-1 font-bold max-md:'>{productInfo.name}</p>
                <p className='ml-2'>{productInfo.category}</p>
                <p className='ml-2'>{productInfo.price} €</p>
                <p className='ml-2'>Plus que : {productInfo.stock} disponible</p>
                <div className='text-center mt-2'>
                  <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer' />
                </div>
              </div>
            ))
          }
          <Link href={'/article/informatique'} className='rounded-[50px] hover:bg-purple-800 bg-purple-900 text-center pb-3 w-[80px] border border-black text-white m-auto text-6xl cursor-pointer'>+</Link>
        </div>
      </div>
      <hr className="mt-[100px]" />
      <h1 className="md:ml-[190px] max-md:m-auto mt-[50px] font-bold text-center w-[320px] text-4xl">Fourniture scolaire</h1>
      <div className='mt-1 m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-violet-300 max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>
          {
            SchoolFiltres.slice().map((productSchool: any) => (
              <div key={productSchool._id} className='w-[250px] m-auto mt-5 h-[330px] rounded-[25px] border-2 border-gray-300'>
                <Image className='m-auto mt-2' src={'/img/stylo.png'} height={0} width={150} alt='sch.jpg' />
                <hr className='mt-2 border dark:bg-gray-900' />
                <p className='ml-1 font-bold max-md:'>{productSchool.name}</p>
                <p className='ml-2'>{productSchool.category}</p>
                <p className='ml-2'>{productSchool.price} €</p>
                <p className='ml-2'>Plus que : {productSchool.stock} disponible</p>
                <div className='text-center mt-2'>
                  <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer' />
                </div>
              </div>
            ))
          }
          <Link href={'/article/fourniture'} className='rounded-[50px] hover:bg-purple-800 bg-purple-900 text-center pb-3 w-[80px] border border-black text-white m-auto text-6xl cursor-pointer'>+</Link>
        </div>
      </div>
      <hr className="mt-[100px]" />
      <h1 className="md:ml-[180px] max-md:m-auto mt-[50px] font-bold text-center w-[320px] text-4xl">Autre Fourniture</h1>
      <div className='mt-1 m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-violet-300 max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>
          {
            OtherFiltres.slice().map((productOther: any) => (
              <div key={productOther._id} className='w-[250px] m-auto mt-5 h-[330px] rounded-[25px] border-2 border-gray-300'>
                <Image className='m-auto mt-2' src={'/img/other.jpg'} height={0} width={150} alt='sch.jpg' />
                <hr className='mt-2 border dark:bg-gray-900' />
                <p className='ml-1 font-bold max-md:'>{productOther.name}</p>
                <p className='ml-2'>{productOther.category}</p>
                <p className='ml-2'>{productOther.price} €</p>
                <p className='ml-2'>Plus que : {productOther.stock} disponible</p>
                <div className='text-center mt-2'>
                  <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer' />
                </div>
              </div>
            ))
          }
          <Link href={'/article/autre'} className='rounded-[50px] hover:bg-purple-800 bg-purple-900 text-center pb-3 w-[80px] border border-black text-white m-auto text-6xl cursor-pointer'>+</Link>
        </div>
      </div>
    </section>
  )
}

Article.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const json = await res.json()
  return { props: json.data }
}