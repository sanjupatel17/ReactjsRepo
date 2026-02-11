const About = () => {
  return (
    <section className="container about-section">

      <h2 className="about-title">ABOUT ME</h2>

      <p className="about-description">
        I am a motivated and results-oriented 
        <span> Full Stack Developer </span>
        with strong expertise in ReactJS, ASP.NET Core, C#, and SQL.
        I focus on developing responsive, scalable, and high-performance
        web applications that solve real-world problems efficiently.
      </p>

      <p className="about-description">
        During my <strong>Summer Internship at Atul Infotech</strong>,
        I worked on real-time web application projects involving
        database integration, API development, and modern UI implementation.
        This experience strengthened both my technical skills and
        professional work discipline.
      </p>

      <div className="core-strength-table">
        <h3 className="strength-heading">CORE STRENGTHS</h3>

        <table>
          <tbody>
            <tr>
              <td>✔ Strong Problem-Solving Skills</td>
              <td>✔ Leadership & Team Collaboration</td>
            </tr>
            <tr>
              <td>✔ Effective Time Management</td>
              <td>✔ Quick Learner & Adaptability</td>
            </tr>
            <tr>
              <td>✔ Ability to Work Under Pressure</td>
              <td>✔ Analytical Thinking</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default About;
