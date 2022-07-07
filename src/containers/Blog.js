// Init
import React, { useState } from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";
import BlogHeader from "../components/Common/BlogHeader";
import BlogReadArticles from "../components/Common/BlogReadArticles";
import BlogImg1 from "../assets/images/blogarticle1.svg";
import BlogImg2 from "../assets/images/blogarticle2.svg";
import BlogImg3 from "../assets/images/blogarticle3.svg";
import BlogList from "../components/Common/BlogList";
import BlogReadMore from "../components/Blog/BlogReadMore";
import Footer from "../components/Common/Footer";

// Home Component
export default function Blog() {
  return (
    <div className='BlogContainer'>
      <NavBar />
      <BlogHeader />
      <BlogReadArticles title='Managing a Remote Team' src={BlogImg1} to='/remoteteam' />
      <BlogReadArticles
        title='Why having a business website is necessary ?'
        Reverse
        src={BlogImg2}
        to='/businesswebsite'
      />

      {/* <BlogReadArticles src={BlogImg3} /> */}
      {/* <BlogList /> */}
      <Footer />
    </div>
  );
}
