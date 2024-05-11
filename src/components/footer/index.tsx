import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Espanha from "../../../public/espanha.png";
import Brasil from "../../../public/brasil.png";
import img from "../../../public/LOGO SEM SOMBRA.png";
import { SiGooglemaps } from "react-icons/si";
import { useContext } from "react";
import { FlagsContext } from "../../contexts/flagsContext";

const Footer = () => {
  const { language, fbq } = useContext(FlagsContext);

  return (
    <div className="w-full bg-black pb-12 md:pb-0 flex justify-center md:p-10 md:justify-around gap-8 md:gap-0 items-center flex-wrap">
      <div className="flex gap-3 flex-wrap w-full justify-center md:w-56 text-white order-2 md:order-0">
        <h3 className="w-full text-lg font-bold text-center">
          {language === "pt-br"
            ? "Nossas redes sociais"
            : "Nuestras redes sociales"}
        </h3>
        <a href="https://www.instagram.com/illumien.eu/" target="_blank" onClick={() => fbq("track", "Button_Instagram_Footer")}>
          <FaInstagram className="text-3xl hover:text-pink-600 hover:scale-125 duration-300" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61558151896422"
          target="_blank"
          onClick={() => fbq("track", "Button_Facebook_Footer")}
        >
          <FaFacebook className="text-3xl hover:text-blue-500 hover:scale-125 duration-300" />
        </a>
        <a href="mailto:illumiencontacto@gmail.com" target="_blank" onClick={() => fbq("track", "Button_Email_Footer")}>
          <FaMailBulk className="text-3xl hover:text-zinc-500 hover:scale-125 duration-300" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC2gU-q6Y9Ui3rz8rAFcwDgA"
          target="_blank"
          onClick={() => fbq("track", "Button_Youtube_Footer")}
        >
          <FaYoutube className="text-3xl hover:text-red-600 hover:scale-125 duration-300" />
        </a>
        <a
          href={`whatsapp://send?phone=+34623937593&text=${
            language === "pt-br"
              ? "Olá, eu quero saber mais!"
              : "Hola, quiero saber más!"
          }`}
          target="_blank"
          onClick={() => fbq("track", "Button_Whatsapp_Footer")}
        >
          <FaWhatsapp className="text-3xl hover:text-green-600 hover:scale-125 duration-300" />
        </a>
      </div>

      <img
        src={img}
        alt="Logotipo"
        className="w-full md:w-72 h-32 object-contain md:h-auto order-1 md:order-2"
      />

      <div className="group duration-300 mt-5 md:mt-0 flex flex-col gap-3 text-white order-3 md:order-3">
        <h3 className="duration-300 w-full text-lg font-bold text-center flex items-center gap-3">
          <SiGooglemaps className="duration-300 text-3xl group-hover:text-green-600 group-hover:scale-125" />{" "}
          {language === "pt-br" ? "Correspondência" : "Correspondencia"}
        </h3>
        <a href="https://maps.app.goo.gl/DkCJaxKmU6z1q2Ae8" target="_blank" onClick={() => fbq("track", "Button_Maps_Espanha_Footer")}>
          <h3 className="w-full flex gap-2 items-center justify-center text-base text-center font-bold duration-300 hover:underline">
            Granada - Espanã
            <img src={Espanha} alt="Bandeira do Brasil" className="w-5 h-5" />
          </h3>
        </a>
        <a href="https://maps.app.goo.gl/EA7Zg7fGP13KR2Ho9" target="_blank" onClick={() => fbq("track", "Button_Maps_Brasil_Footer")}>
          <h3 className="w-full flex gap-2 items-center justify-center text-base text-center font-bold duration-300 hover:underline">
            Rio de Janeiro - Brasil
            <img src={Brasil} alt="Bandeira do Brasil" className="w-5 h-5" />
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Footer;
