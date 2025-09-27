import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Home,
  Mail,
  MoreHorizontal,
  User,
  Video,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navbarOptions = [
  {
    title: "[home]",
    path: "/#",
    icon: <Home />,
  },
  {
    title: "[experience]",
    path: "/#experience",
    icon: <User />,
  },
  {
    title: "[projects]",
    path: "/#projects",
    icon: <Briefcase />,
  },
  {
    title: "[tech-stack]",
    path: "/#tech-stack",
    icon: <Code />,
  },
  {
    title: "[youtube]",
    path: "/#youtube",
    icon: <Video />,
  },
  {
    title: "[contact]",
    path: "/#contact",
    icon: <Mail />,
  },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const mainNavOptions = navbarOptions.slice(0, 4);
  const moreNavOptions = navbarOptions.slice(4);

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="container bg-white mx-auto md:flex justify-between items-center px-3 fixed top-0 left-0 right-0 z-50 border-b border-gray-200"
      >
        <div className="md:text-2xl text-xl font-bold md:py-6 py-3 text-indigo-700">
          Jay Prakash Pathak
        </div>
        <div className="md:flex gap-4 hidden">
          {navbarOptions.map((option) => (
            <a
              key={option.path}
              href={option.path}
              className={`${
                location.hash === option.path.replace("/", "")
                  ? "text-indigo-700 font-bold"
                  : "text-gray-500"
              }`}
            >
              {option.title}
            </a>
          ))}
        </div>
      </motion.div>
      <div className="md:hidden fixed bg-white bottom-0 left-0 right-0 z-50 flex w-full">
        {mainNavOptions.map((option) => (
          <a
            key={option.path}
            href={option.path}
            className={`flex-1 text-center py-3 flex flex-col items-center gap-1 ${
              location.hash === option.path.replace("/", "")
                ? "text-indigo-700 font-bold"
                : "text-gray-500"
            }`}
          >
            {option.icon}
            <span className="text-[10px]">
              {option.title.replace(/[[\]]/g, "")}
            </span>
          </a>
        ))}
        <button
          onClick={() => setIsMoreMenuOpen(true)}
          className="flex-1 text-center py-3 flex flex-col items-center gap-1 text-gray-500"
        >
          <MoreHorizontal />
          <span className="text-[10px]">More</span>
        </button>
      </div>
      <AnimatePresence>
        {isMoreMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 md:hidden z-[100]"
              onClick={() => setIsMoreMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white p-4 rounded-t-2xl"
            >
              <button
                onClick={() => setIsMoreMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-500"
              >
                <X />
              </button>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {moreNavOptions.map((option) => (
                  <a
                    key={option.path}
                    href={option.path}
                    onClick={() => setIsMoreMenuOpen(false)}
                    className={`text-center py-3 flex flex-col items-center gap-1 ${
                      location.hash === option.path.replace("/", "")
                        ? "text-indigo-700 font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {option.icon}
                    <span className="text-sm">
                      {option.title.replace(/[[\]]/g, "")}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
