import React from "react";
import Link from "next/link";

const SecondaryButton = ({ text, link, onClick }) => {
  return (
    <>
      {!link ? (
        <button
          onClick={onClick}
          className="inline-block py-3 px-5 text-center bg-white text-black border-2 border-black font-semibold text-base rounded-full hover:border-none hover:text-white hover:bg-black transition-all ease-linear duration-500"
          type="submit"
        >
          {text}
        </button>
      ) : (
        <div className="inline-block py-3 px-5 text-center bg-white text-black border-2 border-black font-semibold text-base rounded-full hover:border-none hover:text-white hover:bg-black transition-all ease-linear duration-500">
          <Link href={link}>{text}</Link>
        </div>
      )}
    </>
  );
};

export default SecondaryButton;
