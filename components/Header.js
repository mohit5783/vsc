import Image from "next/image";
import Link from "next/link";

import logo from "../public/logo.webp";
import { AiOutlineProject } from "react-icons/ai";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const NavLinks = [
  {
    label: "Home",
    href: "/",
    key: "home",
    icon: <FaHome className="md:text-xl text-3xl" />,
  },
  {
    label: "About Us",
    href: "/aboutus",
    key: "about",
    icon: <FaInfoCircle className="md:text-xl text-3xl" />,
  },
  {
    label: "Projects",
    href: "/projects",
    key: "projects",
    icon: <AiOutlineProject className="md:text-xl text-4xl" />,
  },
  {
    label: "Contact",
    href: "/contactus",
    key: "contact",
    icon: <MdAlternateEmail className="md:text-xl text-4xl" />,
  },
];

export default function Header() {
  return (
    <header className="p-5">
      <nav
        className="flex items-center justify-between"
        aria-label="Global Header Navigation"
      >
        <Link href="/" className="flex items-center ">
          <span className="sr-only">
            Virtualify Software Consultancy Pvt. Ltd.
          </span>
          <Image
            width={64}
            height={64}
            src={logo}
            alt="Virtualify Software Consultancy - Logo"
          />
          <span className="hidden lg:block bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] bg-clip-text text-transparent text-center justify-center text-2xl">
            <p>Virtualify</p>
            <p className="-m-3">Software</p>
            <p className="text-lg">Consultancy</p>
          </span>
        </Link>
        <div className="flex w-full gap-2 md:gap-4 sm:justify-center justify-end">
          {NavLinks.map((link) => (
            <Link
              className="flex items-center gap-2 text-[#66D898]"
              href={link.href}
              key={link.key}
              aria-label={link.label}
            >
              {link.icon}
              <span className="relative group">
                <span className="md:flex hidden text-lg">{link.label}</span>
                <span className="h-[1px] inline-block w-0 bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300">
                  &nbsp;
                </span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          className="hidden lg:block rounded-full bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] p-3 text-center w-[250px]"
          aria-label="Get a Quote button"
          href="/contactus"
        >
          You need an App?
        </Link>
      </nav>
    </header>
  );
}
