import { useState } from "react";
import { Card } from "./components/Card";
import brokenHeart from "./assets/brokenHeart.svg";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [answered2, setAnswered2] = useState(false);

  // Función para reiniciar al estado inicial
  const resetToStart = () => {
    setShowCard(false);
    setAnswered(false);
    setAnswered2(false);
  };

  const handleAnswer = (answer) => {
    if (answer === "yes") {
      setShowCard(true);
    }
    setAnswered(true);
  };

  const handleAnswer2 = (answer) => {
    if (answer === "yes") {
      setShowCard(false);
      setAnswered2(true);
    } else {
      resetToStart(); // Reiniciar al seleccionar "No"
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      {!answered && !answered2 && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">¿Quieres ver la sorpresa?</h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleAnswer("yes")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Sí
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              No
            </button>
          </div>
        </div>
      )}
      {answered && showCard && <Card />}
      {answered && !showCard && !answered2 && (
        <div className="flex flex-col items-center text-center mt-8 gap-6">
          <h2 className="text-xl font-bold">
            Groseraaaaa!! Estás segura que no quieres ver?
          </h2>
          <img src={brokenHeart} alt="heart" className="heart-q" />
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleAnswer2("yes")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Sí
            </button>
            <button
              onClick={() => handleAnswer2("no")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              No
            </button>
          </div>
        </div>
      )}
      {answered2 && !showCard && (
        <div className="flex flex-col items-center text-center mt-8 gap-6">
          <h2 className="text-xl font-bold">Bueno ahora entiendo, me wua llorar 😔</h2>
          <img src={brokenHeart} alt="heart" className="heart-q" />
          <iframe 
            width={"300"}
            height={"315"}
            src="https://www.youtube.com/embed/WznOYgm8KqY?autoplay=1&mute=0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
