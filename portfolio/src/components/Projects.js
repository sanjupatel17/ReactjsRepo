const Projects = () => {
  return (
    <section className="container">
      <h2>PROJECTS</h2>

      <div className="card-container">

        {/* ===== Project 1 ===== */}
        <div className="card">
          <h3>🌦 Weather Forecast Web Application</h3>

          <p>
            A responsive weather forecasting web application that provides 
            real-time weather updates for any specific location worldwide.
          </p>

          <ul style={{ textAlign: "left", marginTop: "15px" }}>
            <li>Search weather by city or location</li>
            <li>Weekly weather forecast</li>
            <li> Temperature, humidity & wind speed</li>
            <li>Atmospheric pressure & weather conditions</li>
            <li> Responsive UI design</li>
          </ul>
        </div>

        {/* ===== Project 2 ===== */}
        <div className="card">
          <h3>🧠 Brain Tumor Detection using Deep Learning</h3>

          <p>
            A deep learning-based medical image analysis system that 
            detects brain tumors from MRI scan images.
          </p>

          <ul style={{ textAlign: "left", marginTop: "15px" }}>
            <li>MRI Image Upload & Processing</li>
            <li>Tumor Type Classification</li>
            <li>Grad-CAM Visualization</li>
            <li>Automated Report Generation</li>
            <li>High Accuracy CNN Model</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;
