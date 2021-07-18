import React from "react";
import { ProductInfoCard } from "../../../components";
import { data } from "./dummy";
const Products = () => {
  return (
    <div className="mt-32 mx-auto container space-y-24">
      {data.map((d, index) => (
        <ProductInfoCard
          key={index}
          sub_heading={d.sub_heading}
          heading={d.heading}
          description={d.description}
          list={d.list}
          order={d.order}
          color_code={d.color_code}
          illustration={d.illustration}
          antxt={d.antxt}
          animg={d.animg}
        />
      ))}
    </div>
  );
};

export default Products;
