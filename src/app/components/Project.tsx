import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              As a passionate web developer, I bring ideas to life with
              innovative and visually striking web applications. My expertise
              includes HTML, CSS, TypeScript, JavaScript, Next.js, and Tailwind
              CSS to create dynamic, responsive websites. One notable project
              involved transforming a Figma design into a high-performance,
              interactive website. My work reflects precision, attention to
              detail, and a commitment to excellence. Explore my projects to see
              how I turn creative concepts into impactful digital solutions!
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-12">
            {/* Projects */}
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                width= {550}
                height={550}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/project/figma.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                   Portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                   Figma Design
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  &quot; A modern, responsive portfolio website crafted to display
                    creativity and professional achievements. Perfect for
                    showcasing skills and projects effectively.&quot;
                  </p>
                  <Link  target="_blank" href={"https://responsive-website-lemon.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline cursor-pointer">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                width= {5500}
                height={550}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src= "/assets/project/car2.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    PAK WHEEL
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  &quot;A car-selling website showcasing seamless design and
                    user-friendly functionality. Perfectly tailored to enhance
                    your car-shopping experience.&quot;
                  </p>
                  <Link target="_blank" href={"https://car-selling-website-sooty.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline cursor-pointer">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                width= {550}
                height={550}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src= "/assets/project/portfolio.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                   Portfolio
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  &quot;A visually appealing personal portfolio website designed to
                    highlight individuality and professional accomplishments.
                    Perfect for showcasing unique projects and talents.&quot;
                  </p>
                  <Link  target="_blank" href={"https://portfolio-ten-flame-40.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline cursor-pointer">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                width= {550}
                height={550}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/project/redstore.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    E-Commerce
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  &quot;An e-commerce website offering a wide range of shoes,
                    clothing, and essentials. Designed to provide an engaging
                    shopping experience with visually appealing content.&quot;
                  </p>
                  <Link  target="_blank" href={"#"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline cursor-pointer">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                 width= {550}
                 height={550}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src= "/assets/project/lamamia.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Digital Product
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    WEBSITE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  &quot;A cutting-edge website focused on delivering exceptional
                    design solutions for digital products. Connecting tech teams
                    worldwide to transform ideas into reality with seamless user
                    experience.&quot;
                  </p>
                  <Link href={"#"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline cursor-pointer">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                width= {550}
                height={550}
                alt='project'
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/project/fb.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                   Facebook
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                   Login-Page
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  &quot;A static clone of Facebook's login page, focusing on
                    replicating the design and functionality. Demonstrates
                    skills in front-end development with an emphasis on layout
                    precision and UI accuracy.&quot;
                  </p>
                  <Link  target="_blank" href={"https://facebook-login-page-clone-lake.vercel.app/"}>
                    <p className="leading-relaxed text-indigo-500 hover:underline cursor-pointer">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
