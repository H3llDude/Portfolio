import React from "react";
import { skills } from "@/data/skills";

function Skills() {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold">Skills</h3>
      <div className="flex flex-wrap gap-6 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg"
          >
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
