import React from "react";

/* Grid of 4 education cells */
const Education = () => {
  const educationData = [
    {
      title: "Business Administration",
      institution: "Uniminuto, Bogota, Colombia",
      period: "2015 - 2019"
    },
    {
      title: "Business Intelligence",
      institution: "Universidad de los Andes, Bogota, Colombia",
      period: "2020 - 2021"
    },
    {
      title: "Data Science",
      institution: "Platzi, Bogota, Colombia",
      period: "2021 - Present"
    }
  ];

  return (
    <section className="padding" id="education">
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

