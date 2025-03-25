import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const strength = [
  {
    title: "AI & ML",
    text: "Pioneering Conversational and Agentic AI for smarter interactions.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
  },
  {
    title: "IoT & AIoT",
    text: "Building connected ecosystems for smart cities and industries.",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Blockchain",
    text: "Secure, transparent solutions for the digital age.",
    img: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
  },
  {
    title: "Cloud Computing",
    text: "Scalable, next-gen infrastructure for seamless operations.",
    img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const services = [
  {
    title: "Digital Transformation",
    text: "End-to-end strategies for a digital-first world.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Automation",
    text: "Streamline processes with intelligent systems.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Smart City Innovations",
    text: "Tech-driven solutions for urban challenges.",
    img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
  },
  {
    title: "Consulting & Training",
    text: "Prepare your workforce for the future.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
  },
];
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section
        id="navbar-section"
        className="bg-dark text-white"
        data-aos="fade-down"
      >
        <div className="container py-2">
          <h5>Instrek Technologies</h5>
        </div>
      </section>

      <section className="hero text-center py-5" data-aos="zoom-in">
        <div className="container">
          <div className="hero-box">
            <h1>Shaping the Future with Intelligent Technology</h1>
            <p className="lead mt-3">
              Empower your business with AI, IoT, Blockchain, and next-gen
              digital solutions.
            </p>
            <button className="btn btn-primary mt-3">
              Explore Our Solution
            </button>
          </div>
        </div>
      </section>

      <section className="about text-center py-5" data-aos="fade-up">
        <div className="container">
          <div className="about-box">
            <h3>About Us</h3>
            <p className="mt-3">
              At Instrek Technologies, we’re driving innovation with
              cutting-edge automation and smart digital solutions. From
              empowering businesses to transforming governments and
              institutions, we deliver scalable technology to solve nationwide
              challenges. Our mission? To make India AI-ready with strategic
              consulting, workforce training, and advanced IT services.
            </p>
          </div>
        </div>
      </section>

      <section className="strength bg-light text-center py-5">
        <div className="container">
          <h3 className="fw-bolder">Our Strength</h3>
          <div className="row mt-5">
            {strength.map((data, index) => (
              <div className="col-md-3 mb-4" key={index} data-aos="fade-up">
                <div className="card">
                  <img src={data.img} alt="image" />
                  <div className="card-body">
                    <h5>{data.title}</h5>
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services text-center py-5">
        <div className="container">
          <h3 className="fw-bolder">Services and Solution</h3>
          <div className="row mt-5">
            {services.map((data, index) => (
              <div className="col-md-3 mb-4" key={index} data-aos="fade-up">
                <div className="card">
                  <img src={data.img} alt="service-img" />
                  <div className="card-body">
                    <h5>{data.title}</h5>
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="impact text-center bg-dark text-white py-5"
        data-aos="fade-up"
      >
        <div className="container">
          <h3 className="fw-bolder">Our Impact</h3>
          <div className="row mt-5">
            <div className="col-md-3 mb-4" data-aos="flip-left">
              <div className="stat-box">
                <h2>200+</h2>
                <p>Project</p>
              </div>
            </div>
            <div className="col-md-3 mb-4" data-aos="flip-left">
              <div className="stat-box">
                <h2>10+</h2>
                <p>Smart Cities Powered</p>
              </div>
            </div>
            <div className="col-md-3 mb-4" data-aos="flip-left">
              <div className="stat-box">
                <h2>100%</h2>
                <p>Client Satisfaction</p>
              </div>
            </div>
            <div className="col-md-3 mb-4" data-aos="flip-left">
              <div className="stat-box">
                <h2>5+</h2>
                <p>Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact text-center py-5" data-aos="fade-up">
        <div className="container">
          <div className="contact-box">
            <h3 className="fw-bolder">Get In Touch</h3>
            <p className="mt-3">Ready to innovate? Contact us today!</p>
            <button className="btn btn-primary">Contact us</button>
          </div>
        </div>
      </section>

      {/*Footer Section */}
      <section className="footer bg-dark text-white text-center py-3">
        <div className="container">
          <div className="footer-box">
            <h6>© 2025 Instrek Technologies. All Rights Reserved.</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
