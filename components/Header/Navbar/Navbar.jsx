import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../../Buttons";
import styled from "styled-components";
// local
import dakshyaLogo from "../../../public/icons/dakshya_logo.svg";

const Navbar = () => {
  return (
    <Wrapper className="py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={dakshyaLogo}
          alt="dakshya nepal"
          className="w-[180px] h-10"
        />
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
