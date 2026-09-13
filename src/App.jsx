import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Loader from "./components/Loader.jsx";
import TechCard from "./components/TechCard.jsx";
import StackSidebar from "./components/StackSidebar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
 
  const [technologies, setTechnologies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-[1fr_300px] gap-6 items-start">
            {/* 3-column responsive cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

            <StackSidebar
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
}

export default App;
