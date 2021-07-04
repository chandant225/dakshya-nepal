import React, { useEffect } from "react";
import { CareerBox } from "../../sections";
import ProductsData from "./products.json";
import Aos from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link'



export default function Products() {
  useEffect(() => {
    Aos.init({
      duration:1000
    });
  },[])
  return (
      <>
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-4 lg:px-28 px-4 lg:mt-12 ">
      {ProductsData.map((product) => (
        <Link href={product.link}>
        <a>
        <div data-aos={product.animate} className="shadow-md transition-all hover:shadow-2xl rounded-lg bg-[#FEF6E0]">
          <div className="flex flex-row justify-between p-4 bg-white">
            <div>
              <p className="text-2xl font-medium">{product.name}</p>
              <p className="text-blue-700 font-medium">{"@ NPR" + " " + product.price + "/session"}</p>
            </div>
            <span className="mt-2">
              <p>arrow</p>
            </span>
          </div>
          <img
            className="w-full h-auto object-cover hover:transform hover:skew-x-6"
            src={product.image}
            alt={product.name}
          />
        </div>
        </a>
        </Link>
        
      ))}
    </div>
    <div  data-aos-duration="1000" data-aos="zoom-in">  
        <CareerBox />
    </div>
    </>
  );
}
