"use strict";
const blogs = [
    {
        title: "blog one",
        date: "Coming soon",
        description: "Coming soon",
        image: "Coming soon",
        imageAlt: "Coming soon",
        slug: "Temp",
    },
    {
        title: "blog two",
        date: "Coming soon",
        description: "Coming soon",
        image: "Coming soon",
        imageAlt: "Coming soon",
        slug: "Temp",
    },
];
const blogContainer = document.getElementById("blog-container");
blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";
    const blogTitle = document.createElement("h1");
    blogTitle.className = "blog-title";
    blogTitle.textContent = blog.title;
    blogDiv.appendChild(blogTitle);
    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogDiv.appendChild(blogImage);
    const blogDescription = document.createElement("p");
    blogDescription.textContent = blog.description;
    blogDiv.append(blogDescription);
    blogContainer.appendChild(blogDiv);
});
