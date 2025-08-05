function Footer() {
    return (
        <footer style={{
            background: "rgba(3, 7, 17, 0.8)",
            color: "#e5e7eb",
            textAlign: "center",
            padding: "1.5rem 0",
            fontSize: "1rem",
            position: "relative",
            zIndex: 2
        }}>
            <div>
                &copy; {new Date().getFullYear()} Abhijeet Pathak. All rights reserved.
            </div>
            <div style={{ marginTop: "1rem" }}>
                <a href="mailto:pathakabhijeetwork@gmail.com" style={{ 
                    color: "#60a5fa", 
                    textDecoration: "none", 
                    marginRight: "1rem",
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#93c5fd"}
                onMouseLeave={(e) => e.target.style.color = "#60a5fa"}
                >
                    Email
                </a>
                <a href="https://github.com/pathakbaba1" target="_blank" rel="noopener noreferrer" style={{ 
                    color: "#60a5fa", 
                    textDecoration: "none", 
                    marginRight: "1rem",
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#93c5fd"}
                onMouseLeave={(e) => e.target.style.color = "#60a5fa"}
                >
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/abhijeetpathak1/" target="_blank" rel="noopener noreferrer" style={{ 
                    color: "#60a5fa", 
                    textDecoration: "none",
                    marginRight: "1rem",
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#93c5fd"}
                onMouseLeave={(e) => e.target.style.color = "#60a5fa"}
                >
                    LinkedIn
                </a>
                <a href="https://codeforces.com/profile/pathakbaba" target="_blank" rel="noopener noreferrer" style={{ 
                    color: "#60a5fa", 
                    textDecoration: "none",
                    marginRight: "1rem",
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#93c5fd"}
                onMouseLeave={(e) => e.target.style.color = "#60a5fa"}
                >
                    CodeForces
                </a>
                <a href="https://leetcode.com/pathakbaba" target="_blank" rel="noopener noreferrer" style={{ 
                    color: "#60a5fa", 
                    textDecoration: "none",
                    transition: "color 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.color = "#93c5fd"}
                onMouseLeave={(e) => e.target.style.color = "#60a5fa"}
                >
                    LeetCode
                </a>
            </div>
        </footer>
    );
}

export default Footer;