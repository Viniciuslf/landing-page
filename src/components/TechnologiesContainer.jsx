import {
  DiLinux,
  DiDocker,
  DiJsBadge,
  DiAndroid,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "linux", name: "Linux", icon: <DiLinux /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "Android", name: "Android", icon: <DiAndroid /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
