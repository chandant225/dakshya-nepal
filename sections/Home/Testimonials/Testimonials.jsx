import React from "react";
import { TestimonialCard } from "../../../components";
import Slider from "react-slick";

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
    <div className="container mx-auto mt-24">
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Our Happy Customers
      </p>
      <div className="">
        <Slider {...settings} className="py-3 px-3">
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
