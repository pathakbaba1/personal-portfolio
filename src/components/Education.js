function Education() {
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ 
                fontSize: "3rem", 
                fontWeight: "700", 
                color: "#ffffff", 
                marginBottom: "1rem" 
            }}>
                Education
            </h2>
            <br/>
            <br/>
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "2rem",
                maxWidth: "900px",
                margin: "0 auto"
            }}>
                {/* Masters Degree */}
                <div style={{
                    backgroundColor: "#1f2937",
                    borderRadius: "12px",
                    padding: "2rem",
                    border: "1px solid #374151",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2rem",
                    textAlign: "left"
                }}>
                    {/* University Logo/Icon */}
                    <div style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#ffffff"
                    }}>
                        UB
                    </div>
                    
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                            <h3 style={{ 
                                fontSize: "1.3rem", 
                                fontWeight: "600", 
                                color: "#ffffff",
                                margin: 0
                            }}>
                                Masters in Computer Science
                            </h3>
                            <span style={{
                                fontSize: "0.9rem",
                                color: "#9ca3af",
                                backgroundColor: "#374151",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "12px",
                                whiteSpace: "nowrap"
                            }}>
                                Aug 2024 - Present
                            </span>
                        </div>
                        <p style={{ 
                            fontSize: "1rem", 
                            color: "#d1d5db",
                            margin: "0 0 1rem 0"
                        }}>
                            University at Buffalo, NY
                        </p>
                        <ul style={{ 
                            margin: 0,
                            paddingLeft: "1.2rem",
                            color: "#9ca3af"
                        }}>
                            <li style={{ marginBottom: "0.5rem" }}>CGPA: 3.96/4</li>
                            <li style={{ marginBottom: "0.5rem" }}>Focused on Artificial Intelligence and Machine Learning</li>
                            <li>Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development</li>
                        </ul>
                    </div>
                </div>

                {/* Bachelor's Degree */}
                <div style={{
                    backgroundColor: "#1f2937",
                    borderRadius: "12px",
                    padding: "2rem",
                    border: "1px solid #374151",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2rem",
                    textAlign: "left"
                }}>
                    {/* University Logo/Icon */}
                    <div style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#10b981",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#ffffff"
                    }}>
                        NIT
                    </div>
                    
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                            <h3 style={{ 
                                fontSize: "1.3rem", 
                                fontWeight: "600", 
                                color: "#ffffff",
                                margin: 0
                            }}>
                                Bachelor of Technology in Electronics and Communication
                            </h3>
                            <span style={{
                                fontSize: "0.9rem",
                                color: "#9ca3af",
                                backgroundColor: "#374151",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "12px",
                                whiteSpace: "nowrap"
                            }}>
                                Aug 2018 - May 2022
                            </span>
                        </div>
                        <p style={{ 
                            fontSize: "1rem", 
                            color: "#d1d5db",
                            margin: 0
                        }}>
                            National Institute of Technology, Silchar, India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;