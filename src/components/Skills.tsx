"use client";

import { useState } from "react";
import { Waypoint } from "react-waypoint";

type Skill = {
  title: string;
  percentage: number;
  description: string;
};

type SkillCategory = {
  category: string;
  items: Skill[];
};

const skills: SkillCategory[] = [
  {
    category: "Design Expertise",
    items: [
      {
        title: "Logo Design",
        percentage: 95,
        description:
          "Crafting memorable logos that reflect brand identity and purpose.",
      },
      {
        title: "Mockup Presentation",
        percentage: 90,
        description:
          "Realistic and professional branding presentations for logos and assets.",
      },
      {
        title: "Visual Storytelling",
        percentage: 88,
        description:
          "Conveying compelling brand narratives through design elements.",
      },
    ],
  },
  {
    category: "Creative Tools",
    items: [
      {
        title: "Adobe Photoshop",
        percentage: 92,
        description:
          "Expert in image editing, retouching, and mockup compositions.",
      },
      {
        title: "Adobe Illustrator",
        percentage: 90,
        description:
          "Creating vector-based designs, icons, and scalable brand elements.",
      },
      {
        title: "Canva & Figma",
        percentage: 85,
        description:
          "Designing presentations, social graphics, and collaborative layouts.",
      },
    ],
  },
];

export default function SkillsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Creative expertise in branding, visual storytelling, and mockup design
          — dedicated to delivering professional results tailored to every
          client’s vision.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {skills.map((category, catIdx) => (
            <div className="col-lg-6" key={catIdx}>
              <div
                className="skills-category"
                data-aos="fade-up"
                data-aos-delay={200 + catIdx * 100}
              >
                <h3>{category.category}</h3>
                <Waypoint
                  onEnter={() => setHasAnimated(true)}
                  bottomOffset="20%"
                />
                <div className="skills-animation">
                  {category.items.map((skill, idx) => (
                    <div className="skill-item" key={idx}>
                      <div className="d-flex justify-content-between align-items-center">
                        <h4>{skill.title}</h4>
                        <span className="skill-percentage">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={skill.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width: hasAnimated ? `${skill.percentage}%` : "0%",
                            transition: "width 1.5s ease-in-out",
                          }}
                        />
                      </div>
                      <div className="skill-tooltip">{skill.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
