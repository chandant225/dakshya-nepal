import React, { useRef, useState } from "react";
import ProductsData from "../../pages/products/products.json";
import Link from "next/link";

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
    <div className="px-3 lg:ml-0 -ml-4 lg:mt-0 mt-6">
      <div onClick={toggleAccordion} className="flex flex-row items-center">
        <button
          className={`rounded-full lg:mb-8 lg:mt-6 px-4 py-2  font-medium focus:outline-none ${Active}`}
        >
          {props.title}
        </button>
        <img
          className={
            Rotate
              ? "w-5 h-5 -mt-1 -ml-2 object-cover transform rotate-180"
              : "w-5 h-5 object-cover -ml-2 -mt-1"
          }
          src="/chevron.png"
          alt="chevron"
        />
      </div>

      <div
        ref={content}
        className="overflow-hidden"
        style={{ maxHeight: `${Height}`, transition: "max-height 0.6s ease" }}
      >
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-8 pt-4 pb-4">
          {ProductsData.map((product, index) => (
            <Link  key={index} href={product.link}>
              <a>
                <div
                  className="flex flex-row transition-transform duration-300 ease-in-out transform hover:-translate-y-3 gap-4 items-center hover:shadow-lg shadow-md rounded-2xl overflow-hidden lg:w-[20rem] w-[25rem]"
                >
                  <img
                    className="w-[100px] h-[100px] object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                  <p className="text-lg font-medium">{product.name}</p>
                  <span>
                    <p>arrow</p>
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
