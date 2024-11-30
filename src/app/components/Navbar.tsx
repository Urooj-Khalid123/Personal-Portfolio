import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a
           className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href={"https://www.instagram.com/code_with_urooj/#"} target="_blank">
            <Image
              className="w-[50px] rounded-full"
              src={require("../../../public/assets/picture/logo.jpg")}
              alt="Logo"
              width={100}
              height={100}
            />
            </Link>
            <span className="ml-3 text-xl">UROOJ KHALID</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <a href="/assets/cv/cv.jpg">
            <button className="hover:text-blue-600 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2 " />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
