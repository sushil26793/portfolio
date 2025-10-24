import { Header } from "./components/layout/Header";
import { About } from "./components/section/About";
import { Hero } from "./components/section/Hero";
import { TechStack } from "./components/section/TechStack";

export default function App() {
  return (
    
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <TechStack/>
    </div>
  );
}


