import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Project = {
  title: string
  description: string
  technologies: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "Krishi-Mitra AI (In Top 8 during IBM Evaluation)",
    description: "An AI agentic model for the farmers to help them in their day to day work .",
    technologies: ["Python", "StreamLit", "Efficientnet B0" , "OpenWeathermap API", "beautiful Soup"],
    link: "https://krishimitra-ai.streamlit.app/",
  },
  {
    title: "VaultScan",
    description: "A webapp which detects the APKs and AI tell is it secure to use",
    technologies: ["React.js", "Tailwind CSS", "Python", "Firebase"],
    link: "https://fakebankapkpy-lajo.vercel.app/",
  },
  {
    title: "E-commerce Platform",
    description: "A Coffee Shop website named 'Cold Brew' with diffrent project listed.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://splendorous-melba-d2e180.netlify.app/",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing daily tasks and projects.",
    technologies: ["React", "Firebase", "Material UI"],
    link: "https://mmt-clothing.netlify.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 mb-4">
          My Projects
        </h2>
        <p className="text-gray-600">A showcase of all projects that I have made</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              View Project <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
