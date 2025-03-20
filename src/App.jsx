import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Header Section */}
      <header className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Instrek Technologies</h1>
        <p className="lead">
          Shaping the Future with AI, IoT, Blockchain & Next-Gen Solutions
        </p>
      </header>

      {/* Company Overview */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold">Company Overview</h2>
        <p className="text-muted">
          Instrek Technologies empowers businesses, governments, and
          institutions with cutting-edge automation, smart city innovations, and
          advanced IT services.
        </p>
      </section>

      {/* Strengths Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold">Our Strengths</h2>
          <div className="row text-center mt-4">
            <div className="col-md-3 col-6 py-3">
              <div className="card shadow-sm py-4">
                <h4>AI</h4>
              </div>
            </div>
            <div className="col-md-3 col-6 py-3">
              <div className="card shadow-sm py-4">
                <h4>ML</h4>
              </div>
            </div>
            <div className="col-md-3 col-6 py-3">
              <div className="card shadow-sm py-4">
                <h4>Cloud Computing</h4>
              </div>
            </div>
            <div className="col-md-3 col-6 py-3">
              <div className="card shadow-sm py-4">
                <h4>Blockchain</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="text-center fw-bold">Our Services</h2>
        <div className="row mt-4">
          <div className="col-md-4 col-sm-6 py-3">
            <div className="card text-center shadow-lg p-4 border-0">
              <h5>Conversational AI</h5>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 py-3">
            <div className="card text-center shadow-lg p-4 border-0">
              <h5>Agentic AI</h5>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 py-3">
            <div className="card text-center shadow-lg p-4 border-0">
              <h5>Digital Transformation</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          &copy; 2025 Instrek Technologies. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
