import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../Buttons";
import styled from "styled-components";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
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
  return (
    <Wrapper
      className={`py-6 ${
        router.pathname !== "/" && "bg-white shadow sticky top-0 z-50"
      } ${
        router.pathname === "/" && navActive
          ? "sticky top-0 bg-white shadow z-50"
          : ""
      }`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, #FFFBEF 0%, rgba(254, 250, 237, 0) 87.5%)",
      }}
    >
      <div className="container mx-auto  justify-between items-center hidden lg:flex">
        <Link href="/">
          <Image
            src={dakshyaLogo}
            alt="dakshya nepal"
            className="w-[180px] h-10"
            className="cursor-pointer"
          />
        </Link>
        <ul className="flex items-center space-x-[32px]">
          <li className="font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300">
            <Link href="/products">Products</Link>
          </li>
          <li className="font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300">
            <Link href="/careers">Careers</Link>
          </li>
          <button className="font-medium text-base text-black font-secondary hover:text-gray-500 transition-all ease-in-out duration-300">
            क
          </button>
          <PrimaryButton text="Contact Us" to="/contact" />
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div``;
