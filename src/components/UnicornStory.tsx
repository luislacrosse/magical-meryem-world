import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const storyData = [
  {
    text: "Das Einhorn traut seinen Augen kaum und geht in den Wald.",
    img: "/images/unicorn/A_whimsical_forest_scene_featuring_a_white_unicorn.png"
  },
  {
    text: "Zwei Einhörner rennen und hüpfen fröhlich zusammen.",
    img: "/images/unicorn/A_meadow_scene_featuring_two_white_unicorns_with_s.png"
  },
  {
    text: "Ein Einhorn geht nach Hause und ruht sich aus.",
    img: "/images/unicorn/A_serene_nighttime_scene_featuring_a_white_unicorn.png"
  },
  {
    text: "Ein trauriges Einhorn, weil ein anderes Einhorn die Zunge herausstreckt.",
    img: "/images/unicorn/A_grassy_meadow_scene_featuring_a_sad_white_unicor.png"
  },
  {
    text: "Ein Einhorn schwimmt mit Delfinen im Fluss und trifft sogar einen Hai.",
    img: "/images/unicorn/A_vibrant_river_scene_featuring_a_white_unicorn_wi.png"
  }
];

export const UnicornStory = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(storyData[currentScene].text);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  }, [currentScene]);

  const handleNext = () => {
    setCurrentScene((prev) => (prev + 1) % storyData.length);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
      <Card className="w-full shadow-xl bg-white/90">
        <div className="p-6">
          <h1 className="font-bubblegum text-4xl mb-8 text-center text-vibrant-purple">
            Einhorn Geschichte
          </h1>
          
          <div className="animate-fade-in">
            <p className="text-lg mb-4 text-gray-700">{storyData[currentScene].text}</p>
            <div className="w-full h-64 bg-soft-purple rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={storyData[currentScene].img}
                alt={storyData[currentScene].text}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Button 
            onClick={handleNext} 
            className="w-full bg-vibrant-purple hover:bg-vibrant-purple/90 text-white font-bubblegum"
          >
            {currentScene === storyData.length - 1 ? "Von vorne beginnen" : "Weiter"}
          </Button>
        </div>
      </Card>
    </div>
  );
};