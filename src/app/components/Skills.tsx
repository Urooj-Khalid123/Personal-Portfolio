import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'

const Skills = () => {
  return (
    <div id='Skills'>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
       My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-12">
    {/* HTML Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-200 rounded-xl'>
                <div className='absolute h-1 w-[100%] bg-indigo-500'></div>
            </div>
            <p className='font-bold text-indigo-500 text-right rounded-xl'>100%</p>           
          </div>
        </div>
      </div>
     
     {/* CSS Skill */}
     <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-200 rounded-xl'>
                <div className='absolute h-1 w-[90%] bg-indigo-500'></div>
            </div>
            <p className='font-bold text-indigo-500 text-right rounded-xl'>90%</p>           
          </div>
        </div>
      </div>
 
       {/* Javascript/Typescript Skill */}
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            JavaScript / TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-200 rounded-xl'>
                <div className='absolute h-1 w-[80%] bg-indigo-500'></div>
            </div>
            <p className='font-bold text-indigo-500 text-right rounded-xl'>80%</p>           
          </div>
        </div>
      </div>

      {/* Next.js Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
           Next.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-200 rounded-xl'>
                <div className='absolute h-1 w-[80%] bg-indigo-500'></div>
            </div>
            <p className='font-bold text-indigo-500 text-right rounded-xl'>80%</p>           
          </div>
        </div>
      </div>


      {/* Tailwind Skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Tailwind CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className=' relative h-1 w-full bg-gray-200 rounded-xl'>
                <div className='absolute h-1 w-[85%] bg-indigo-500'></div>
            </div>
            <p className='font-bold text-indigo-500 text-right rounded-xl'>85%</p>           
          </div>
        </div>
      </div>

       

    </div>
  </div>
</section>

      
    </div>
  )
}

export default Skills
