//Importing core
import { useState, useEffect } from "react";
import api from "../../api/index";
// Init
import { Grid } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import BlogCard from "./BlogCard";
import BlogList1 from "../../assets/images/bloglist1.svg";
import BlogList2 from "../../assets/images/bloglist2.svg";
import BlogList3 from "../../assets/images/bloglist3.svg";
import BlogList4 from "../../assets/images/bloglist4.svg";
import { motion } from "framer-motion";
// Importing Components

// Home Component
export default function BlogList() {
  const [MoreBlogs, SetMoreBlogs] = React.useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    await api("get", "/blogs").then((res) => {
      setBlogs(res?.data?.blogs);
    });
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="BlogListMain"
      >
        <Grid container spacing={1} className="BlogListContainer">
          {!MoreBlogs && (
            <Grid md={5} className="BlogListGrid">
              {blogs.length <= 2 ? (
                <>
                  {blogs.map((blog) => {
                    return (
                      <BlogCard
                        src={
                          process.env.REACT_APP_SERVER_MEDIA_URL + blog.photo
                        }
                        date={new Date(blog.createdAt).toDateString()}
                        title={blog?.title}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {blogs.slice(0, 4).map((blog) => {
                    return (
                      <BlogCard
                        src={
                          process.env.REACT_APP_SERVER_MEDIA_URL + blog.photo
                        }
                        date={new Date(blog.createdAt).toDateString()}
                        title={blog?.title}
                      />
                    );
                  })}
                </>
              )}
            </Grid>
          )}

          {MoreBlogs && (
            <>
              <Grid md={5} className="BlogListGrid">
                {blogs.map((blog) => {
                  return (
                    <BlogCard
                      src={process.env.REACT_APP_SERVER_MEDIA_URL + blog.photo}
                      date={new Date(blog.createdAt).toDateString()}
                      title={blog?.title}
                    />
                  );
                })}
              </Grid>
            </>
          )}
          {blogs.length > 2 && (
            <Grid xs={12} className="BlogBtnGrid">
              <Button
                className="BlogBtn"
                variant="outlined"
                onClick={(e) => SetMoreBlogs(!MoreBlogs)}
              >
                {MoreBlogs ? "Show less" : "See more"}
              </Button>
            </Grid>
          )}
        </Grid>
      </motion.div>
    </>
  );
}
