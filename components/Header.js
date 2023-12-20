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
<<<<<<< HEAD
    <header className="text-white bg-slate-950 p-5">
=======
    <header className="text-white bg-slate-950 border-b-2 border-[#9648F6] lg:p-5 relative">
>>>>>>> b314977 (breakpoints changed)
      <nav
        className="flex items-center justify-between"
        aria-label="Global Header Navigation"
      >
<<<<<<< HEAD
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
=======
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center ">
            <span className="sr-only">Your Company</span>
            <Image
              width={60}
              height={60}
              src="/logo.webp"
              alt="Virtualify logo"
            />
            <span className="bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] text-4xl  ms-2 bg-clip-text text-transparent mt-3">
              Virtualify
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6text-white">
            Home
          </Link>
          <Link
            href="/aboutus"
            className="text-sm font-semibold leading-6  text-white"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="text-sm font-semibold leading-6  text-white"
          >
            Projects
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Link
            className="group inline-block rounded-full bg-gradient-to-r from-[#3EC7E7] to-[#5179F5] p-[2px] focus:outline-none focus:ring "
            href="/contactus"
          >
            <span className="block rounded-full px-8 py-3 text-sm font-medium group-hover:bg-transparent text-white">
              Contact us <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden transition"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-slate-950">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={60}
                height={60}
                src="/logo.webp"
                alt="Virtualify logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
>>>>>>> b314977 (breakpoints changed)
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
