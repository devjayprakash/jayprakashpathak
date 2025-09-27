import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 mb-20 md:mb-0">{children}</main>
      <Footer />
    </>
  );
};
