"use client";

import { FaLocationArrow } from "react-icons/fa6";

type ModalProjectsProps = {
  isOpen: boolean;
  onClose: () => void;
  project: any;
};

const ModalProjects = ({ isOpen, onClose, project }: ModalProjectsProps) => {
  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    >
      <div className="bg-[#13162D] text-white p-8 rounded-2xl w-[90vw] max-w-2xl relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple"
        >
          &times;
        </button>

        <img
          src={project.img}
          alt="Project Cover"
          className="w-full h-60 object-cover rounded-xl mb-6"
        />

        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

        <p className="text-gray-400 text-base mb-6">{project.des}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.iconLists.map((icon: string, index: number) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
            >
              <img src={icon} alt={`icon-${index}`} className="p-2" />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <a
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple font-semibold hover:underline"
          >
            Check Live Site
            <FaLocationArrow className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalProjects;
