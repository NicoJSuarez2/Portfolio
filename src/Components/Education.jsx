import React from "react";
import backgroundImage from '../images/IM1.jpg';

const Education = () => {
    const educationData = [
        { degree: "Business administrator", institution: "Politecnico Gran Colombiano", year: "2025" },
        { degree: "Data science", institution: "Henry", year: "2024" },
        { degree: "Data analysis", institution: "Digital-Now", year: "2024" },
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
