"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "./index";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto mt-8 px-4">
        <Link href="/" className="text-2xl md:text-5xl font-semibold">
          LOGO
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hove:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hove:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.title} href={link.path} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
