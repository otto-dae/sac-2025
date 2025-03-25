import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import animations from "../animations";
import cursorAnimation from "../../assets/lottie/cursor.json";
import { Howl } from "howler";

interface LegoInputProps {
  value?: string;
  onChange?: (newValue: string) => void;
  maxLength?: number;
  className?: string;
}

const LegoInput: React.FC<LegoInputProps> = ({
  value = "",
  onChange,
  maxLength = 6,
  className = "",
}) => {
  const [inputValue, setInputValue] = useState<string[]>(value.split(""));
  const [isFocused, setIsFocused] = useState(false);
  const [isClient, setIsClient] = useState(false);  // New state to check if we are on the client
  const soundRefs = useRef<Howl[]>([]);
  const activeSounds = useRef<Map<number, Howl>>(new Map());

  // Check if the code is running on the client side
  useEffect(() => {
    setIsClient(true); // Set to true once mounted on the client
  }, []);

  // Handle sound effects setup only on the client side
  useEffect(() => {
    const soundFiles = [
      "/media/lego-sound-1.mp3",
      "/media/lego-sound-2.mp3",
      "/media/lego-sound-3.mp3",
      "/media/lego-sound-4.mp3",
    ];

    if (!isClient) return; // Avoid running this on the server

    soundRefs.current = soundFiles.map((src) => new Howl({ src: [src] , html5: true }));

    return () => {
      soundRefs.current.forEach((sound) => sound.unload());
    };
  }, [isClient]);

  useEffect(() => {
    setInputValue(value.split(""));
  }, [value]);

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, ""); // Solo números
    const digits = newValue.split("").slice(0, maxLength);
  
    // Identificar índices eliminados
    const removedIndexes = inputValue
      .map((_, index) => (digits[index] !== inputValue[index] ? index : null))
      .filter((index): index is number => index !== null);
  
    // Detener sonidos de los índices eliminados
    removedIndexes.forEach((index) => {
      const sound = activeSounds.current.get(index);
      if (sound) {
        sound.stop();
        activeSounds.current.delete(index);
      }
    });
  
    setInputValue(digits);
    onChange?.(digits.join(""));
  
    // Si se agregó un número, reproducir un sonido aleatorio
    if (digits.length > inputValue.length) {
      const lastDigitIndex = digits.length - 1;
      const randomSound = soundRefs.current[Math.floor(Math.random() * soundRefs.current.length)];
      randomSound.play();
      activeSounds.current.set(lastDigitIndex, randomSound);
    }
  };  

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className={`flex flex-col items-center justify-center w-full h-auto ${className}`}>
      {/* Contenedor de números */}
      <div
        className={`flex gap-1 md:gap-2.5 border-2 border-blacksac rounded-md transition-all ${
          isFocused ? "border-blue-400" : ""
        }`}
        onClick={() => setIsFocused(true)}
      >
        {[...Array(maxLength)].map((_, index) => {
          const digit = inputValue[index];
          return (
            <div
              key={index}
              className="w-[12vw] max-w-24 h-[16vw] max-h-32 flex items-center justify-center"
            >
              {digit ? (
                <Lottie
                  animationData={animations[Number(digit)]}
                  loop={false}
                  autoplay
                />
              ) : index === inputValue.length ? (
                <Lottie animationData={cursorAnimation} loop autoplay />
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>

      {/* Input oculto */}
      <input
        autoFocus
        type="text"
        maxLength={maxLength}
        onChange={(e) => handleTextInput(e)}
        value={inputValue.join("")}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="absolute w-[78vw] max-w-157 h-[16vw] max-h-32 opacity-0"
      />
    </div>
  );
};

export default LegoInput;
