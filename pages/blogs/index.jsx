import React, { useEffect, useState } from "react";
import { BlogCard } from "../../components";
import { BlogSkeleton } from "../../components";

import { NextSeo } from "next-seo";

export default function BlogsPage() {
  const [BlogData, setBlogData] = useState("");
  const [loading, setLoading] = useState(true);
  const [itemToshow, setitemToshow] = useState(6);
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_CORE_API_URL}/api/collections/get/blog?sort[_created]=-1`
    )
      .then((response) => response.json())
      .then((resultData) => {
        setLoading(false);
        setBlogData(resultData.entries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const loadmore = () => {
    setitemToshow((prevValue) => prevValue + 3);
  };
  const DisplayBlogs = BlogData.slice(0, itemToshow);
  return (
    <>
      {loading ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 sm:px-2 lg:gap-4 gap-2 px-4 pt-4 lg:px-20">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <BlogSkeleton key={n} />
          ))}
        </div>
      ) : (
        <div>
          <NextSeo title="Blogs" />
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:px-2 lg:gap-12 gap-y-8 lg:px-20 px-4 pt-8">
            {DisplayBlogs &&
              DisplayBlogs.map((blog, index) => (
                <BlogCard blog={blog} key={index} />
              ))}
          </div>
          <center className="py-5">
            <button
              onClick={() => {
                loadmore();
              }}
              className="inline-block py-3 px-5 text-center bg-black text-white font-semibold text-base rounded-full shadow border-none hover:border-4 border-black hover:text-black hover:bg-gray-50 transition-all ease-linear duration-500"
            >
              Load More Blogs
            </button>
          </center>
        </div>
      )}
    </>
  );
}
