import Head from "next/head";
import { NextSeo } from "next-seo";
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
      <NextSeo
        title="Dakshya Nepal"
        description="Dakshya Nepal is a company fundamentally focused on digitizing the education system of the country. We deliver the proper mechanisms to revolutionize the traditional way of learning to make it more productive and effective."
        canonical="https://www.dakshyanepal.com/"
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "Dakshya Nepal",
          url: "https://www.dakshyanepal.com/",
          title: "Dakshya Nepal",
          description:
            "Dakshya Nepal is a company fundamentally focused on digitizing the education system of the country. We deliver the proper mechanisms to revolutionize the traditional way of learning to make it more productive and effective.",
          images: [
            {
              url:
                "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Ficons%2Fdakshya_logo.e92401709d18fe9c2d832962c6339615.svg&w=256&q=75",
              width: 100,
              height: 100,
              alt: "Dakshya Nepal",
            },
          ],
          site_name: "SiteName",
        }}
      />
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://5c94b864d9b4.ngrok.io/" />
        <meta property="twitter:title" content="Dakshya Nepal" />
        <meta
          property="twitter:description"
          content="Dakshya Nepal is a company fundamentally focused on digitizing the education system of the country. We deliver the proper mechanisms to revolutionize the traditional way of learning to make it more productive and effective."
        />
        <meta
          property="twitter:image"
          content="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Ficons%2Fdakshya_logo.e92401709d18fe9c2d832962c6339615.svg&w=256&q=75"
        />

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
