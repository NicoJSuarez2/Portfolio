import React from "react";
import "../Styles/Education.css";
import { motion } from "framer-motion";

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
      institution: "Henry, Buenos Aires, Argentina",
      period: "2023"
    }
  ];

  return (
    <section id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div className="education">
        {educationData.map((education, index) => (
          <motion.div
            className="education-cell"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{education.title}</h3>
            <p>{education.institution}</p>
            <p>{education.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
