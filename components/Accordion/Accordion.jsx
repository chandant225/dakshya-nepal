import React, { useRef, useState } from "react";
import ProductsData from "../../pages/products/products.json";
import Link from "next/link";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Accordion = (props) => {
  const [Active, setActive] = useState("");
  const [Height, setHeight] = useState("0px");
  const [Rotate, setRotate] = useState(false);
  const content = useRef(null);

  function toggleAccordion() {
    setActive(Active === "" ? "text-black" : "");
    setHeight(
      Active === "text-black" ? "0px" : `${content.current.scrollHeight}px`
    );
    if (Rotate == false) {
      setRotate(true);
    } else {
      setRotate(false);
    }
  }
  return (
    <div className="w-full lg:shadow-md">
      <div onClick={toggleAccordion} className="flex flex-row items-center">
        <button
          className={`rounded-full text-lg lg:ml-0 -ml-2 lg:mb-8 lg:mt-6 px-4 py-2 font-medium focus:outline-none ${Active}`}
        >
          {props.title}
        </button>
        <img
          className={
            Rotate
              ? "w-4 h-3 -mt-1 -ml-2 object-contain transform rotate-180"
              : "w-4 h-3 object-contain -ml-2 -mt-1"
          }
          src="/icons/down.svg"
          alt="chevron"
        />
      </div>

      <div
        ref={content}
        className="overflow-hidden"
        style={{ maxHeight: `${Height}`, transition: "max-height 0.6s ease" }}
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-8 pt-4 pb-4 lg:pl-6">
          {ProductsData.map((product, index) => (
            <Link key={index} href={product.link}>
              <a>
                <div className="flex flex-row justify-around transition-transform duration-300 ease-in-out transform hover:-translate-y-3 gap-4 items-center hover:shadow-lg border-2 overflow-hidden lg:w-[20rem] w-full">
                  <img
                    className="w-[100px] h-[100px] object-contain"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="text-lg font-medium">{product.name}</p>
                  <span>
                    <ArrowNarrowRightIcon className="w-6 h-6 text-gray-900" />
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
