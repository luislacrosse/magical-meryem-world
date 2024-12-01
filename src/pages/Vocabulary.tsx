import { VocabularyGame } from "@/components/VocabularyGame";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Vocabulary = () => {
  return (
    <div className="min-h-screen gradient-bg overflow-hidden relative p-4">
      <Link to="/" className="absolute top-4 left-4">
        <Button variant="outline" className="gap-2">
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="font-bubblegum text-4xl md:text-5xl text-center mb-8 text-vibrant-purple">
          Learn New Words!
        </h1>
        <VocabularyGame />
      </main>
    </div>
  );
};

export default Vocabulary;