import React from 'react';

import { courses } from '../data_files/courses';

const educationData = {
        degree: "MSc Software Engineering & Management",
        institution: "Linköping University",
        location: "Linköping, Sweden",
        dates: "Sep 2007 – Jun 2010"
};

const publications = [
    {
        title: "Automatic Assembler Generator for NoGAP - IEEE",
        platform: "IEEE",
        authors: "Per Karlström, Faisal Akhlaq, Dake Liu, ..."
    },
    {
        title: "Cycle Accurate Simulator Generator for NoGAP - IEEE",
        platform: "IEEE",
        authors: "Per Karlström, Faisal Akhlaq, Dake Liu, ..."
    }
]

const bulletMarginStyle = {
    marginLeft: "1.5rem"
};

const Education = () => {
    return (
        <div className='base-container'>
            <div className="education-container" style={{ padding: "1.5em", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                <h1 style={{ textAlign: "center", fontSize: "2.5em", marginBottom: "1em", color: "#333" }}>Education</h1>

                <div style={{ marginBottom: "2em", paddingBottom: "1em", borderBottom: "1px solid #eee" }}>
                    <h2 style={{ fontSize: "1.8em", fontWeight: "semibold", color: "#444", marginBottom: "0.5em" }}>
                        {educationData.degree}
                    </h2>
                    <p style={{ fontSize: "1.2em", fontStyle: "italic", color: "#555" }}>
                        {educationData.institution}, {educationData.location} | {educationData.dates}
                    </p>
                </div>

                <div>
                    <h2 style={{ fontSize: "1.8em", fontWeight: "semibold", color: "#444", marginBottom: "1em" }}>
                        Recent Educational Activities & Courses
                    </h2>
                    <ul style={bulletMarginStyle}>
                        {courses.map((course, index) => (
                            <li key={index} style={{ marginBottom: "1em", color: "#666" }}>
                                <strong style={{ fontSize: "1.1em" }}>{course.name}</strong>
                                <p style={{ fontStyle: "italic", fontSize: "0.95em", color: "#777" }}>
                                    {course.platform} {course.dates && `(${course.dates})`}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 style={{ fontSize: "1.8em", fontWeight: "semibold", color: "#444", marginBottom: "1em" }}>
                        Publications
                    </h2>
                    <ul style={bulletMarginStyle}>
                        {publications.map((publication, index) => (
                            <li key={index} style={{ marginBottom: "1em", color: "#666" }}>
                                <strong style={{ fontSize: "1.1em" }}>{publication.title}</strong>
                                <p style={{ fontStyle: "italic", fontSize: "0.95em", color: "#777" }}>
                                    {publication.platform} {publication.authors && `(${publication.authors})`}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Education;
