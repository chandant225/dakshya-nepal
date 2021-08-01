import React from "react";
import { Navbar, Footer } from "../components";
import Head from "next/head";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
