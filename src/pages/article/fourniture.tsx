import Image from "next/image";

export default function Fourniture({ props }: any) {
    const SchoolOnly = 'scolaire';
    const SchoolFiltres = props.filter((objet: any) => {
        return objet.category === SchoolOnly;
    });

    return (
        <section>
            <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5 md:h-[928px]'>
                {
                    SchoolFiltres.map((productSchool: any) => (
                        <div key={productSchool._id} className='w-[250px] m-auto mt-5 h-[330px] rounded-[25px] border-2 border-gray-300'>
                            <Image className='m-auto mt-2' src={'/img/ecran.png'} height={0} width={150} alt='sch.jpg' />
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
            </div>
        </section>
    )
}


Fourniture.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const json = await res.json()
    return { props: json.data }
}