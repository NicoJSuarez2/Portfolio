/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/IM3.jpg";

const imageAltText = "coding on a laptop with a cup of coffee nearby";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Power BI report with a Bogota database containing 123 calls. ",
    description:
      "We developed a report in power BI that allows us to create an estimate of emergency calls for the next quarter.",
    url: "https://nostalgic-station-6fc.notion.site/POWER-BI-e6791c43d8164cee8e3342fa2135783e?pvs=25",
  },
  {
    title: "Olist a Brazilian e-commerce database on deliveries ",
    description: "We created a sports automation system in python using reportlab",
    url: "https://nostalgic-station-6fc.notion.site/Phython-fa3eefbd48814e088a7898a0a90e4acf",
  },
  {
    title: "linear regression case study",
    description: "This is the easiest way to begin to understand how the models work.",
    url: "https://www.notion.so/Regresion-Lineal-21c36d0089a54d5c898b6cccfa89be14",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "In this repository you will find all the tools (React) that we used to create this web site",
    url: "https://github.com/NicoJSuarez2/Portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
