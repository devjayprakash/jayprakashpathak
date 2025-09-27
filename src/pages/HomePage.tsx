import ContactSection from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import PastExperience from "../components/PastExperience";
import ProjectsSection from "../components/ProjectsSection";
import TechStack from "../components/TechStack";
import YoutubeSection from "../components/YoutubeSection";
import { AppLayout } from "../layouts/AppLayout";

const HomePage = () => {
  return (
    <AppLayout>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="experience">
        <PastExperience />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="youtube">
        <YoutubeSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </AppLayout>
  );
};

export default HomePage;
