const Skills = () => {

  // 🔹 Skills Data (Dynamic)
  const skillsData = [
    {
      title: "Technical Skills",
      skills: ["SQL", "Java", "Python", "Deep Learning","React", "HTML", "CSS", "C#", ".NET"]
    },
    {
      title: "Non-Technical Skills",
      skills: ["Leadership", "Time Management"]
    }
  ];

  return (
    <section className="container">
      <h2>SKILLS</h2>

      <div className="skills-wrapper">

        {skillsData.map((category, index) => (
          <div className="skill-table" key={index}>
            <h3>{category.title}</h3>

            <table>
              <tbody>
                {category.skills.map((skill, i) => (
                  <tr key={i}>
                    <td>{skill}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
