import React from 'react';

import { workHistory } from '../data_files/workHistory';

const bulletMarginStyle = {
    marginLeft: "1.5rem"
};

const Experience = () => {
    return (
        <div className='base-container'>
            <h1 style={{ textAlign: "center", fontSize: "2.5em", marginBottom: "1em", color: "#333" }}>Experience</h1>

            {workHistory.map((job, index) => (
                <div key={index} style={{ marginBottom: "2em", padding: "1.5em", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
                    <h2 style={{ fontSize: "1.8em", fontWeight: "semibold", color: "#444", marginBottom: "0.5em" }}>{job.title}</h2>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1em" }}>
                        <h3 style={{ fontSize: "1.2em", fontWeight: "medium", color: "#555" }}>{job.company}</h3>
                        <p style={{ fontStyle: "italic", color: "#777", fontSize: "0.9em" }}>{job.dates}</p>
                    </div>
                    <ul style={bulletMarginStyle}>
                        {job.description.map((point, idx) => (
                            <li key={idx} style={{ marginBottom: "0.5em", color: "#666" }}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Experience;
