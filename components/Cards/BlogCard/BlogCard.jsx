import React from "react";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <>
      {blog && (
        <Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
          <a>
            <div className="shadow-md rounded-md overflow-hidden h-80">
              <img
                src={
                  process.env.NEXT_PUBLIC_CORE_API_URL + blog.coverImage.path
                }
                className="object-cover h-48 w-full"
              />
              <div className="flex flex-row justify-between p-3">
                <p className="font-primary bg-blue-700 text-gray-50 p-1 rounded-2xl w-32 text-center">
                  {blog.category}
                </p>
                <p className="font-primary text-gray-500">
                  {`${blog.timeToRead}`} minutes read
                </p>
              </div>
              <p className="font-primary text-lg font-medium px-4 py-2 text-gray-900">
                {blog.title}
              </p>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default BlogCard;
