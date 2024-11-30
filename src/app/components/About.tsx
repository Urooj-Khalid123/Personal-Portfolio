import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
            width={600}
            height={600}
              className="object-cover object-center rounded  mx-auto w-[350px] h-[450px]"
              alt="hero"
              src={require(`../../../public/assets/picture/picture.jpg`)}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              <h4 className="title-font sm:text-xl text-3xl mb-1  font-medium text-gray-900">
                personal Information :
              </h4>
              Hi, I am Urooj Muhammad Khalid, a passionate front-end developer
              with a keen interest in creating dynamic and engaging websites.
            </p>

            <p className="mb-5 leading-relaxed">
              <h4 className="title-font sm:text-xl text-3xl mb-1  font-medium text-gray-900">
                Education :
              </h4>
              I am currently an intermediate student at SMB Fatima Jinnah
              College, where I am building a strong foundation in web
              development.
            </p>

            <p className="mb-5 leading-relaxed">
              <h4 className="title-font sm:text-xl text-3xl mb-1  font-medium text-gray-900">
                Skills & Projects :
              </h4>
              I have learned various web development technologies such as HTML,
              CSS, TypeScript, JavaScript, Next.js, and Tailwind CSS. I have
              also worked on multiple projects, which you can explore in my
              project section.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href={"assets/cv/cv.jpg"}> View CV </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
