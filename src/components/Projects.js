function Projects() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ 
          fontSize: "3rem", 
          fontWeight: "700", 
          color: "#ffffff", 
          marginBottom: "1rem" 
      }}>
          Work
      </h2>
      <p style={{
          fontSize: "1.2rem",
          color: "#9ca3af",
          marginBottom: "3rem",
          maxWidth: "600px",
          margin: "0 auto 3rem auto"
      }}>
          Some of the noteworthy projects I have built:
      </p>
      
      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto"
      }}>
        {/* Project 1 - Wikipedia Search Engine */}
        <div style={{
            backgroundColor: "#1f2937",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #374151",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "row",
            minHeight: "300px"
        }}>
          {/* Project Image */}
          <div style={{
              width: "50%",
              backgroundColor: "#374151",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
          }}>
            <div style={{
                width: "80%",
                height: "80%",
                backgroundColor: "#4b5563",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                fontSize: "0.9rem",
                textAlign: "center"
            }}>
              🔍 Wikipedia Search Engine
            </div>
          </div>
          
          {/* Project Content */}
          <div style={{
              width: "50%",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left"
          }}>
            <div>
               <h3 style={{
                   fontSize: "1.5rem",
                   fontWeight: "600",
                   color: "#ffffff",
                   marginBottom: "1rem"
               }}>
                   Unigram and Bigram Wikipedia Search Engine
               </h3>
               <p style={{
                   fontSize: "1rem",
                   color: "#d1d5db",
                   lineHeight: "1.6",
                   marginBottom: "1.5rem"
               }}>
                   Designed a search & sort engine that could search through millions of pages of Wikipedia using an inverted index with unique words. Displayed a list of the top 10 most relevant pages as output based on the weight associated with each word for every search query.
               </p>
             </div>
             
             {/* Technology Tags */}
             <div>
               <div style={{
                   display: "flex",
                   flexWrap: "wrap",
                   gap: "0.5rem",
                   marginBottom: "1rem"
               }}>
                 {["Python", "Information Retrieval", "Natural Language Processing", "Data Structures", "Algorithms"].map((tech, index) => (
                   <span key={index} style={{
                       backgroundColor: "#374151",
                       color: "#d1d5db",
                       padding: "0.25rem 0.75rem",
                       borderRadius: "12px",
                       fontSize: "0.85rem",
                       fontWeight: "500"
                   }}>
                       {tech}
                   </span>
                 ))}
               </div>
               
               {/* External Link */}
               <a href="https://github.com/pathakbaba1/wikipedia-search-engine" target="_blank" rel="noopener noreferrer" style={{
                   color: "#60a5fa",
                   textDecoration: "none",
                   fontSize: "1rem",
                   fontWeight: "500",
                   display: "inline-flex",
                   alignItems: "center",
                   gap: "0.5rem"
               }}>
                   <span>↗</span> View Project
               </a>
             </div>
           </div>
         </div>

         {/* Project 2 - Price Tracker */}
         <div style={{
             backgroundColor: "#1f2937",
             borderRadius: "12px",
             overflow: "hidden",
             border: "1px solid #374151",
             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
             display: "flex",
             flexDirection: "row-reverse",
             minHeight: "300px"
         }}>
           {/* Project Image */}
           <div style={{
               width: "50%",
               backgroundColor: "#374151",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               position: "relative"
           }}>
             <div style={{
                 width: "80%",
                 height: "80%",
                 backgroundColor: "#4b5563",
                 borderRadius: "8px",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 color: "#9ca3af",
                 fontSize: "0.9rem",
                 textAlign: "center"
             }}>
               📊 Price Tracker
             </div>
           </div>
           
           {/* Project Content */}
           <div style={{
               width: "50%",
               padding: "2rem",
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
               textAlign: "left"
           }}>
             <div>
               <h3 style={{
                   fontSize: "1.5rem",
                   fontWeight: "600",
                   color: "#ffffff",
                   marginBottom: "1rem"
               }}>
                   Price Tracker for E-Commerce Websites
               </h3>
               <p style={{
                   fontSize: "1rem",
                   color: "#d1d5db",
                   lineHeight: "1.6",
                   marginBottom: "1.5rem"
               }}>
                   Designed using Python and Selenium, it could be used to keep an eye on the price of any product on e-commerce websites like Amazon, Flipkart, etc. Integrated an Email Notification System to send emails when price goes below the target.
               </p>
             </div>
             
             {/* Technology Tags */}
             <div>
               <div style={{
                   display: "flex",
                   flexWrap: "wrap",
                   gap: "0.5rem",
                   marginBottom: "1rem"
               }}>
                 {["Python", "Selenium", "Web Scraping", "Email Automation", "BeautifulSoup", "SMTP"].map((tech, index) => (
                   <span key={index} style={{
                       backgroundColor: "#374151",
                       color: "#d1d5db",
                       padding: "0.25rem 0.75rem",
                       borderRadius: "12px",
                       fontSize: "0.85rem",
                       fontWeight: "500"
                   }}>
                       {tech}
                   </span>
                 ))}
               </div>
               
               {/* External Link */}
               <a href="https://github.com/pathakbaba1/price-tracker" target="_blank" rel="noopener noreferrer" style={{
                   color: "#60a5fa",
                   textDecoration: "none",
                   fontSize: "1rem",
                   fontWeight: "500",
                   display: "inline-flex",
                   alignItems: "center",
                   gap: "0.5rem"
               }}>
                   <span>↗</span> View Project
               </a>
             </div>
           </div>
         </div>

         {/* Project 3 - Movie Ticket Booking */}
         <div style={{
             backgroundColor: "#1f2937",
             borderRadius: "12px",
             overflow: "hidden",
             border: "1px solid #374151",
             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
             display: "flex",
             flexDirection: "row",
             minHeight: "300px"
         }}>
           {/* Project Image */}
           <div style={{
               width: "50%",
               backgroundColor: "#374151",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               position: "relative"
           }}>
             <div style={{
                 width: "80%",
                 height: "80%",
                 backgroundColor: "#4b5563",
                 borderRadius: "8px",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 color: "#9ca3af",
                 fontSize: "0.9rem",
                 textAlign: "center"
             }}>
               🎬 Movie Booking App
             </div>
           </div>
           
           {/* Project Content */}
           <div style={{
               width: "50%",
               padding: "2rem",
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
               textAlign: "left"
           }}>
             <div>
               <h3 style={{
                   fontSize: "1.5rem",
                   fontWeight: "600",
                   color: "#ffffff",
                   marginBottom: "1rem"
               }}>
                   Movie Ticket Booking Application
               </h3>
               <p style={{
                   fontSize: "1rem",
                   color: "#d1d5db",
                   lineHeight: "1.6",
                   marginBottom: "1.5rem"
               }}>
                   Built a website "Book Your Show" using html, css, bootstrap, flask, and sqlalchemy for booking movie tickets. Features include user authentication, movie listings, seat selection, and booking management system.
               </p>
             </div>
             
             {/* Technology Tags */}
             <div>
               <div style={{
                   display: "flex",
                   flexWrap: "wrap",
                   gap: "0.5rem",
                   marginBottom: "1rem"
               }}>
                 {["HTML", "CSS", "Bootstrap", "Flask", "SQLAlchemy", "Python"].map((tech, index) => (
                   <span key={index} style={{
                       backgroundColor: "#374151",
                       color: "#d1d5db",
                       padding: "0.25rem 0.75rem",
                       borderRadius: "12px",
                       fontSize: "0.85rem",
                       fontWeight: "500"
                   }}>
                       {tech}
                   </span>
                 ))}
               </div>
               
               {/* External Link */}
               <a href="https://github.com/pathakbaba1/movie-booking-app" target="_blank" rel="noopener noreferrer" style={{
                   color: "#60a5fa",
                   textDecoration: "none",
                   fontSize: "1rem",
                   fontWeight: "500",
                   display: "inline-flex",
                   alignItems: "center",
                   gap: "0.5rem"
               }}>
                   <span>↗</span> View Project
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
  );
}

export default Projects;