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
              className="border-4 border-blue-700 rounded-md py-2 px-4 focus:outline-none text-xl text-blue-700 font-bold"
            >
              Load More Blogs
            </button>
          </center>
        </div>
      )}
    </>
  );
}
