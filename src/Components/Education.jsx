import React from "react";
import backgroundImage from '../images/IM1.jpg';

const Education = () => {
    const educationData = [
        { degree: "B.Sc. in Computer Science", institution: "University A", year: "2020" },
        { degree: "M.Sc. in Software Engineering", institution: "University B", year: "2022" },
        { degree: "Ph.D. in Artificial Intelligence", institution: "University C", year: "2025" },
    ];

    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            flexDirection: "row", 
            height: "100vh", 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
        }}>
            {educationData.map((edu, index) => (
                <div key={index} style={{ 
                    backgroundColor: "white", 
                    color: "black", 
                    padding: "20px", 
                    margin: "10px", 
                    borderRadius: "10px", 
                    textAlign: "center", 
                    width: "300px" 
                }}>
                    <h2>{edu.degree}</h2>
                    <p>{edu.institution}</p>
                    <p>{edu.year}</p>
                </div>
            ))}
        </div>
    );
};
export default Education;
