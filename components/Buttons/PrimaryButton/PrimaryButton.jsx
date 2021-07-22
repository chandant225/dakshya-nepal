import React from "react";
import Link from "next/link";

const PrimaryButton = ({ text, link, onClick }) => {
  return (
    <>
      {!link ? (
        <button
          onClick={onClick}
          className="inline-block py-3 px-5 text-center bg-black text-white font-semibold text-base rounded-full shadow border-none hover:border-4 border-black hover:text-black hover:bg-gray-50 transition-all ease-linear duration-500"
          type="submit"
        >
          {text}
        </button>
      ) : (
        <div className="inline-block py-3 px-5 text-center bg-black text-white font-semibold text-base rounded-full shadow border-none hover:border-4 border-black hover:text-black hover:bg-gray-50 transition-all ease-linear duration-500">
          <Link href={link}>{text}</Link>
        </div>
      )}
    </>
  );
};

export default PrimaryButton;
