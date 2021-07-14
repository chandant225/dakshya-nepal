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
      <Head>
        <title>Home | Dakshya Nepal</title>
      </Head>
      <HomeLanding />
      <GoalInfo />
      <ProductList />
      {/* <Features /> */}
      <ProductsInfo />
      <Blogs />
      <CareerBox />
      <Clients />
      <Testimonials />
      <Subscribe />
    </>
  );
}
