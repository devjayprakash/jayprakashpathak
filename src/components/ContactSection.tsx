import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail size={24} />,
    text: "jayprkshpthk@gmail.com",
    href: "mailto:jayprkshpthk@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    text: "+91 93411 36176",
    href: "tel:+919341136176",
  },
  {
    icon: <Linkedin size={24} />,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/jay-prakash-pathak-6759661b3/",
  },
];

const ContactSection = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl md:text-3xl mt-4 mb-10 font-bold">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {contactDetails.map((detail, index) => (
          <motion.a
            key={index}
            href={detail.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="text-indigo-700">{detail.icon}</div>
            <span className="font-semibold text-gray-700">{detail.text}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
