"use client"
import Image from 'next/image'
import Link from 'next/link';


const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font bg-fixed bg-cover  bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />

      </h1>
      <div className='w-[100px] h-[2px] bg-gray-700'></div>
      <p className="mb-8 leading-relaxed">
      &quot;Hello, my name is Urooj, and I am a web developer skilled in HTML, CSS, TypeScript, JavaScript, and Next.js. I have worked on projects using these technologies, including building dynamic and responsive websites. I am passionate about creating seamless user experiences and continuously enhancing my skills in modern web development.&quot;
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact Me
        </button>
        </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      width={500}
      height={500}
        className="object-cover object-center  mx-auto w-[20rem] rounded"
        alt="hero"
        src="../../../public/assets/picture/picture.jpg"
      />
    </div>
  </div>
</section>

   
  )
}

export default Hero
