import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Easy AWS - S3 Explorer",
    description:
      "A user-friendly desktop app to effortlessly navigate Amazon S3, create buckets, transfer files, and download content. Built with Electron, React, and TypeScript.",
    url: "https://github.com/devjayprakash/easyaws",
  },
  {
    id: 2,
    name: "Prisma DTO Generator for NestJS",
    description:
      "A utility package to automatically generate Data Transfer Objects (DTOs) from your Prisma schema for use in NestJS projects, streamlining development.",
    url: "https://github.com/devjayprakash/prisma-generator-dto-nestjs",
  },
  {
    id: 3,
    name: "StockSight Frontend",
    description:
      "As a lead contributor, I helped build this React-based frontend for real-time stock data analysis, allowing users to upload XLSX files and view live-streamed stock information.",
    url: "https://github.com/shivamsouravjha/stock-frontend",
  },
];

const ProjectsSection = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl md:text-3xl mt-4 mb-10 font-bold flex items-center gap-3">
        <Briefcase className="w-8 h-8 md:w-9 md:h-9" />
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 font-semibold flex items-center gap-2"
            >
              Check it out <ExternalLink size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
