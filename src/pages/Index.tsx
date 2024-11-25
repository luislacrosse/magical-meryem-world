import { FloatingElements } from "@/components/FloatingElements";
import { FavoriteThings } from "@/components/FavoriteThings";
import { StarGame } from "@/components/StarGame";
import { Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg overflow-hidden relative">
      <FloatingElements />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-float">
          <h1 className="font-bubblegum text-6xl md:text-7xl mb-4 text-vibrant-purple">
            MERYEM
            <Star className="inline-block ml-4 w-8 h-8" fill="currentColor" />
          </h1>
          <p className="text-2xl text-gray-600">Welcome to My Magical World!</p>
        </div>

        <section className="mb-16">
          <h2 className="font-bubblegum text-4xl text-center mb-8 text-vibrant-purple">
            Play with Me!
          </h2>
          <StarGame />
        </section>

        <section>
          <h2 className="font-bubblegum text-4xl text-center mb-8 text-vibrant-purple">
            My Favorite Things
          </h2>
          <FavoriteThings />
        </section>
      </main>
    </div>
  );
};

export default Index;