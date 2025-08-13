// src/components/Hero.js
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
      <div
        style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem 2rem",
            minHeight: "100vh",
            
        }}
      >
        {/* Content wrapper with higher z-index */}
        <div style={{ 
          position: "relative", 
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          maxWidth: "1000px",
          width: "100%"
        }}>
          {/* Content - Left Side */}
          <div style={{ 
            flex: 1,
            color: "#fff"
          }}>
            <h1 style={{
                fontSize: "3rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                lineHeight: 1.2
                }}>
                Hello 👋 &nbsp;&nbsp;I'm Abhijeet Pathak
            </h1>

            <p style={{ 
              fontSize: "1.3rem", 
              color: "#e5e7eb", 
              marginBottom: "2rem",
              lineHeight: 1.6,
              maxWidth: "600px"
            }}>
              I'm a passionate Computer Science student currently pursuing my Master's at the University at Buffalo. 
              My journey in tech started with a fascination for how websites work, and it has grown into a full-fledged career.
              I enjoy working with modern technologies and frameworks, and I am always eager to learn new skills and improve my craft. 
              When I'm not coding, you can find me exploring new technologies or working on personal projects.
            </p>
            
            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                <a
                    href="https://github.com/pathakbaba1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    display: "flex",
                    alignItems: "center",
                    background: "#fff",
                    color: "#000",
                    borderRadius: "8px",
                    padding: "0.75rem 1.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 4px 14px rgba(0,0,0,0.1)";
                    }}
                >
                    <FaGithub style={{ marginRight: "0.5rem" }} />
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/abhijeetpathak1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                    display: "flex",
                    alignItems: "center",
                    background: "transparent",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "0.75rem 1.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "2px solid #fff",
                    fontSize: "1rem",
                    transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.background = "#fff";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.background = "transparent";
                      e.target.style.color = "#fff";
                    }}
                >
                    <FaLinkedin style={{ marginRight: "0.5rem" }} />
                    LinkedIn
                </a>
            </div>

            <div style={{ 
              fontSize: "1rem", 
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{ 
                width: "8px", 
                height: "8px", 
                backgroundColor: "#10b981", 
                borderRadius: "50%",
                display: "inline-block"
              }}></span>
              Available for new opportunities
            </div>
          </div>

          {/* Profile Picture - Right Side */}
          <div style={{ 
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt="Abhijeet Pathak"
                style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                border: "4px solid #fff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;