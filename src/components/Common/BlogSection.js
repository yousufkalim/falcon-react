import React from "react";
//Importing core
import { useState, useEffect } from "react";
import api from "../../api/index";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";
import { Grid } from "@mui/material";
import Blog2 from "../../assets/images/Blog2.svg";
import { motion } from "framer-motion";

export default function BlogSection({ heading, sub_heading }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    await api("post", "/blogs/getLatestBlogs").then((res) => {
      setBlogs(res?.data?.blogs);
    });
  };
  return (
    <>
      <div className="BlogSectionMain">
        <SectionHeader width="40%" h1={heading} h2={sub_heading} />
        <div className="BlogContainerGrid">
          <Grid container spacing={1}>
            <>
              {blogs?.map((blog) => {
                return (
                  <Grid className="BlogGrid" md={5.5}>
                    <motion.div
                      initial={{ x: -350 }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <BlogCard
                        src={
                          process.env.REACT_APP_SERVER_MEDIA_URL + blog.photo
                        }
                        date={new Date(blog.createdAt).toDateString()}
                        title={blog?.title}
                      />
                    </motion.div>
                  </Grid>
                );
              })}
            </>
          </Grid>
        </div>
      </div>
    </>
  );
}
