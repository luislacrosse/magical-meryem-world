import { FloatingElements } from "@/components/FloatingElements";
import { FavoriteThings } from "@/components/FavoriteThings";
import { Star, GamepadIcon, BookOpen, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link to="/game">
              <Button className="bg-vibrant-purple hover:bg-vibrant-purple/90 gap-2 text-lg py-6 px-8">
                <GamepadIcon className="w-6 h-6" />
                Play Catch the Star!
              </Button>
            </Link>
            <Link to="/vocabulary">
              <Button className="bg-vibrant-purple hover:bg-vibrant-purple/90 gap-2 text-lg py-6 px-8">
                <BookOpen className="w-6 h-6" />
                Learn New Words!
              </Button>
            </Link>
            <Link to="/dwarfs">
              <Button className="bg-vibrant-purple hover:bg-vibrant-purple/90 gap-2 text-lg py-6 px-8">
                <Users className="w-6 h-6" />
                Play with Dwarfs!
              </Button>
            </Link>
            <Link to="/unicorn-story">
              <Button className="bg-vibrant-purple hover:bg-vibrant-purple/90 gap-2 text-lg py-6 px-8">
                <Sparkles className="w-6 h-6" />
                Unicorn Story
              </Button>
            </Link>
          </div>
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