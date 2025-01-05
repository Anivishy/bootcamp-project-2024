"use client";

import React from "react";
import styles from "./blogContent.module.css";
import Link from "next/link";
import blogEntries from "./blogData";

const Blog: React.FC = () => {
  return (
    <main className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <div className={styles.blogList}>
        {blogEntries.map((blog) => (
          <div key={blog.slug} className={styles.blogCard}>
            <h2 className={styles.blogName}>{blog.title}</h2>
            <p className={styles.blogDescription}>{blog.description}</p>
            <Link href={`/blogs/${blog.slug}`} className={styles.blogLink}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
