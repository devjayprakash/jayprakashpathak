import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github />,
    href: "https://github.com/devjayprakash",
  },
  {
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/jay-prakash-pathak-6759661b3/",
  },
  {
    icon: <Mail />,
    href: "mailto:jayprkshpthk@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 hidden md:block">
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Jay Prakash Pathak. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-700 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
