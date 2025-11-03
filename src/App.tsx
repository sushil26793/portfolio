import { Layout } from "./components/layout/Layout";
import { About } from "./components/section/About";
import { Contact } from "./components/section/Contact";
import { Experience } from "./components/section/Experience";
import { Hero } from "./components/section/Hero";
import { Projects } from "./components/section/Projects";
import { TechStack } from "./components/section/TechStack";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}


