import React from "react";
import "../styles.css";

/* Grid of 4 education cells */
const Education = () => {
  const educationData = [
    {
      title: "Business Administration",
      institution: "Politecnico Gran Colombiano, Bogota, Colombia",
      period: "2020 - 2025"
    },
    {
      title: "Google data driven marketing",
      institution: "Coursera, Bogota, Colombia",
      period: "2022"
    },
    {
      title: "Data Science",
      institution: "Henry, Buenos aires, Argentina",
      period: "2023"
    }
  ];

  return (
    <section id="education">
      <div className="education">
        {educationData.map((education, index) => (
          <div className="education-cell" key={index}>
            <h3>{education.title}</h3>
            <p>{education.institution}</p>
            <p>{education.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
