import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-200 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f293780,transparent_55%),linear-gradient(to_right,#1f293714_1px,transparent_1px),linear-gradient(to_bottom,#020617cc_1px,transparent_1px)] bg-[size:100%_100%,16px_32px,16px_32px]"></div>
          <div className="pointer-events-none absolute inset-x-0 top-[-20%] mx-auto h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_330px_at_50%_320px,#6b728040,transparent)] blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20 pt-6 lg:max-w-5xl lg:px-8 lg:pt-10">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
