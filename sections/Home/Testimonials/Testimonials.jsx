import React from "react";
import { TestimonialCard } from "../../../components";
import Slider from "react-slick";
import school_image from "../../../public/illustrator/school_images.png";
import { UserGroupIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Testimonials = () => {
  const settings = {
    vertical: true,
    infinite: true,
    speed: 300,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };
  return (
    <div className="container mx-auto mt-24 flex flex-col justify-center items-center">
      <div className="flex items-center shadow-lg justify-center w-20 h-20 rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-3xl bg-gradient-to-tr from-yellow-300 to-yellow-500">
        <UserGroupIcon className="w-8 h-8 text-white" />
      </div>
      <p className="text-lg font-semibold text-center mt-5 text-gray-700">
        Testimonial
      </p>
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Our Happy Customers
      </p>
      <div className="">
        <div className="absolute left-0">
          <Image src={school_image} alt="" />
        </div>
        <Slider {...settings} className="py-3 px-3 relative">
          <TestimonialCard
            name="John Doe"
            description="Eu platea volutpat ornare aliquam quam quis auctor orci morbi imperdiet nisi pellentesque sit sed ultrices sem habitant sed in vulputate nulla odio id pharetra massa donec tincidunt ullamcorper ac felis massa porttitor..."
            image="https://images.unsplash.com/photo-1624850667288-31fde0ec04bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
          <TestimonialCard
            name="John Doe"
            description="Eu platea volutpat ornare aliquam quam quis auctor orci morbi imperdiet nisi pellentesque sit sed ultrices sem habitant sed in vulputate nulla odio id pharetra massa donec tincidunt ullamcorper ac felis massa porttitor..."
            image="https://images.unsplash.com/photo-1624850667288-31fde0ec04bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
