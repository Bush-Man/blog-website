import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="logo" w={32} h={32} />
        <span>blogweb</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-2xl font-bold"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        {/* mobile menu list */}
        <div
          className={`w-full h-screen flex flex-col  gap-8 items-center justify-center  absolute top-16  ${
            open ? "-right-0" : "-right-[100%]"
          } transition-all ease-in-out`}
        >
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">Most Popular</Link>
          <Link href="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* desktop menu */}
      <div className="hidden md:flex gap-8 xl:gap-12 font-medium">
        <Link href="/">Home</Link>
        <Link href="/">Trending</Link>
        <Link href="/">Most Popular</Link>
        <Link href="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
