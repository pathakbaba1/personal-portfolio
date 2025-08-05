function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Java", icon: "☕" },
                { name: "Python", icon: "🐍" },
                { name: "C", icon: "C" },
                { name: "HTML & CSS", icon: "🌐" },
                { name: "JavaScript", icon: "JS" },
                { name: "SQL", icon: "🗃️" }
            ]
        },
        {
            title: "Technologies & Frameworks", 
            skills: [
                { name: "Flask", icon: "🌶️" },
                { name: "SQLAlchemy", icon: "🔗" },
                { name: "OJET", icon: "⚡" },
                { name: "Docker", icon: "🐳" },
                { name: "Kubernetes", icon: "☸️" },
                { name: "Git", icon: "📝" }
            ]
        },
        {
            title: "Cloud & Infrastructure",
            skills: [
                { name: "Oracle Cloud (OCI)", icon: "☁️" },
                { name: "OCI Vault", icon: "🔐" },
                { name: "OCI Redis", icon: "🔴" },
                { name: "MySQL", icon: "🐬" },
                { name: "Oracle Database", icon: "🗄️" },
                { name: "Terraform", icon: "🏗️" }
            ]
        },
        {
            title: "Concepts & Methodologies",
            skills: [
                { name: "Object Oriented Programming", icon: "🧩" },
                { name: "Database Management", icon: "💾" },
                { name: "Computer Networking", icon: "🌐" },
                { name: "Machine Learning", icon: "🤖" },
                { name: "Data Structures", icon: "📊" },
                { name: "Algorithms", icon: "⚙️" }
            ]
        },
        {
            title: "Coursework & Research",
            skills: [
                { name: "Design and Analysis of Algorithms", icon: "📈" },
                { name: "Deep Learning", icon: "🧠" },
                { name: "Data Intensive Computing", icon: "💻" },
                { name: "Computer Security", icon: "🔒" },
                { name: "Computational Linguistics", icon: "📝" },
                { name: "Operating Systems", icon: "⚡" }
            ]
        }
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ 
                fontSize: "3rem", 
                fontWeight: "700", 
                color: "#ffffff", 
                marginBottom: "1rem" 
            }}>
                My Skills
            </h2>
            <p style={{
                fontSize: "1.2rem",
                color: "#9ca3af",
                marginBottom: "3rem",
                maxWidth: "600px",
                margin: "0 auto 3rem auto"
            }}>
                The skills, tools and technologies I am really good at:
            </p>
            
            <div style={{ 
                maxWidth: "1000px", 
                margin: "0 auto",
                textAlign: "left"
            }}>
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} style={{ marginBottom: "3rem" }}>
                        {/* Category Title */}
                        <h3 style={{
                            fontSize: "1.3rem",
                            fontWeight: "600",
                            color: "#ffffff",
                            marginBottom: "1.5rem",
                            paddingBottom: "0.5rem",
                            borderBottom: "1px solid #374151"
                        }}>
                            {category.title}
                        </h3>
                        
                        {/* Skills Grid */}
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1rem",
                            marginBottom: "1rem"
                        }}>
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    backgroundColor: "#1f2937",
                                    padding: "0.75rem 1rem",
                                    borderRadius: "8px",
                                    border: "1px solid #374151",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                    cursor: "default",
                                    minWidth: "120px"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
                                    e.currentTarget.style.borderColor = "#60a5fa";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.borderColor = "#374151";
                                }}
                                >
                                    {/* Skill Icon */}
                                    <div style={{
                                        width: "24px",
                                        height: "24px",
                                        backgroundColor: "#60a5fa",
                                        borderRadius: "4px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: skill.icon.length > 2 ? "0.6rem" : "1rem",
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        flexShrink: 0
                                    }}>
                                        {skill.icon}
                                    </div>
                                    
                                    {/* Skill Name */}
                                    <span style={{
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                        color: "#e5e7eb"
                                    }}>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Skills;