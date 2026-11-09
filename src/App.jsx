import React from 'react'
import Navbar from './components/navbar.jsx'
import ProfileHeader from './components/profileheader.jsx'
import SkillList from './components/skillList.jsx'
import ProjectCard from './components/projectCard.jsx'

function App() {
  const skills = ["JavaScript", "React", "Node.js", "Python"];
  const project = [
    {
      title: "Book Haven",
      description:
        "A web application that allows users to browse and purchase books online.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Ikirere",
      description:
        "A weather forecasting application that provides real-time weather updates and forecasts.",
      technologies: ["vanilla JavaScript", "OpenWeatherMap API", "Es6"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Task Manager",
      description:
        "A task management application that helps users organize and track their tasks.",
      technologies: ["React", "Node.js", "Express"],
    }
  ];
  return (
    <div className="min-h-screen bg-[#F8F7F2]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4">
        <ProfileHeader
          name="Nadine Niyomubyeyi"
          role="IT Student & Aspiring Software Developer"
          city="Kigali, Rwanda"
          bio="I am an Information Technology student passionate about software development, web design and creating digital solutions. I enjoy learning new technologies and turning ideas into practical projects."
        />

        <SkillList skills={skills} />

        <section id="projects" className="py-12 px-2">
          <h2 className="text-3xl font-bold text-[#293B2B] text-center mb-8">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#293B2B] text-white text-center py-6 mt-10">
        <p>© 2026 Nadine Niyomubyeyi. All rights reserved.</p>
        <p className="text-sm text-gray-300 mt-2">
          Learning, building and growing through technology.
        </p>
      </footer>
    </div>
  );
}

export default App;
 
