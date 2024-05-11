import { useContext } from "react";
import Icon from "../../assets/botao/botao.png";
import Brasil from "./assets/brasil.png";
import { FlagsContext } from "../../contexts/flagsContext";
import Espanha from "./assets/espanha.png";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Button = () => {
  const { language, setLanguage, fbq } = useContext(FlagsContext);
  return (
    <div className="group w-16 h-16  lg:w-20 lg:h-20 rounded-full fixed bottom-5 right-4 z-50 transition-all duration-500">
      <div className="relative w-16 h-16 lg:w-full lg:h-full rounded-full">
        <img src={Icon} alt="Icone" className="animate-bounce " />
        {/* Icones */}
        <div className="z-0 bg-theme-g absolute flex justify-center items-center w-10 h-10 rounded-full -bottom-3 translate-y-1 -translate-x-10 -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hover:scale-125">
          {language === "pt-br" && (
            <img
              src={Espanha}
              alt="Bandeira do Brasil"
              className="w-4/5 h-4/5"
              onClick={() => {
                setLanguage("es")
                fbq("track", "Button_Language_Light")
              }
              }
            />
          )}
          {language === "es" && (
            <img
              src={Brasil}
              alt="Bandeira da espanha"
              className="w-4/5 h-4/5"
              onClick={() => {
                setLanguage("pt-br")
                fbq("track", "Button_Language_Light")
              }}
            />
          )}
        </div>

        <div className="z-10 bg-theme-g absolute flex justify-center items-center w-10 h-10 rounded-full  -bottom-3 -left-5 -translate-y-14 lg:-translate-y-16 -translate-x-10  opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hover:scale-125">
          <a
            href={`whatsapp://send?phone=+34623937593&text=${
              language === "pt-br"
                ? "Olá, eu quero saber mais!"
                : "Hola, quiero saber más!"
            }`}
            target="_blank"
            onClick={() => fbq("track", "Button_Whatsapp_Light")}
          >
            <IoLogoWhatsapp className="text-3xl text-secundary transition-all duration-500" />
          </a>
        </div>
        <div className="z-10 bg-theme-g absolute flex justify-center items-center w-10 h-10 rounded-full  -bottom-2 -left-5 -translate-y-24 lg:-translate-y-28  -translate-x-1 lg:translate-x-1  opacity-0 group-hover:opacity-100 transition-opacity md:hover:scale-125 duration-300">
          <a href="https://www.instagram.com/illumien.eu/" target="_blank" onClick={() => fbq("track", "Button_Instagram_Light")}>
            <FaInstagram className="text-3xl text-secundary transition-all duration-500" />
          </a>
        </div>
        <div className="z-10 bg-theme-g absolute flex justify-center items-center w-10 h-10 rounded-full  -bottom-1 lg:-left-6 -left-5 -translate-y-24 lg:-translate-y-28 translate-x-14 lg:translate-x-20  opacity-0 group-hover:opacity-100 transition-opacity md:hover:scale-125 duration-500">
          <a href="mailto:illumiencontacto@gmail.com" onClick={() => fbq("track", "Button_Email_Light")}>
            <HiOutlineMail className="text-3xl text-secundary transition-all duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Button;
