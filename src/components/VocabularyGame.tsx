import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const words = [
  // Animals
  { english: 'CAT', french: 'CHAT', turkish: 'KEDİ', german: 'KATZE', emoji: '1F408' },
  { english: 'DOG', french: 'CHIEN', turkish: 'KÖPEK', german: 'HUND', emoji: '1F415' },
  { english: 'BIRD', french: 'OISEAU', turkish: 'KUŞ', german: 'VOGEL', emoji: '1F426' },
  { english: 'FISH', french: 'POISSON', turkish: 'BALIK', german: 'FISCH', emoji: '1F41F' },
  { english: 'BEAR', french: 'OURS', turkish: 'AYI', german: 'BÄR', emoji: '1F43B' },
  { english: 'COW', french: 'VACHE', turkish: 'İNEK', german: 'KUH', emoji: '1F404' },
  { english: 'PIG', french: 'COCHON', turkish: 'DOMUZ', german: 'SCHWEIN', emoji: '1F437' },
  { english: 'FROG', french: 'GRENOUILLE', turkish: 'KURBAĞA', german: 'FROSCH', emoji: '1F438' },
  { english: 'LION', french: 'LION', turkish: 'ASLAN', german: 'LÖWE', emoji: '1F981' },
  { english: 'DUCK', french: 'CANARD', turkish: 'ÖRDEK', german: 'ENTE', emoji: '1F986' },

  // Food
  { english: 'APPLE', french: 'POMME', turkish: 'ELMA', german: 'APFEL', emoji: '1F34E' },
  { english: 'BANANA', french: 'BANANE', turkish: 'MUZ', german: 'BANANE', emoji: '1F34C' },
  { english: 'BREAD', french: 'PAIN', turkish: 'EKMEK', german: 'BROT', emoji: '1F35E' },
  { english: 'CAKE', french: 'GÂTEAU', turkish: 'PASTA', german: 'KUCHEN', emoji: '1F370' },
  { english: 'MILK', french: 'LAIT', turkish: 'SÜT', german: 'MILCH', emoji: '1F95B' },
  { english: 'PIZZA', french: 'PIZZA', turkish: 'PİZZA', german: 'PIZZA', emoji: '1F355' },
  { english: 'EGG', french: 'ŒUF', turkish: 'YUMURTA', german: 'EI', emoji: '1F95A' },
  { english: 'CANDY', french: 'BONBON', turkish: 'ŞEKER', german: 'SÜSSIGKEIT', emoji: '1F36C' },
  { english: 'RICE', french: 'RIZ', turkish: 'PİRİNÇ', german: 'REIS', emoji: '1F35A' },
  { english: 'SOUP', french: 'SOUPE', turkish: 'ÇORBA', german: 'SUPPE', emoji: '1F372' },

  // Colors
  { english: 'RED', french: 'ROUGE', turkish: 'KIRMIZI', german: 'ROT', emoji: '1F534' },
  { english: 'BLUE', french: 'BLEU', turkish: 'MAVİ', german: 'BLAU', emoji: '1F535' },
  { english: 'GREEN', french: 'VERT', turkish: 'YEŞİL', german: 'GRÜN', emoji: '1F7E2' },
  { english: 'YELLOW', french: 'JAUNE', turkish: 'SARI', german: 'GELB', emoji: '1F7E1' },
  { english: 'BLACK', french: 'NOIR', turkish: 'SİYAH', german: 'SCHWARZ', emoji: '26AB' },
  { english: 'WHITE', french: 'BLANC', turkish: 'BEYAZ', german: 'WEISS', emoji: '26AA' },
  { english: 'PINK', french: 'ROSE', turkish: 'PEMBE', german: 'ROSA', emoji: '1F3E9' },
  { english: 'PURPLE', french: 'VIOLET', turkish: 'MOR', german: 'LILA', emoji: '1F7EA' },
  { english: 'BROWN', french: 'MARRON', turkish: 'KAHVERENGİ', german: 'BRAUN', emoji: '1F7EB' },
  { english: 'GRAY', french: 'GRIS', turkish: 'GRİ', german: 'GRAU', emoji: '26AA' },

  // Numbers
  { english: 'ONE', french: 'UN', turkish: 'BİR', german: 'EINS', emoji: '0031-FE0F-20E3' },
  { english: 'TWO', french: 'DEUX', turkish: 'İKİ', german: 'ZWEI', emoji: '0032-FE0F-20E3' },
  { english: 'THREE', french: 'TROIS', turkish: 'ÜÇ', german: 'DREI', emoji: '0033-FE0F-20E3' },
  { english: 'FOUR', french: 'QUATRE', turkish: 'DÖRT', german: 'VIER', emoji: '0034-FE0F-20E3' },
  { english: 'FIVE', french: 'CINQ', turkish: 'BEŞ', german: 'FÜNF', emoji: '0035-FE0F-20E3' },
  { english: 'SIX', french: 'SIX', turkish: 'ALTI', german: 'SECHS', emoji: '0036-FE0F-20E3' },
  { english: 'SEVEN', french: 'SEPT', turkish: 'YEDİ', german: 'SIEBEN', emoji: '0037-FE0F-20E3' },
  { english: 'EIGHT', french: 'HUIT', turkish: 'SEKİZ', german: 'ACHT', emoji: '0038-FE0F-20E3' },
  { english: 'NINE', french: 'NEUF', turkish: 'DOKUZ', german: 'NEUN', emoji: '0039-FE0F-20E3' },
  { english: 'TEN', french: 'DIX', turkish: 'ON', german: 'ZEHN', emoji: '1F51F' },

  // Body parts
  { english: 'EYE', french: 'ŒIL', turkish: 'GÖZ', german: 'AUGE', emoji: '1F441' },
  { english: 'NOSE', french: 'NEZ', turkish: 'BURUN', german: 'NASE', emoji: '1F443' },
  { english: 'EAR', french: 'OREILLE', turkish: 'KULAK', german: 'OHR', emoji: '1F442' },
  { english: 'HAND', french: 'MAIN', turkish: 'EL', german: 'HAND', emoji: '1F91A' },
  { english: 'FOOT', french: 'PIED', turkish: 'AYAK', german: 'FUSS', emoji: '1F9B6' },
  { english: 'HEAD', french: 'TÊTE', turkish: 'KAFA', german: 'KOPF', emoji: '1F9D1' },
  { english: 'HAIR', french: 'CHEVEUX', turkish: 'SAÇ', german: 'HAAR', emoji: '1F9B0' },
  { english: 'MOUTH', french: 'BOUCHE', turkish: 'AĞIZ', german: 'MUND', emoji: '1F444' },
  { english: 'ARM', french: 'BRAS', turkish: 'KOL', german: 'ARM', emoji: '1F4AA' },
  { english: 'LEG', french: 'JAMBE', turkish: 'BACAK', german: 'BEIN', emoji: '1F9B5' },

  // Clothes
  { english: 'HAT', french: 'CHAPEAU', turkish: 'ŞAPKA', german: 'HUT', emoji: '1F3A9' },
  { english: 'SHOE', french: 'CHAUSSURE', turkish: 'AYAKKABI', german: 'SCHUH', emoji: '1F45F' },
  { english: 'SOCK', french: 'CHAUSSETTE', turkish: 'ÇORAP', german: 'SOCKE', emoji: '1F9E6' },
  { english: 'SHIRT', french: 'CHEMISE', turkish: 'GÖMLEK', german: 'HEMD', emoji: '1F455' },
  { english: 'PANTS', french: 'PANTALON', turkish: 'PANTOLON', german: 'HOSE', emoji: '1F456' },
  { english: 'DRESS', french: 'ROBE', turkish: 'ELBİSE', german: 'KLEID', emoji: '1F457' },
  { english: 'COAT', french: 'MANTEAU', turkish: 'PALTO', german: 'MANTEL', emoji: '1F9E5' },
  { english: 'SCARF', french: 'ÉCHARPE', turkish: 'ATKΙ', german: 'SCHAL', emoji: '1F9E3' },
  { english: 'GLOVE', french: 'GANT', turkish: 'ELDİVEN', german: 'HANDSCHUH', emoji: '1F9E4' },
  { english: 'BELT', french: 'CEINTURE', turkish: 'KEMER', german: 'GÜRTEL', emoji: '1F9AF' },

  // Nature
  { english: 'SUN', french: 'SOLEIL', turkish: 'GÜNEŞ', german: 'SONNE', emoji: '2600' },
  { english: 'MOON', french: 'LUNE', turkish: 'AY', german: 'MOND', emoji: '1F319' },
  { english: 'STAR', french: 'ÉTOILE', turkish: 'YILDIZ', german: 'STERN', emoji: '2B50' },
  { english: 'RAIN', french: 'PLUIE', turkish: 'YAĞMUR', german: 'REGEN', emoji: '1F327' },
  { english: 'SNOW', french: 'NEIGE', turkish: 'KAR', german: 'SCHNEE', emoji: '1F328' },
  { english: 'TREE', french: 'ARBRE', turkish: 'AĞAÇ', german: 'BAUM', emoji: '1F333' },
  { english: 'FLOWER', french: 'FLEUR', turkish: 'ÇİÇEK', german: 'BLUME', emoji: '1F33C' },
  { english: 'LEAF', french: 'FEUILLE', turkish: 'YAPRAK', german: 'BLATT', emoji: '1F343' },
  { english: 'CLOUD', french: 'NUAGE', turkish: 'BULUT', german: 'WOLKE', emoji: '2601' },
  { english: 'WIND', french: 'VENT', turkish: 'RÜZGAR', german: 'WIND', emoji: '1F32C' },

  // Household items
  { english: 'BED', french: 'LIT', turkish: 'YATAK', german: 'BETT', emoji: '1F6CF' },
  { english: 'CHAIR', french: 'CHAISE', turkish: 'SANDALYE', german: 'STUHL', emoji: '1FA91' },
  { english: 'TABLE', french: 'TABLE', turkish: 'MASA', german: 'TISCH', emoji: '1F6A2' },
  { english: 'DOOR', french: 'PORTE', turkish: 'KAPI', german: 'TÜR', emoji: '1F6AA' },
  { english: 'LAMP', french: 'LAMPE', turkish: 'LAMBA', german: 'LAMPE', emoji: '1F4A1' },
  { english: 'CLOCK', french: 'HORLOGE', turkish: 'SAAT', german: 'UHR', emoji: '1F570' },
  { english: 'BOOK', french: 'LIVRE', turkish: 'KİTAP', german: 'BUCH', emoji: '1F4D6' },
  { english: 'PEN', french: 'STYLO', turkish: 'KALEM', german: 'STIFT', emoji: '1F58A' },
  { english: 'CUP', french: 'TASSE', turkish: 'FİNCAN', german: 'TASSE', emoji: '1F964' },
  { english: 'PLATE', french: 'ASSIETTE', turkish: 'TABAK', german: 'TELLER', emoji: '1F37D' },

  // Vehicles
  { english: 'CAR', french: 'VOITURE', turkish: 'ARABA', german: 'AUTO', emoji: '1F697' },
  { english: 'BUS', french: 'BUS', turkish: 'OTOBÜS', german: 'BUS', emoji: '1F68C' },
  { english: 'BIKE', french: 'VÉLO', turkish: 'BİSİKLET', german: 'FAHRRAD', emoji: '1F6B2' },
  { english: 'BOAT', french: 'BATEAU', turkish: 'TEKNE', german: 'BOOT', emoji: '26F5' },
  { english: 'PLANE', french: 'AVION', turkish: 'UÇAK', german: 'FLUGZEUG', emoji: '2708' },
  { english: 'TRAIN', french: 'TRAIN', turkish: 'TREN', german: 'ZUG', emoji: '1F686' },
  { english: 'TAXI', french: 'TAXI', turkish: 'TAKSİ', german: 'TAXI', emoji: '1F695' },
  { english: 'SHIP', french: 'NAVIRE', turkish: 'GEMİ', german: 'SCHIFF', emoji: '1F6A2' },
  { english: 'TRUCK', french: 'CAMION', turkish: 'KAMYON', german: 'LKW', emoji: '1F69A' },
  { english: 'HELICOPTER', french: 'HÉLICOPTÈRE', turkish: 'HELİKOPTER', german: 'HUBSCHRAUBER', emoji: '1F681' }
]

export const VocabularyGame = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  useEffect(() => {
    const timer = setInterval(nextWord, 5000); // Change word every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
      <Card className="w-full shadow-xl bg-white/90">
        <CardContent className="p-6">
          <div className="mb-4 h-48 relative overflow-hidden rounded-lg bg-white flex items-center justify-center">
            <img
              src={`https://openmoji.org/data/color/svg/${currentWord.emoji}.svg`}
              alt={currentWord.english}
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-soft-pink p-2 rounded">
              <span className="font-bubblegum text-vibrant-purple">{currentWord.french}</span>
            </div>
            <div className="bg-soft-purple p-2 rounded">
              <span className="font-bubblegum text-vibrant-purple">{currentWord.turkish}</span>
            </div>
            <div className="bg-soft-yellow p-2 rounded">
              <span className="font-bubblegum text-vibrant-purple">{currentWord.english}</span>
            </div>
            <div className="bg-white p-2 rounded border-2 border-soft-purple">
              <span className="font-bubblegum text-vibrant-purple">{currentWord.german}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Button 
        onClick={nextWord} 
        className="mt-4 bg-vibrant-purple hover:bg-vibrant-purple/90 text-white font-bubblegum"
      >
        Next Word
      </Button>
      <p className="mt-2 text-xs text-vibrant-purple/70">Images provided by OpenMoji</p>
    </div>
  );
};
