import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import htmr from "htmr";
import styled from "styled-components";
import { BlogDetailsSkeleton } from "../../components";

import Head from "next/head";
const paragraph = styled.p`
  padding: 10px 1px;
`;

const transform = {
  p: paragraph,
  img: (node) => (
    <img
      src={process.env.NEXT_PUBLIC_CORE_API_URL + node.src}
      width="100%"
      alt={node.alt}
    />
  ),
};
const Slug = () => {
  const router = useRouter();
  const [BlogData, setBlogData] = useState("");
  const [loading, setloading] = useState(true);
  const { slug } = router.query;
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_CORE_API_URL}/api/collections/get/blog?filter[slug]=${slug}`
    )
      .then((Response) => Response.json())
      .then((resultdata) => {
        setBlogData(resultdata.entries);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  const data = BlogData[0];

  const GoBack = () => {
    router.push("/blogs");
  };

  return (
    <div>
      {loading ? (
        <div className="lg:px-52 px-4">
          <BlogDetailsSkeleton />
        </div>
      ) : (
        <>
          {data && (
            <div className="lg:px-52 px-4">
              <Head>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
                <title>{data.title}</title>
                <meta name="description" content={data.excerpt} />
                <link
                  rel="cononical"
                  href={`https://65fa29eb9309.ngrok.io/blogs/${slug}`}
                />
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.excerpt} />
                <meta
                  property="og:url"
                  content={`https://65fa29eb9309.ngrok.io/blogs/${slug}`}
                />
                <meta
                  property="og:image"
                  content={
                    process.env.NEXT_PUBLIC_CORE_API_URL + data.coverImage.path
                  }
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
              </Head>
              <div className="flex flex-row lg:gap-2 gap-2 py-4">
                <span
                  onClick={() => {
                    GoBack();
                  }}
                >
                  <p className="cursor-pointer text-lg px-2">
                    <i className="fas fa-arrow-left"></i>
                  </p>
                </span>
                <p className="text-gray-500 font-medium ">
                  {dayjs.unix(data._created).format("DD MMMM YYYY")}
                </p>
                <p className="text-gray-500 font-medium">@DakshyaNepal</p>
                <p className="text-gray-500 font-medium lg:block hidden">
                  {data.timeToRead + " " + "mins read"}
                </p>
              </div>
              <p className="text-3xl font-medium pb-4">{data.title}</p>
              <img
                className="object-cover w-full lg:h-[30rem]"
                src={
                  process.env.NEXT_PUBLIC_CORE_API_URL + data.coverImage.path
                }
                alt={data.title}
              />
              <p className="text-xl py-8 lg:tracking-normal tracking-tighter">
                {htmr(data.content, { transform })}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Slug;
