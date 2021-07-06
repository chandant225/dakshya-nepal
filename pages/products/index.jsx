import React, { useEffect } from "react";
import { CareerBox } from "../../sections";
import { PrimaryCard } from "../../components";
import ProductsData from "./products.json";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Products() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[1.5rem] gap-[1.5rem] lg:mt-12 container mx-auto">
        {ProductsData.map((product) => (
          <PrimaryCard
            name={product.name}
            link={product.link}
            pricing={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div data-aos-duration="1000" data-aos="zoom-in">
        <CareerBox />
      </div>
    </>
  );
}
