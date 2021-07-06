import React from "react";
import SkeletonElement from "./SkeletonElement";

const BlogSkeleton = () => {
  return (
    <div className="bg-gray-50 animate-pulse">
      <div className="overflow-hidden h-[10rem]">
        <SkeletonElement type={"image"} />
      </div>
      <div className="flex flex-row justify-between">
        <SkeletonElement type={"read"} />
        <SkeletonElement type={"read"} />
      </div>
      <SkeletonElement type={"title"} />
    </div>
  );
};

export default BlogSkeleton;
