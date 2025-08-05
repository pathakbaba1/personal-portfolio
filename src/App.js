import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Set body background to match particles background
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    
    // Load particles.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      // Initialize particles after script loads
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 6,
            random: true
          },
          size: {
            value: 3.5,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 1.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 4.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 160,
              line_linked: {
                opacity: 0.8
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    };
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Particles background for entire website */}
      <div 
        id="particles-js"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none"
        }}
      ></div>
      
      <Navbar />
      
      {/* Hero section - #030711 */}
      <div style={{ 
        position: "relative",
        backgroundColor: "rgba(3, 7, 17, 0.8)",
        minHeight: "100vh",
        zIndex: 2
      }}>
        <section id="hero">
          <Hero />
        </section>
      </div>
      
      {/* Education Section - #111827 */}
      <section id="education" style={{ 
        backgroundColor: "rgba(17, 24, 39, 0.8)", 
        padding: "6rem 0",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <Education />
        </div>
      </section>
      
      {/* Work Experience Section - #030711 */}
      <section id="work-experience" style={{ 
        backgroundColor: "rgba(3, 7, 17, 0.8)", 
        padding: "6rem 0",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <WorkExperience />
        </div>
      </section>
      
      {/* Skills Section - #111827 */}
      <section id="skills" style={{ 
        backgroundColor: "rgba(17, 24, 39, 0.8)", 
        padding: "6rem 0",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <Skills />
        </div>
      </section>
      
      {/* Projects Section - #030711 */}
      <section id="projects" style={{ 
        backgroundColor: "rgba(3, 7, 17, 0.8)", 
        padding: "6rem 0",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <Projects />
        </div>
      </section>
      
      {/* Contact Section - #111827 */}
      <section id="contact" style={{ 
        backgroundColor: "rgba(17, 24, 39, 0.8)", 
        padding: "6rem 0",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <Contact />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;