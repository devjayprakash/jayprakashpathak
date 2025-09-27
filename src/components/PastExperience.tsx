import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface WorkExBoxProps {
  title: string;
  company: string;
  duration: string;
  description: React.ReactNode;
  isLast?: boolean;
}

interface HighlightedTextProps {
  text: string;
  highlights: string[];
}

const HighlightedText = ({ text, highlights }: HighlightedTextProps) => {
  if (!text) return null;

  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part: string, index: number) =>
        highlights.includes(part.toLowerCase()) ? (
          <span key={index} className="text-indigo-700 font-bold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const WorkExBox: React.FC<WorkExBoxProps> = ({
  title,
  company,
  duration,
  description,
  isLast,
}) => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-[25%] md:w-[10%] flex-shrink-0 text-right pr-4 md:pr-8 text-sm text-gray-500 font-semibold pt-1">
        {duration}
      </div>
      <div
        className={`w-[75%] md:w-[90%] relative border-l-2 ${
          isLast ? "border-transparent" : "border-indigo-200"
        } pl-4 md:pl-8 pb-12`}
      >
        <div className="absolute w-4 h-4 bg-indigo-700 rounded-full -left-2 top-1 border-4 border-white"></div>
        <h3 className="text-xl font-bold text-gray-800">{company}</h3>
        <p className="text-md font-semibold text-gray-700 mt-1">{title}</p>
        <div className="text-gray-600 mt-4">{description}</div>
      </div>
    </motion.div>
  );
};

const experiences = [
  {
    title: "Full Stack Mobile Engineer",
    company: "Deel",
    duration: "2024-Present",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <HighlightedText
            text="Engineered core features for a mobile app with 200k+ DAU, utilizing React.js, Capacitor.js, MobX, and TypeScript."
            highlights={[
              "react.js",
              "capacitor.js",
              "mobx",
              "typescript",
              "sentry",
            ]}
          />
        </li>
        <li>
          <HighlightedText
            text="Developed custom UI components, native plugins (iOS/Android), and backend services with Node.js, Express.js, PostgreSQL, and Redis."
            highlights={[
              "node.js",
              "express.js",
              "postgresql",
              "sequelize",
              "redis",
            ]}
          />
        </li>
        <li>
          Led end-to-end development as a founding mobile team member,
          delivering scalable, production-ready systems.
        </li>
      </ul>
    ),
  },
  {
    title: "Technical Lead",
    company: "Wify Technologies",
    duration: "Sep 2022 to Aug 2024",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <HighlightedText
            text="Led the development of a Technician Management System using Capacitor.js, React.js, Node.js, GraphQL, and Prisma."
            highlights={[
              "capacitor.js",
              "react.js",
              "node.js",
              "graphql",
              "postgresql",
              "prisma",
            ]}
          />
        </li>
        <li>
          <HighlightedText
            text="Built the company website and CMS with Next.js, Tailwind CSS, and Sanity, improving user engagement by 60%."
            highlights={["next.js", "tailwind css", "sanity"]}
          />
        </li>
        <li>
          <HighlightedText
            text="Established CI/CD pipelines using AWS, Docker, and GitHub Actions, and implemented monitoring with Datadog and Mixpanel."
            highlights={[
              "aws",
              "docker",
              "github actions",
              "cloudwatch",
              "datadog",
              "mixpanel",
            ]}
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Senior Software Engineer",
    company: "Propertyloop",
    duration: "Feb 2022 to Aug 2022",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <HighlightedText
            text="Redesigned and rebuilt the primary website using TypeScript, Next.js, and Sanity CMS, resulting in a 35% increase in signups."
            highlights={["typescript", "next.js", "sanity"]}
          />
        </li>
        <li>
          <HighlightedText
            text="Delivered cross-platform applications for Android, iOS, and web with TypeScript, React.js, and Capacitor.js."
            highlights={["typescript", "react.js", "capacitor.js"]}
          />
        </li>
        <li>
          <HighlightedText
            text="Optimized application performance with Redis and MongoDB, achieving 70% faster API responses."
            highlights={["redis", "mongodb", "mixpanel"]}
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Full Stack Developer",
    company: "Dataneuron",
    duration: "Mar 2021 to Jan 2022",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <HighlightedText
            text="Developed a real-time ML model training dashboard using React.js, TypeScript, MongoDB, AWS Lambda, S3, and Socket.IO."
            highlights={[
              "react.js",
              "typescript",
              "mongodb",
              "aws lambda",
              "s3",
              "socket.io",
              "kafka",
            ]}
          />
        </li>
        <li>
          <HighlightedText
            text="Built a real-time IP camera monitoring and license plate recognition system with Jetson."
            highlights={["jetson"]}
          />
        </li>
        <li>
          Created a high-performance desktop music player with advanced playback
          features and offline support.
        </li>
      </ul>
    ),
  },
  {
    title: "Freelancer",
    company: "Self Employed",
    duration: "",
    description: (
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>
          <HighlightedText
            text="Developed a full-stack tour booking platform using React, Redux, Node.js, MongoDB, and AWS."
            highlights={["react", "redux", "node.js", "mongodb", "aws"]}
          />
        </li>
        <li>
          <HighlightedText
            text="Engineered a real-time IP camera monitoring system with Jetson for license plate recognition."
            highlights={["jetson"]}
          />
        </li>
        <li>
          Creator of programming and tech content on YouTube, with a community
          of over 3.5k subscribers.
        </li>
      </ul>
    ),
  },
];

const PastExperience = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl md:text-3xl mt-4 mb-10 font-bold flex items-center gap-3">
        <Briefcase className="w-8 h-8 md:w-9 md:h-9" />
        Past Experience
      </h2>
      <div>
        {experiences.map((experience, index) => (
          <WorkExBox
            key={experience.company}
            {...experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default PastExperience;
