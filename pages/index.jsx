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

{
  /* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-39BD49RTJE"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            dataLayer.push(arguments) gtag('js', new Date()); gtag('config',
            'G-39BD49RTJE');
          </script> */
}

export default function Home() {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <div className="overflow-hidden">
        {/* <Head>
          <title>Home | Dakshya Nepal</title>
        </Head> */}
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
