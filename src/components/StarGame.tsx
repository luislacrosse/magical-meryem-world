import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export const StarGame = () => {
  const [score, setScore] = useState(0);
  const [starPosition, setStarPosition] = useState({ x: 50, y: 50 });
  const [isPlaying, setIsPlaying] = useState(false);

  const moveStar = () => {
    const newX = Math.random() * 80; // Keep within 80% of container width
    const newY = Math.random() * 80; // Keep within 80% of container height
    setStarPosition({ x: newX, y: newY });
  };

  const catchStar = () => {
    setScore(score + 1);
    moveStar();
    console.log("Star caught! New score:", score + 1);
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    moveStar();
    console.log("Game started!");
  };

  return (
    <div className="relative w-full max-w-xl mx-auto h-[300px] bg-soft-purple rounded-lg p-4 overflow-hidden">
      {!isPlaying ? (
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <h3 className="font-bubblegum text-2xl text-vibrant-purple">Catch the Star!</h3>
          <Button onClick={startGame} className="bg-vibrant-purple hover:bg-vibrant-purple/90">
            Start Game
          </Button>
        </div>
      ) : (
        <>
          <div className="absolute top-4 left-4 font-bubblegum text-xl text-vibrant-purple">
            Stars: {score}
          </div>
          <div
            className="absolute cursor-pointer transition-all duration-300 animate-twinkle"
            style={{ left: `${starPosition.x}%`, top: `${starPosition.y}%` }}
            onClick={catchStar}
          >
            <Star className="w-8 h-8 text-vibrant-purple" fill="currentColor" />
          </div>
        </>
      )}
    </div>
  );
};