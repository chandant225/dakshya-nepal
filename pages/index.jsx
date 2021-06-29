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
      <Features />
      <Blogs />
      <CareerBox />
      <Clients />
      <Testimonials />
      <Subscribe />
    </>
  );
}
