import React from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";
import { Grid } from "@mui/material";
import Blog2 from "../../assets/images/Blog2.svg";
import Blog1 from "../../assets/images/blog1.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <>
      <div className="BlogSectionMain">
        <SectionHeader
          width="40%"
          h1="With lots of unique blogs"
          h2="Read our blog"
        />
        <div className="BlogContainerGrid">
          <Grid container spacing={1}>
            <Grid className="BlogGrid" md={5.5}>
              <Link to="/blog">
                <motion.div
                  initial={{ x: -350 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    src={Blog1}
                    date="November 25, 2022"
                    title="A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021"
                  />
                </motion.div>
              </Link>
            </Grid>
            <Grid className="BlogGrid" md={5.5}>
              <Link to="/blog">
                <motion.div
                  initial={{ x: 350 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    src={Blog2}
                    date="November 16, 2022"
                    title="What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?"
                  />
                </motion.div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
