import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const DwarfGame = () => {
  const [step, setStep] = useState(0);
  const [showDolphin, setShowDolphin] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);

  const zwerge = [
    { name: "Kletter-Zwerg", action: "klettert auf einen Baum" },
    { name: "Schnupper-Zwerg", action: "schnuppert, weil er Hunger hat" },
    { name: "Schlaf-Zwerg", action: "kuschelt sich in die Decke und schläft" },
    { name: "Renn-Zwerg", action: "rennt und hüpft" },
    { name: "Spiel-Zwerg", action: "zieht seine Kleidung an und spielt mit den anderen Zwergen" },
  ];

  const handleNext = () => {
    if (step < zwerge.length) {
      setStep(step + 1);
    } else if (step === zwerge.length) {
      setShowDolphin(true);
      setStep(step + 1);
    } else if (showDolphin && !showFinalScreen) {
      setShowFinalScreen(true);
    } else {
      setStep(0);
      setShowDolphin(false);
      setShowFinalScreen(false);
    }
  };

  useEffect(() => {
    let text = "";
    if (step < zwerge.length) {
      text = `${zwerge[step].name} ${zwerge[step].action}`;
    } else if (showDolphin && !showFinalScreen) {
      text = "Der Delphin holt den Renn-Zwerg ab und sie gehen gemeinsam in den See.";
    } else if (showFinalScreen) {
      text = "Das Spiel ist zu Ende. Möchtest du nochmal spielen?";
    } else {
      text = "Alle Zwerge sind da! Schau, wer jetzt kommt!";
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  }, [step, showDolphin, showFinalScreen]);

  const getImageForZwerg = (index: number) => {
    const images = [
      "/images/zwerg1.webp",
      "/images/zwerg2.webp",
      "/images/zwerg3.webp",
      "/images/zwerg4.webp",
      "/images/zwerg5.webp",
    ];
    return images[index];
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
      <Card className="w-full shadow-xl bg-white/90">
        <div className="p-6">
          <h1 className="font-bubblegum text-4xl mb-8 text-center text-vibrant-purple">
            Das Zwergespiel
          </h1>
          
          {step <= zwerge.length && !showDolphin && !showFinalScreen && (
            <div className="animate-fade-in">
              {step < zwerge.length ? (
                <>
                  <h2 className="text-2xl font-bubblegum mb-4 text-vibrant-purple">{zwerge[step].name}</h2>
                  <p className="text-lg mb-4 text-gray-700">{zwerge[step].action}</p>
                  <div className="w-full h-64 bg-soft-purple rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={getImageForZwerg(step)}
                      alt={zwerge[step].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bubblegum mb-4 text-vibrant-purple">Alle Zwerge sind da!</h2>
                  <p className="text-lg mb-4 text-gray-700">Schau, wer jetzt kommt!</p>
                </>
              )}
            </div>
          )}

          {showDolphin && !showFinalScreen && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bubblegum mb-4 text-vibrant-purple">Der Delphin kommt!</h2>
              <p className="text-lg mb-4 text-gray-700">
                Der Delphin holt den Renn-Zwerg ab und sie gehen gemeinsam in den See.
              </p>
              <div className="w-full h-64 bg-soft-blue rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/zwerg6.webp"
                  alt="Delphin und Zwerg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {showFinalScreen && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bubblegum mb-4 text-vibrant-purple">Das Spiel ist zu Ende!</h2>
              <p className="text-lg mb-4 text-gray-700">
                Möchtest du nochmal spielen?
              </p>
              <div className="w-full h-64 bg-soft-pink rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/zwerg7.webp"
                  alt="Spiel Ende"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <Button 
            onClick={handleNext} 
            className="w-full bg-vibrant-purple hover:bg-vibrant-purple/90 text-white font-bubblegum"
          >
            {showFinalScreen ? "Nochmal spielen" : "Weiter"}
          </Button>
        </div>
      </Card>
    </div>
  );
};