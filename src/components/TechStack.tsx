import { motion } from "framer-motion";
import { Code } from "lucide-react";

const techStack = {
  Frontend: [
    { name: "JavaScript (ES6+)", icon: "/javascript.png" },
    { name: "TypeScript", icon: "/typescript.png" },
    { name: "React.js", icon: "/reactjs.png" },
    { name: "Next.js", icon: "/next.svg" },
    { name: "Redux", icon: "/redux.webp" },
    { name: "MobX", icon: "/mobx.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
  ],
  "Backend & Databases": [
    { name: "Node.js", icon: "/node.png" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "Go", icon: "/golang.png" },
    { name: "Python", icon: "/python.png" },
    { name: "GraphQL", icon: "/graphql.svg.png" },
    { name: "PostgreSQL", icon: "/postgres.png" },
    { name: "MongoDB", icon: "/postgres.png" },
    { name: "Redis", icon: "/redix.png" },
    { name: "Prisma", icon: "/prisma.png" },
    { name: "Sequelize", icon: "/sequlize.png" },
    { name: "Kafka", icon: "/kafka.svg" },
  ],
  "Mobile Development": [
    { name: "Capacitor.js", icon: "/capacitor.svg" },
    { name: "React Native", icon: "/reactnative.png" },
  ],
  "DevOps, Cloud & Tools": [
    { name: "AWS", icon: "/aws.png" },
    { name: "Docker", icon: "/docker.png" },
    { name: "GitHub Actions", icon: "/github.png" },
    { name: "Sentry", icon: "/sentry.webp" },
    { name: "Datadog", icon: "/datadog.svg" },
    { name: "Mixpanel", icon: "/mixpanel.jpeg" },
  ],
  "Applied Gen AI": [
    { name: "Pinecone", icon: "/pinecone.png" },
    { name: "LangChain", icon: "/langchain.jpg" },
    { name: "MCP", icon: "/mcp.png" },
  ],
  "AI & Embedded Systems": [{ name: "Jetson", icon: "/jetson.webp" }],
  CMS: [{ name: "Sanity", icon: "/sanity.png" }],
};

const TechCard = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="w-10 h-10 flex-shrink-0 flex flex-col items-center justify-center text-indigo-700">
      {icon ? (
        <img
          src={icon}
          alt={name}
          className="w-8 rounded-md overflow-hidden h-8 object-contain"
        />
      ) : (
        <div className="w-8 h-8 bg-gray-300 rounded-sm"></div>
      )}
    </div>
    <span className="font-semibold text-gray-700">{name}</span>
  </motion.div>
);

const TechStack = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl md:text-3xl mt-4 mb-10 font-bold flex items-center gap-3">
        <Code className="w-8 h-8 md:w-9 md:h-9" />
        Core Tech Stack
      </h2>

      {Object.entries(techStack).map(([category, techs]) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            {category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techs.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
