"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Skill = {
  name: string
  level: string
  percentage: number
}

const technicalSkills: Skill[] = [
  { name: "JavaScript", level: "Intermediate", percentage: 70 },
  { name: "JAVA", level: "Intermediate", percentage: 75 },
  { name: "React", level: "Basic", percentage: 40 },
  { name: "Python", level: "Basic", percentage: 70 },
  { name: "HTML/CSS", level: "Expert", percentage: 90 },
  { name: "C/C++", level: "Advanced", percentage: 85 },
]

const softSkills: Skill[] = [
  { name: "Communication", level: "Advanced", percentage: 85 },
  { name: "Teamwork", level: "Expert", percentage: 90 },
  { name: "Problem Solving", level: "Expert", percentage: 90 },
  { name: "Time Management", level: "Advanced", percentage: 80 },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical")

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 mb-4">
          My Capabilities
        </h2>
        <p className="text-gray-600">Here are some of my skills and expertise</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={cn(
              "px-8 py-3 text-lg font-medium rounded-l-lg",
              activeTab === "technical" ? "bg-purple-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100",
            )}
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </button>
          <button
            type="button"
            className={cn(
              "px-8 py-3 text-lg font-medium rounded-r-lg",
              activeTab === "soft" ? "bg-purple-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100",
            )}
            onClick={() => setActiveTab("soft")}
          >
            Soft Skills
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {(activeTab === "technical" ? technicalSkills : softSkills).map((skill) => (
          <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-purple-600 font-medium">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <div className="text-right mt-1 text-sm text-purple-600">{skill.percentage}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
