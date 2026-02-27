import React from "react";
import ServicePromise from "../components/ServicePromise";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Navbar />
      <Carousel />
      <Featured />
      <Categories />
      <Trending />
      <ServicePromise />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
