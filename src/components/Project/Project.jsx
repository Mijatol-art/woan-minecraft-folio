import React from "react";

import "./Project.scss";

import Button from "../Button/Button";

const projectData = {
  one: {
    name: "Video",
    imageUrl: "/images/intuition.webp",
    externalLink: "https://youtu.be/ij2vrkoVI8c",
    content: [
      {
        header: "Header One",
        paragraphs: [
          "This is the first paragraph describing Roll Safe.",
          "Add additional paragraphs about Roll Safe here.",
        ],
      },
      {
        header: "Header Two",
        paragraphs: [
          "This is the second paragraph with more details about Roll Safe.",
          "More detailed information can be added in new paragraphs.",
        ],
      },
    ],
  },
  two: {
    name: "Video",
    imageUrl: "/images/develop-plan.webp",
    externalLink: "https://www.youtube.com/watch?v=VaidlrZSVqI",
    content: [
      {
        header: "Header One",
        paragraphs: [
          "This is the first paragraph describing Salt Bae.",
          "Additional context about Salt Bae can go here.",
        ],
      },
      {
        header: "Header Two",
        paragraphs: [
          "This is the second paragraph with more details about Salt Bae.",
          "More paragraphs can be added to elaborate on Salt Bae.",
        ],
      },
    ],
  },
  three: {
    name: "Video",
    imageUrl: "/images/multiplayer-game.webp",
    externalLink: "https://www.youtube.com/watch?v=6QdkIOo-fe0",
    content: [
      {
        header: "Header One",
        paragraphs: [
          "This is the first paragraph describing Success Kid.",
          "More information about Success Kid can be added here.",
        ],
      },
      {
        header: "Header Two",
        paragraphs: [
          "This is the second paragraph with more details about Success Kid.",
          "Additional Success Kid details can go in new paragraphs.",
        ],
      },
    ],
  },
  four: {
    name: "Video",
    imageUrl: "/images/immersive-world.webp",
    externalLink: "https://youtu.be/C4g2U2ZYbZ4",
    content: [
      {
        header: "Header One",
        paragraphs: [
          "This is the first paragraph describing Surprised Pikachu.",
          "More context about Surprised Pikachu can be written here.",
        ],
      },
      {
        header: "Header Two",
        paragraphs: [
          "This is the second paragraph with more details about Surprised Pikachu.",
          "Additional paragraphs about Surprised Pikachu can be added easily.",
        ],
      },
    ],
  },
};

const Project = ({ projectID }) => {
  const project = projectData[projectID];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-image"
        />
      </div>

      <Button href={project.externalLink} type={"link"}>
        Watch {project.name}
      </Button>

      {project.content.map((section, index) => (
        <div key={index} className="project-section">
          <h2 className="section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
