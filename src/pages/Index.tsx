import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Technology } from "@/components/Technology"
import { Team } from "@/components/Team"

import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
