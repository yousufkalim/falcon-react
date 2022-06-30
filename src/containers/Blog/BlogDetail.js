// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import BlogHeader from "../../components/Common/BlogHeader";
import BlogReadArticles from "../../components/Common/BlogReadArticles";
import BlogImg1 from "../../assets/images/blogarticle1.svg";
import BlogImg2 from "../../assets/images/blogarticle2.svg";
import BlogImg3 from "../../assets/images/blogarticle3.svg";
import BlogList from "../../components/Common/BlogList";
import BlogReadMore from "../../components/Blog/BlogReadMore";
import Footer from "../../components/Common/Footer";

// Home Component
export default function BlogDetail() {
  return (
    <div className="BlogContainer">
      <NavBar />
      <BlogReadMore />
      <Footer />
    </div>
  );
}
