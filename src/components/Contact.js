function Contact(){
    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ 
                fontSize: "3rem", 
                fontWeight: "700", 
                color: "#ffffff", 
                marginBottom: "1rem" 
            }}>
                Get in touch
            </h2>
            <p style={{
                fontSize: "1.2rem",
                color: "#9ca3af",
                marginBottom: "3rem",
                maxWidth: "600px",
                margin: "0 auto 3rem auto"
            }}>
                What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
            </p>

            {/* Contact Form - Centered */}
            <div style={{
                maxWidth: "500px",
                margin: "0 auto",
                textAlign: "left"
            }}>
                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem"
                }}
                onSubmit={e => {
                    e.preventDefault();
                    alert("Thank you for reaching out! I will get back to you soon.");
                }}
                >
                    <div>
                        <label style={{
                            display: "block",
                            color: "#e5e7eb",
                            marginBottom: "0.5rem",
                            fontSize: "0.9rem",
                            fontWeight: "500"
                        }}>
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            required
                            style={{ 
                                width: "100%",
                                padding: "0.75rem 1rem", 
                                borderRadius: "8px", 
                                border: "1px solid #374151",
                                backgroundColor: "#1f2937",
                                color: "#ffffff",
                                fontSize: "1rem",
                                outline: "none",
                                transition: "border-color 0.3s ease",
                                boxSizing: "border-box"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#60a5fa"}
                            onBlur={(e) => e.target.style.borderColor = "#374151"}
                        />
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            color: "#e5e7eb",
                            marginBottom: "0.5rem",
                            fontSize: "0.9rem",
                            fontWeight: "500"
                        }}>
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            style={{ 
                                width: "100%",
                                padding: "0.75rem 1rem", 
                                borderRadius: "8px", 
                                border: "1px solid #374151",
                                backgroundColor: "#1f2937",
                                color: "#ffffff",
                                fontSize: "1rem",
                                outline: "none",
                                transition: "border-color 0.3s ease",
                                boxSizing: "border-box"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#60a5fa"}
                            onBlur={(e) => e.target.style.borderColor = "#374151"}
                        />
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            color: "#e5e7eb",
                            marginBottom: "0.5rem",
                            fontSize: "0.9rem",
                            fontWeight: "500"
                        }}>
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project or just say hello!"
                            required
                            rows="5"
                            style={{ 
                                width: "100%",
                                padding: "0.75rem 1rem", 
                                borderRadius: "8px", 
                                border: "1px solid #374151",
                                backgroundColor: "#1f2937",
                                color: "#ffffff",
                                fontSize: "1rem",
                                resize: "vertical",
                                outline: "none",
                                transition: "border-color 0.3s ease",
                                boxSizing: "border-box",
                                fontFamily: "inherit"
                            }}
                            onFocus={(e) => e.target.style.borderColor = "#60a5fa"}
                            onBlur={(e) => e.target.style.borderColor = "#374151"}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "0.875rem 2rem",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: "#60a5fa",
                            color: "#ffffff",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 14px rgba(96, 165, 250, 0.3)"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#3b82f6";
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 8px 25px rgba(96, 165, 250, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#60a5fa";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 4px 14px rgba(96, 165, 250, 0.3)";
                        }}
                    >
                        Send Message 🚀
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;