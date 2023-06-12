import Image from "next/image"

export default function Article() {
    return (
        <section>
          <h1 className="ml-[190px] mt-[20px] font-bold text-center w-[220px] text-4xl">Salle de bain</h1>
        <div className='mt-1 m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-violet-300 max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>        
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/sch.jpg'} height={0} width={150} alt='sch.jpg' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Seche-cheveux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/sch.jpg'} height={0} width={150} alt='sch.jpg' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Siceaux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/sch.jpg'} height={0} width={150} alt='sch.jpg' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Sac a dos</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <p className='rounded-[50px] hover:bg-purple-800 bg-purple-900 text-center pb-3 w-[80px] border border-black text-white m-auto text-6xl cursor-pointer'>+</p>
        </div>
      </div>
      <hr className="mt-[100px]"/>
          <h1 className="ml-[190px] mt-[50px] font-bold text-center w-[320px] text-4xl">Fourniture scolaire</h1>
        <div className='mt-1 m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-violet-300 max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>        
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/sac.webp'} height={0} width={150} alt='sac.webp' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Seche-cheveux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/sac.webp'} height={0} width={150} alt='sac.webp' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Siceaux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/sac.webp'} height={0} width={150} alt='sac.webp' />
          <hr className='mt-2 border dark;bg-gray-900'/>
          <p className='ml-1 font-bold'>Sac a dos</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <p className='rounded-[50px] hover:bg-purple-800 bg-purple-900 text-center pb-3 w-[80px] border border-black text-white m-auto text-6xl cursor-pointer'>+</p>
        </div>
      </div>
      <hr className="mt-[100px]"/>
          <h1 className="ml-[180px] mt-[50px] font-bold text-center w-[320px] text-4xl">Autre Fourniture</h1>
        <div className='mt-1 m-auto pb-5  max-md:h-[1150px] max-md:mb-5 w-[80%]  border-2 border-violet-300 max-md:flex max-md:flex-col'>
        <div className='lg:flex md:place-content-stretch max-md:h-[1070px] mb-5'>        
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/ciseaux.jpg'} height={0} width={220} alt='ciseaux.jpg' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Seche-cheveux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/ciseaux.jpg'} height={0} width={220} alt='ciseaux.jpg' />
          <hr className='mt-2 border dark:bg-gray-900'/>
          <p className='ml-1 font-bold'>Siceaux</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <div className='w-[250px] m-auto mt-5 h-[320px] rounded-[25px] border-2 border-gray-300'>
          <Image className='m-auto mt-2' src={'/img/ciseaux.jpg'} height={0} width={220} alt='ciseaux.jpg' />
          <hr className='mt-2 border dark;bg-gray-900'/>
          <p className='ml-1 font-bold'>Sac a dos</p>
          <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='text-center mt-2'>
          <input type="submit" value="En savoir plus" className='hover:bg-purple-800 text-center bg-purple-900 text-white rounded-[30px] h-[50px] w-[70%] m-auto cursor-pointer'/>
          </div>
        </div>
        <p className='rounded-[50px] hover:bg-purple-800 bg-purple-900 text-center pb-3 w-[80px] border border-black text-white m-auto text-6xl cursor-pointer'>+</p>
        </div>
      </div>
      </section>
    )
}