import { IoLogoWhatsapp } from "react-icons/io5";
import Destaque from "./assets/foto em destaque.png";
import { useContext } from "react";
import { FlagsContext } from "../../contexts/flagsContext";
const Sobre = () => {
    const { language, fbq } = useContext(FlagsContext);
  return (
    <div className="relative w-full h-fit pb-10 md:h-fit md:pb-20 lg:h-screen flex justify-around md:justify-center md:items-center">
        <div className="w-full h-fit lg:h-full pt-16 sm:pt-24 px-10 gap-6 md:gap-0 sm:px-5 lg:px-10 z-10 flex flex-wrap md:justify-around lg:justify-center lg:gap-10">
            <h1 className="w-full text-center text-4xl  lg:text-5xl text-secundary font-bold mb-12 md:mb-20 lg:mb-0">{language === "pt-br" ? ("Quem Somos Nós?") : ("¿Quiénes somos?")}</h1>
                <div className="md:w-76 w-full h-64 md:h-76 sm:w-96 sm:h-96 md:mt-3 md:m-0 xl:w-100 xl:h-99 overflow-hidden rounded-3xl">
                    <img src={Destaque} alt="imagem bg" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="w-96 h-fit xl:w-100 xl:h-99 gap-6 md:gap-0 flex flex-col justify-evenly lg:pt-2  sm:justify-center">
                    <p className="xl:text-2xl text-justify text-white font-base">{language === "pt-br" ? ("Bem-vindo à illumien! Somos uma agência de mídia social que atende principalmente os públicos de Granada, Espanha, e Rio de Janeiro, Brasil. Nosso compromisso é fazer do seu negócio o nosso negócio, proporcionando resultados excepcionais em tudo o que fazemos. Oferecemos uma ampla gama de serviços, incluindo criação de sites, fotografia, vídeos para reels, gerenciamento de mídias sociais, copywriting e muito mais. Nossa equipe profissional e altamente capacitada está pronta para ajudar você a alcançar seus objetivos. Entre em contato conosco para elevar a autenticidade da sua marca.") : ("¡Bienvenido a illumien! Somos una agencia de medios sociales que atiende principalmente a los públicos de Granada, España, y Río de Janeiro, Brasil. Nuestro compromiso es hacer que su negocio sea nuestro negocio, brindando resultados excepcionales en todo lo que hacemos. Ofrecemos una amplia gama de servicios, que incluyen creación de páginas web, fotografía, videos para reels, gestión de redes sociales, copywriting y mucho más. Nuestro equipo profesional y altamente capacitado está listo para ayudarle a alcanzar sus objetivos. Póngase en contacto con nosotros para elevar la autenticidad de su marca.")}</p>

                    <a href={`whatsapp://send?phone=+34623937593&text=${language === "pt-br" ? "Olá, eu gostaria de conhecer mais!" : "Hola, me gustaría saber más!"}`} className="w-full h-10 md:mt-0 lg:mt-10 xl:mt-20 rounded-xl flex justify-center items-center bg-secundary text-zinc-50 hover:bg-caramel hover:text-zinc-600 duration-300 font-bold text-xl gap-1" onClick={() => fbq("track", "Button_Whatsapp_Sobre")} >   <IoLogoWhatsapp className="text-lime-700" /> <span>{language === "pt-br" ? "Converse Conosco!" : "Hable con nosotros!"}</span></a>
                </div>
        </div>
    </div>
  )
}

export default Sobre
