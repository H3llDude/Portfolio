import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiLaravel,
  SiReact,
  SiStrapi,
  SiCplusplus,
} from "react-icons/si";
import Navbar from "@/components/Navbar";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <div className="bg-black text-white Main-Container min-h-screen px-6 md:px-20">
      {/* Header */}
      <Navbar />

      {/* Profile Section */}
      <section className="bg-gray-900 p-6 rounded-lg mt-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold">Saad Elkarrak</h2>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> Casablanca, Morocco
        </p>
        <p>
          I am a 22-year-old Full-Stack Web Developer. I have been programming
          for more than 4 years.
        </p>
        <div className="flex gap-4 text-xl">
          <a href="#">
            <FaEnvelope />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <section className="mt-10">
        <h3 className="text-2xl font-bold">Experience</h3>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-blue-400">
            SG2I Consulting
          </h4>
          <p className="text-gray-400">Full-Stack Web and Mobile Developer</p>
          <p className="text-gray-500">March 2024 – Present</p>
          <p className="mt-2 text-gray-300">
            I develop portable user interfaces using Next.js and TypeScript and
            built a system to analyze JSON configurations, dynamically loading
            components and content for flexible site management. Additionally, I
            developed a SaaS mobile application using Dart, Flutter, Laravel,
            and Firebase.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-blue-400">
            SG2I Consulting
          </h4>
          <p className="text-gray-400">Full-Stack Web Developer</p>
          <p className="text-gray-500">April 2023 – June 2023</p>
          <p className="mt-2 text-gray-300">
            I led the development of a comprehensive SaaS booking platform using
            CodeIgniter, designing a responsive and intuitive interface.
          </p>
        </div>
      </section>

      {/* My Work Section */}
      <section className="mt-10">
        <h3 className="text-2xl font-bold">My Work</h3>
        <div className="bg-gray-800 p-6 rounded-lg mt-4">
          <h4 className="text-lg font-semibold">Project Name</h4>
          <div className="flex gap-4 mt-2">
            <span className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
              <SiReact /> React
            </span>
            <span className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
              <SiLaravel /> Laravel
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-10 text-gray-500">
        <p>© 2025 Saad Elkarrak</p>
        <p>
          Built with Next.js. Look at some of my projects on{" "}
          <a href="#" className="text-blue-400 hover:underline">
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
