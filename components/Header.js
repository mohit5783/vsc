
"use client"
import {  useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
 
  Bars3Icon,
 
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 



  return (
    <header className="text-white bg-slate-950 border-b-2 border-[#9648F6] md:p-5 relative">
      <nav
        className="m-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center ">
            <span className="sr-only">Your Company</span>
            <Image width={60} height={60} src="/logo.webp" alt="Virtualify logo" />
            <span className="bg-gradient-to-r from-[#9648F6] via-[#14B4FF] to-[#66D898] text-4xl  ms-2 bg-clip-text text-transparent mt-3">
              Virtualify
            </span>
          </a>
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
          <Link
            href="/"
            className="text-sm font-semibold leading-6text-white"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="text-sm font-semibold leading-6  text-white"
          >
            About Us
          </Link>
          <Link
            href="/"
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
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-slate-950">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={60} height={60} src="/logo.webp" alt="Virtualify logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-600"
                >
                  Home
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-600"
                >
                  About Us
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-600"
                >
                  Projects
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-slate-600"
                >
                  Contact Us
                </Link>
              </div>
            
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
   
    </header>
  );
}
