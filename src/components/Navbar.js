import React, { useState, useEffect } from "react";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                width: "100%",
                padding: "1rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#030711",
                position: "fixed",
                top: 0,
                zIndex: 1000,
                borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid transparent",
                boxSizing: "border-box",
                transition: "border-bottom 0.3s ease",
            }}
            >
            <div style={{ 
                fontWeight: "bold", 
                fontSize: "1.5rem", 
                letterSpacing: "1px",
                color: "#fff",
                fontFamily: "monospace"
            }}>
                &lt;AP /&gt;
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
                <a href="#education" style={{ 
                    color: "#e2e8f0", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                    fontSize: "1rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#60a5fa"}
                onMouseLeave={(e) => e.target.style.color = "#e2e8f0"}
                >Education</a>
                <a href="#work-experience" style={{ 
                    color: "#e2e8f0", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                    fontSize: "1rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#60a5fa"}
                onMouseLeave={(e) => e.target.style.color = "#e2e8f0"}
                >Experience</a>
                <a href="#skills" style={{ 
                    color: "#e2e8f0", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                    fontSize: "1rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#60a5fa"}
                onMouseLeave={(e) => e.target.style.color = "#e2e8f0"}
                >Skills</a>
                <a href="#projects" style={{ 
                    color: "#e2e8f0", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                    fontSize: "1rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#60a5fa"}
                onMouseLeave={(e) => e.target.style.color = "#e2e8f0"}
                >Projects</a>
                <a href="#contact" style={{ 
                    color: "#e2e8f0", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                    fontSize: "1rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#60a5fa"}
                onMouseLeave={(e) => e.target.style.color = "#e2e8f0"}
                >Contact</a>
                
                {/* Download CV Button */}
                <a 
                    href="https://drive.google.com/file/d/1APfTh_1aeDyPiaqZIjl_E4XxaR1JvBFn/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: "#ffffff",
                        color: "#030711",
                        padding: "0.5rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        border: "1px solid #ffffff"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#ffffff";
                        e.target.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.color = "#030711";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    Download CV
                </a>
            </div>
        </nav>

    );
  }
  
  export default Navbar;