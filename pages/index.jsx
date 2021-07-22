import Head from "next/head";
import {
  HomeLanding,
  GoalInfo,
  ProductList,
  Features,
  Blogs,
  CareerBox,
  Clients,
  Testimonials,
  Subscribe,
  ProductsInfo,
} from "../sections";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Head>
          <title>Home | Dakshya Nepal</title>
        </Head>
        <HomeLanding />

        <div className="small-ball"></div>
        <div className="large-ball"></div>

        <GoalInfo />
        <ProductList />
        <Features />
        <ProductsInfo />
        <Blogs />
        <CareerBox />
        <Clients />
        <Testimonials />
        <Subscribe />
      </div>
    </>
  );
}
