import React, { useEffect } from "react";
import Accordion from "../../components/Accordion/Accordion";
import FeaturesData from "./cmsFeatures.json";
import ContactSalesForm from "../../components/ContactSalesForm/ContactSalesForm";
import Link from "next/link";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import { NextSeo } from "next-seo";
import Aos from "aos";

const DakshyaCms = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <NextSeo
        title="Dakshya CMS"
        description="Dakshya CMS (Content Management System) is a website that comes with a dashboard/admin panel from where contents for the website can easily be updated. Dakshya CMS is meant for anyone including schools, colleges, media organizations, bloggers, etc."
        canonical="https://dakshyanepal.com/products/dakshya-cms"
        openGraph={{
          type: "website",
          locale: "en_IE",
          site_name: "Dakshya Nepal",
          url: "https://dakshyanepal.com/products/dakshya-cms",
          title: "Dakshya CMS",
          description:
            "Dakshya Nepal is a company fundamentally focused on digitizing the education system of the country. We deliver the proper mechanisms to revolutionize the traditional way of learning to make it more productive and effective.",
          images: [
            {
              url: "https://dakshyanepal.com/illustrations/CMS.svg",
              width: 100,
              height: 100,
              alt: "Dakshya CMS",
            },
          ],
          site_name: "Dakshya nepal",
        }}
      />
      <div className="container mx-auto">
        <div className=" flex flex-row relative justify-between shadow-md lg:shadow-none py-8">
          <Accordion title={"Dakshya CMS"} />
          <Link href="#contactsalesform">
            <a className="absolute lg:top-12 lg:right-4 right-2 top-6">
              <SecondaryButton text={"Contact Sales"} />
            </a>
          </Link>
        </div>
        <div className="lg:mt-0 mt-8">
          <h1 className="text-4xl font-medium">
            Create, Manage, Modify And Publish Your Website With A Powerful CMS
          </h1>
          <p className="text-gray-500 py-2">
            Dakshya CMS (Content Management System) is a website that comes with
            a dashboard/admin panel from where contents for the website can
            easily be updated. Dakshya CMS is meant for anyone including
            schools, colleges, media organizations, bloggers, etc.
          </p>
        </div>
        <div>
          <h1 className="py-8 text-4xl font-medium">Features</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-5 gap-y-7">
            {FeaturesData &&
              FeaturesData.map((data, index) => (
                <div
                  data-aos="zoom-in"
                  className="shadow-lg p-2 lg:mt-0 mt-4 text-center rounded-2xl hover:shadow-2xl"
                  key={index}
                >
                  <div className="w-[35%] m-auto border-2 p-4 rounded-full">
                    <img className="w-full" src={data.img} alt={data.title} />
                  </div>
                  <h1 className="text-xl font-medium py-2">{data.title}</h1>
                  <p className="text-gray-500">{data.description}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl font-medium">Why Dakshya CMS?</h1>
          <div className="flex lg:flex-row flex-col lg:gap-12 gap-0 items-center justify-center lg:mt-8 mt-6">
            <div data-aos="flip-left" className="bg-[#FEF6E0] lg:w-[40%] p-6">
              <img
                className="w-full object-contain"
                src="/images/products/kalam/Power To You.svg"
                alt="Power To You"
              />
            </div>

            <div
              data-aos="flip-right"
              className="lg:w-[60%] w-full lg:mt-0 mt-4"
            >
              <h1 className="text-2xl font-medium py-2">Power To You</h1>
              <p className="text-gray-500">
                Dakshya lets you create, manage, and modify your website content
                without any assistance from your web developer, as easily as
                posting on social media. Update urgent notices, calendar,
                events, news and every content on your website yourself with our
                CMS quick & easy. “Aafno Website aafai manage garnus.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse lg:gap-12 gap-0 items-center justify-center lg:mt-8 mt-6">
            <div
              data-aos="flip-left"
              className="lg:w-[60%] w-full lg:py-0 py-4"
            >
              <h1 className="text-2xl font-medium py-2">
                Empower Your Manpower
              </h1>
              <p className="text-gray-500">
                Since it’s an easy-to-use CMS, you can multi-use your website as
                a eNewsletter/Blog and let your people/guests share their
                opinions in the form of articles and interviews. It then becomes
                a source of standardized, complete information for everyone
                including your prospects who can learn your year round
                activities and that becomes a helpful guide in choosing you.
              </p>
            </div>
            <div data-aos="flip-right" className="bg-[#FEF6E0] lg:w-[40%] p-6">
              <img
                className="w-full object-contain"
                src="/images/products/kalam/Empower Your Manpower.svg"
                alt="Empower Your Manpower"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-12 items-center justify-center lg:mt-8 mt-6">
            <div data-aos="flip-right" className="bg-[#FEF6E0] lg:w-[40%] p-6">
              <img
                className="w-full object-contain"
                src="/images/products/kalam/A Perfect Promotion Tool.svg"
                alt="Power To You"
              />
            </div>

            <div data-aos="flip-left" className="lg:w-[60%] w-full">
              <h1 className="text-2xl font-medium py-2">
                A Perfect Promotion Tool
              </h1>
              <p className="text-gray-500">
                No wonder the newer generation is getting smarter than ever
                before and trusts the internet. But how strong is your presence
                on the internet? Is it just the static web pages you update once
                a year? The Internet is driven by content. The more content you
                push online, the greater your credibility and the increased
                chances of being found in search results. Dakshya addresses this
                issue. As a platform it gives you the power to regularly update
                your content and copes perfectly with this era of Digital
                Marketing.
              </p>
            </div>
          </div>
        </div>
        <div
          id="contactsalesform"
          className="mt-8 border-2 rounded-xl lg:p-8 px-2"
        >
          <h1 className="text-4xl font-medium py-3">Contact Sales Form</h1>
          <ContactSalesForm />
        </div>
      </div>
    </>
  );
};

export default DakshyaCms;
