import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";

const Home = () => {
  return (
    <main className="space-y-16 p-6 max-w-7xl mx-auto">
      <Hero />
      <Features />
      <Stats />
    </main>
  );
};

export default Home;
