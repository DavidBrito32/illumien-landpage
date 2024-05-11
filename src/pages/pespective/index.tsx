import { useContext } from "react";
import VideoCarrousel from "./videoCarrousel";
import { FlagsContext } from "../../contexts/flagsContext";

const Pespectives = () => {
  const { language } = useContext(FlagsContext);
  return (
    <div className="relative px-5 h-fit md:h-fit w-full">
      <div className="w-full py-10 h-fit flex flex-col gap-5 md:gap-16 items-center z-10">
        <h1 className="w-full text-3xl text-left md:text-5xl font-bold text-white z-10">
          {language === "pt-br" ? "Perspectivas em foco!" : "¡Perspectivas enfocadas!"}
        </h1>
        <VideoCarrousel />
      </div>
    </div>
  );
};

export default Pespectives;
