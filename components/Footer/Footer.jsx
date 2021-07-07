import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo_white from "../../public/icons/dakshya_logo_white.svg";
import fb_logo from "../../public/icons/fb.svg";
import insta from "../../public/icons/insta.svg";
import linkedin from "../../public/icons/Linkedin.svg";
import twitter from "../../public/icons/twitter.svg";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="mt-24 bg-black">
      <div className="container mx-auto grid md:grid-cols-3 py-10">
        <div className="space-y-5">
          <Image src={logo_white} className="" alt="dakshya_logo white" />
          <div className="flex gap-5">
            <a href="https://facebook.com/dakshyanepal" target="_blank">
              <Image src={fb_logo} alt="fb_logo" className="cursor-pointer" />
            </a>
            <a href="https://instagram.com/dakshyanepal" target="_blank">
              <Image
                src={insta}
                alt="instagram logo"
                className="cursor-pointer"
              />
            </a>
            <a href="https://linkedin.com/dakshyanepal" target="_blank">
              <Image
                src={linkedin}
                alt="linkedIn logo"
                className="cursor-pointer"
              />
            </a>
            <a href="https://twitter.com/dakshyanepal" target="_blank">
              <Image
                src={twitter}
                alt="twitter logo"
                className="cursor-pointer"
              />
            </a>
          </div>
          <p className="font-normal text-sm text-white">#सक्षम-नेपाल</p>
          <p className="font-primary font-normal text-sm text-white">
            Legal. Paperwork. Advertisement
          </p>
          <p className="font-primary font-normal text-sm text-white">
            All right reserved Dakshya Nepal {date}
          </p>
        </div>
        <div className="flex space-x-20 mt-5 md:mt-0">
          <div className="space-y-5">
            <p className="font-primary text-xl font-normal capitalize text-white">
              Products
            </p>
            <div className="space-y-3">
              <Link href="/smart_school ">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Smart School
                </p>
              </Link>
              <Link href="/online_tutions">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Online Tutions
                </p>
              </Link>
              <Link href="/guidance">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Guidance Counseling
                </p>
              </Link>
              <Link href="/kalam_cms">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Kalam CMS
                </p>
              </Link>
              <Link href="/qbex">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Qbex
                </p>
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <p className="font-primary text-xl font-normal capitalize text-white">
              Company
            </p>
            <div className="space-y-3">
              <Link href="/blogs ">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Blogs
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  About
                </p>
              </Link>
              <Link href="/careers">
                <p className="text-white font-primary font-normal text-sm cursor-pointer">
                  Careers
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-5 md:mt-0">
          <p className="font-primary text-xl font-normal capitalize text-white">
            Contact
          </p>
          <div class="iframe-rwd">
            <iframe
              title="map"
              width="350"
              height="100"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginWidth="0"
              className="rounded shadow transform transition-all ease-in-out duration-300 hover:-translate-y-2 -translate-x-5 md:-translate-x-0 lg:-translate-x-0 hover:shadow-lg"
              src="https://maps.google.com/maps?q=dakshyaNepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <br />
            <small>
              <a
                href="https://maps.google.com/maps?q=dakshyaNepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="text-gray-600 hover:text-gray-900 font-primary"
              >
                View Larger Map
              </a>
            </small>
          </div>
          <div className="flex space-x-5 items-center">
            <PhoneIcon className="w-6 h-6 text-white" />
            <a
              href="tel:+9779808434319"
              className="font-primary text-sm text-white"
            >
              +977 9808434319
            </a>
          </div>
          <div className="flex space-x-5 items-center">
            <MailIcon className="w-6 h-6 text-white" />
            <a
              href="mailto:info@dakshyanepal.com"
              className="font-primary text-sm text-white"
            >
              info@dakshyanepal.com
            </a>
          </div>
          <div className="flex space-x-5 items-center">
            <LocationMarkerIcon className="w-6 h-6 text-white" />
            <p className="font-primary text-sm text-white">
              TG Complex, Koteshwor, Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
