import React, { useState, useEffect } from "react";
import { RssIcon } from "@heroicons/react/solid";
import { BlogCard, BlogSkeleton } from "../../../components";

const Blogs = () => {
  const [BlogData, setBlogData] = useState("");
  const [loading, setLoading] = useState(true);
  const [itemToshow, setitemToshow] = useState(3);
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
  const DisplayBlogs = BlogData.slice(0, itemToshow);
  return (
    <div className="mt-32 container mx-auto flex flex-col items-center">
      <div
        className="relative flex items-center shadow-lg justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500"
        style={{
          backgroundImage:
            "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
        }}
      >
        <RssIcon className="w-8 h-8 text-white" />
        <div
          className="absolute w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full -top-4 -right-4"
          style={{
            backgroundImage:
              "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
          }}
        />
      </div>
      <p className="text-lg font-semibold text-center mt-5 text-gray-700">
        Dakshya Blogs
      </p>
      <p className="mt-5 text-[32px] font-semibold text-center text-gray-900">
        Latest blogs from us
      </p>
      <div className="w-full">
        {loading ? (
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 pt-4">
            {[1, 2, 3].map((n) => (
              <BlogSkeleton key={n} />
            ))}
          </div>
        ) : (
          <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 sm:px-2 lg:gap-12 gap-y-8 pt-8">
              {DisplayBlogs &&
                DisplayBlogs.map((blog, index) => (
                  <BlogCard blog={blog} key={index} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
