import React from 'react'
import SkeletonElement from './SkeletonElement'

const BlogDetailsSkeleton = () => {
    return (
        <div className="details-wrapper pt-8">
             <div className="flex flex-row flex-start gap-2">
              <SkeletonElement type={'read'} />
              <SkeletonElement type={'read'} />
              <SkeletonElement type={'read'} />
             </div>
             <SkeletonElement type={'title'} />
             <div className="overflow-hidden lg:h-[auto] h-[15rem]">
             <SkeletonElement type={'image'} />
             </div>
             <SkeletonElement type={'text'} />
             <SkeletonElement type={'text'} />
             <SkeletonElement type={'text'} />
             <SkeletonElement type={'text'} />
             <SkeletonElement type={'text'} />
             <SkeletonElement type={'text'} />
        </div>
    )
}

export default BlogDetailsSkeleton
