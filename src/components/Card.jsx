import { useState, useRef } from 'react';
import firstPic from "../assets/firstPic.jpeg";
import secondPic from "../assets/secondPic.jpeg";
import thirdPic from "../assets/thirdPic.jpeg";
import fourthPic from "../assets/fourthPic.jpeg";
import fifthPic from "../assets/fifthPic.jpeg";
import sixthPic from "../assets/sixthPic.jpeg";
import '../style.css';
import heart from "../assets/heart.svg";
import perla from "../assets/Perla.mp3";

export const Card = () => {
  const pictures = [firstPic, secondPic, thirdPic, fourthPic, fifthPic, sixthPic];
  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimatingPhrase, setIsAnimatingPhrase] = useState(false);
  const [isAnimatingOn, setIsAnimatingOn] = useState(true);
  const audioRef = useRef(new Audio(perla));
  const phrases = [
    "Hay algo especial en ti que me atrae muchísimo, y no quería guardármelo más",
    "Quiero ser honesto contigo: me gustas mucho y siento que me encanta pasar tiempo contigo",
    "Cada vez que estoy contigo, siento que el tiempo pasa volando. Me encantas",
    "Me gusta la forma en que haces que las cosas simples se sientan mágicas",
    "Eres como el Wi-Fi: cuando estás cerca, todo funciona mejor",
    "Contigo, las estrellas no solo están en el cielo, están en cada momento que compartimos",
    "Eres como una biblioteca infinita: contigo siempre hay algo nuevo por explorar",
    "Eres como un libro escrito por las estrellas, cada palabra en ti tiene un brillo especial"
  ];

  const nextPic = () => {
    setCurrentPicIndex((currentPicIndex + 1) % pictures.length);
  };

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrentPhraseIndex(randomIndex);

    setIsAnimatingPhrase(false);
    setTimeout(() => {
      setIsAnimatingPhrase(true);
    }, 0);
  };

  const playAudio = () => {
    audioRef.current.loop = true;
    audioRef.current.play().catch(error => {
      console.error("Error al reproducir el audio:", error);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6 relative overflow-hidden">
      <div className="flex justify-center font-bold items-center gap-4">
        <h2 className={`text-white ${isAnimatingOn ? 'animate-sway animate-iteration-count-infinite' : ''}`}>
          Presiona la foto
        </h2>
        <img className="heart" src={heart} alt="Heart" />
      </div>
      <div
        className="border-8 border-solid border-white w-[300px] h-[420px] overflow-hidden"
        onClick={() => {
          nextPic();
          playAudio();
          setIsAnimatingOn(false);
          getRandomPhrase();
        }}
      >
        <img
          className="custom-picture"
          src={pictures[currentPicIndex]}
          alt={`Picture ${currentPicIndex + 1}`}
        />
      </div>
      <div className={`text-center text-white font-bold ${isAnimatingPhrase ? 'animate-dancing' : ''}`}>
        <h1 className='animate-dancing'>
          {phrases[currentPhraseIndex]}
        </h1>
      </div>
      <div className="flex justify-center font-bold items-center gap-4">
        <div className="relative flex items-center justify-center w-[50px] h-[50px]">
          <img className="heart-m" src={heart} alt="Heart T" />
          <span className="absolute text-white font-bold text-lg">T</span>
        </div>
        <div className="relative flex items-center justify-center w-[50px] h-[50px]">
          <img className="heart-q" src={heart} alt="Heart Q" />
          <span className="absolute text-white font-bold text-lg">Q</span>
        </div>
        <div className="relative flex items-center justify-center w-[50px] h-[50px]">
          <img className="heart-m" src={heart} alt="Heart M" />
          <span className="absolute text-white font-bold text-lg">M</span>
        </div>
      </div>
    </div>
  );  
};
