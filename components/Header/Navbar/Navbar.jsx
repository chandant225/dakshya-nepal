import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../../Buttons";
import styled from "styled-components";
import { ArrowNarrowLeftIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import Head from "next/head";

// local
import dakshyaLogo from "../../../public/icons/dakshya_logo.svg";

const Navbar = () => {
  const router = useRouter();
  const [navActive, setNavActive] = useState(null);

  const navBackground = () => {
    window.scrollY >= 75 ? setNavActive(true) : setNavActive(false);
  };
  useEffect(function mount() {
    window.addEventListener("scroll", navBackground);
  });
  const OpenNav = () => {
    document.getElementById("my_Sidebar").style.width = "100%";
  };
  const CloseNav = () => {
    document.getElementById("my_Sidebar").style.width = "0px";
  };

  return (
    <>
      <Head>
        <meta property="fb:pages" content="115400240252220" />
      </Head>
      <div
        className={`py-6 ${router.pathname !== "/" && "bg-white shadow sticky top-0 z-50"
          } ${router.pathname === "/" && navActive
            ? "sticky top-0 bg-white shadow z-50"
            : ""
          }`}
      >
        <div className="container mx-auto  justify-between items-center flex">
          <Link href="/">
            <Image
              src={dakshyaLogo}
              alt="dakshya nepal"
              className="w-[180px] h-10 cursor-pointer"
            />
          </Link>
          <MenuIcon
            style={{ zIndex: "999" }}
            onClick={() => {
              OpenNav();
            }}
            className="text-black w-8 z-50 h-8 lg:hidden"
          />
          <ul className="items-center space-x-[32px] hidden lg:flex">
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/products") && "text-yellow-500"
                }`}
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/blogs") && "text-yellow-500"
                }`}
            >
              <Link href="/blogs">Blogs</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/about") && "text-yellow-500"
                }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/careers") && "text-yellow-500"
                }`}
            >
              <Link href="/careers">Careers</Link>
            </li>
            <button className="font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300">
              ???
            </button>
            <a
              href="https://shop.dakshyanepal.com"
              target="_blank"
              className="inline-block py-3 px-5 text-center bg-black text-white font-semibold text-base rounded-full shadow border-none hover:border-4 border-black hover:text-black hover:bg-gray-50 transition-all ease-linear duration-500"
            >
              Shop Now
            </a>
          </ul>
        </div>
        <div id="my_Sidebar" className="Sidebar">
          <span
            onClick={() => {
              CloseNav();
            }}
          >
            <XIcon className="text-white w-10 float-right mr-2 mt-2" />
          </span>
          <ul className="mt-14 pl-4 space-y-3 md:space-y-0">
            <li
              onClick={() => {
                CloseNav();
              }}
              className={`font-medium text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname === "/" && "text-yellow-500"
                }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => {
                CloseNav();
              }}
              className={`font-medium text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/products") && "text-yellow-500"
                }`}
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              onClick={() => {
                CloseNav();
              }}
              className={`font-medium text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/blogs") && "text-yellow-500"
                }`}
            >
              <Link href="/blogs">Blogs</Link>
            </li>
            <li
              onClick={() => {
                CloseNav();
              }}
              className={`font-medium text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/about") && "text-yellow-500"
                }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              onClick={() => {
                CloseNav();
              }}
              className={`font-medium text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300 ${router.pathname.includes("/careers") && "text-yellow-500"
                }`}
            >
              <Link href="/careers">Careers</Link>
            </li>
            <button
              onClick={() => {
                CloseNav();
              }}
              className="font-medium py-2 text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
            >
              ???
            </button>
            <li
              onClick={() => {
                CloseNav();
              }}
              className="font-medium py-2 text-2xl text-white font-secondary hover:text-gray-500 transition-all ease-in-out duration-300"
            >
              <a
                href="https://shop.dakshyanepal.com"
                target="_blank"
                className="outline-none"
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
