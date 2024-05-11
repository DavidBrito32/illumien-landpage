import Logo from "../../../public/LOGO SEM SOMBRA.png";
import Cell from "../../../public/celular.png";
import { useContext } from "react";
import { FlagsContext } from "../../contexts/flagsContext";

const PageOne = () => {
    const { language } = useContext(FlagsContext);

  return (
      <div className="relative p-4 md:p-16 w-full h-screen flex items-center flex-col gap-1 md:gap-0">
          <div className="flex justify-center mt-14 md:mt-0 z-10 items-center w-5/5 md:w-full h-1/4 md:h-1/2 ">
            <img src={Logo} alt="Logomarca" className="object-contain md:object-contain lg:object-contain 2xl:object-cover w-4/4 md:w-ful h-96" />
          </div>

          <div className=" lg:w-5/5 lg:pl-26 2xl:pl-30 z-10 flex flex-wrap items-center justify-center duration-300 lg:justify-between h-1/2">
            {
              language === "pt-br" ? 
              (<h1 className="text-4xl md:text-3xl lg:text-5xl 2xl:text-5xl duration-500 w-full md:w-2/4 2xl:w-1/3 text-white text-center lg:text-center 2xl:text-center font-bold">
              Transformando seus sonhos em: <br />
              <span className={`relative text-secundary before:animate-maquina after:animate-cursor after:border-l after:content[''] after:absolute after:-right-1 after:w-full after:h-full after:border-sectext-secundary after:bg-theme`}></span>
            </h1>)
              :
              (<h1 className="text-4xl md:text-3xl lg:text-5xl 2xl:text-5xl duration-500 w-full md:w-2/4 2xl:w-1/3 text-white text-center lg:text-center 2xl:text-center font-bold" >Convirtiendo tus sueños en: <br /> <span className={`relative text-secundary before:animate-maquinaSpanish after:animate-cursor after:border-l after:content[''] after:absolute after:-right-1 after:w-full after:h-full after:border-sectext-secundary after:bg-theme`}></span></h1>)
            }            
            <div className="w-full md:w-2/4 lg:w-1/2 mt-6 md:mt-0 md:h-full relative flex justify-center items-center 2xl:mr-28">
              <img src={Cell} alt="Logomarca" className="object-contain z-10 w-full h-full" />
            </div>
          </div>
    </div>
  )
}

export default PageOne;
