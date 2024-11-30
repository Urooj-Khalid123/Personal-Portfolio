import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-gray-50">
      <>
  
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 UROOJ KHALID
       
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link target="_blank" href={"https://www.facebook.com/people/Urooj-Khalid/pfbid02JK7DWHzhRjatPb2QaVEd7W13R3ewMSwrgCz4KoR9ivUhSFZEo6CYGXnLVCXmJs9Bl/?mibextid=ZbWKwL"} className="text-gray-500 hover:text-blue-500">
        <FaFacebookF className="text-xl" />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/code_with_urooj/#"} className="ml-3 text-gray-500 hover:text-pink-600">
        <FaInstagram className="text-xl"/>
        </Link>
        <Link target="_blank" href={"https://www.linkedin.com/in/urooj-khalid/"} className="ml-3 text-gray-500 hover:text-blue-500 ">
        <FaLinkedinIn className="text-xl" />
        </Link>
        <Link target="_blank" href={"https://github.com/Urooj-Khalid123"} className="ml-3 text-gray-500 hover:text-gray-900">
        <FaGithub className="text-xl"/>
        </Link>
      </span>
    </div>
  </footer>
</>

    </div>
  )
}

export default Footer
