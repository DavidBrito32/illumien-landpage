import CardServices from "./card/card";
import estratergia from "./assets/estratergias.jpg";
import identidade from "./assets/identidade_visual.webp";
import web from "./assets/web_designer.jpg";
import foto from "./assets/fotografia.png";
import redesSociais from "./assets/gestao.png";
import photo from "./assets/nova foto.png";
import { useContext } from "react";
import { FlagsContext } from "../../contexts/flagsContext";

interface CardsProps {
  id: number;
  image: string;
  alt: string;
  message: string;
  whatsapp: string;
  button: string;
}

const Services = () => {
  const { language } = useContext(FlagsContext);

  const cards: Array<CardsProps> = [
    {
      id: 1,
      image: estratergia,
      alt: "Estratégias_personalizadas",
      message:
        language === "pt-br"
          ? "Estratégias  Personalizadas"
          : "Estrategias personalizadas",
      whatsapp:
        language === "pt-br"
          ? "Estratégias sob medida no WhatsApp! Vamos para começar?"
          : "¡Estrategias a tu medida en WhatsApp! ¿Empezamos?",
      button: language === "pt-br" ? "Conhecer mais!" : "Conocer más!",
    },
    {
      id: 2,
      image: identidade,
      alt: "Identidade_visual",
      message: language === "pt-br" ? "Identidade visual" : "Identidad visual",
      whatsapp:
        language === "pt-br"
          ? "Eu gostaria de saber mais sobre identidade visual!"
          : "¡Me gustaría saber más sobre identidad visual!",
      button: language === "pt-br" ? "Conhecer mais!" : "Conocer más!",
    },
    {
      id: 3,
      image: web,
      alt: "Web_Designer",
      message: language === "pt-br" ? "Web Designer" : "Diseñador web",
      whatsapp:
        language === "pt-br"
          ? "Eu gostaria de saber mais sobre a criação de web-sites"
          : "Me gustaría saber más sobre la creación de sitios web.",
      button: language === "pt-br" ? "Conhecer mais!" : "Conocer más!",
    },
    {
      id: 4,
      image: photo,
      alt: "Fotografia",
      message: language === "pt-br" ? "Fotografia" : "Fotografía",
      whatsapp:
        language === "pt-br"
          ? "Eu gostaria de descobrir mais sobre fotografia"
          : "Me gustaría descubrir más sobre fotografía.",
      button: language === "pt-br" ? "Conhecer mais!" : "Conocer más!",
    },
    {
      id: 5,
      image: redesSociais,
      alt: "Gestão_de_redes_sociais",
      message:
        language === "pt-br"
          ? "Gestão de redes sociais"
          : "Manejo de redes sociales",
      whatsapp:
        language === "pt-br"
          ? "Eu gostaria de entender mais sobre gestão de redes sociais!!"
          : "¡¡Me gustaría entender más sobre la gestión de redes sociales!!",
      button: language === "pt-br" ? "Conhecer mais!" : "Conocer más!",
    },
    {
      id: 6,
      image: foto,
      alt: "Produção_de_vídeos",
      message:
        language === "pt-br" ? "Produções de vídeos" : "Producciones de vídeo",
      whatsapp:
        language === "pt-br"
          ? "Eu gostaria de saber mais sobre produção de videos"
          : "Me gustaría saber más sobre producción de video.",
      button: language === "pt-br" ? "Conhecer mais!" : "Conocer más!",
    },
  ];

  return (
    <div className="relative md:h-fit w-full">
      <div className="w-full p-2 md:p-16 h-fit flex justify-center flex-wrap gap-16">
        <h1 className="w-full text-2xl md:text-5xl text-center md:text-left font-bold text-white z-10">
          {language === "pt-br"
            ? "O que podemos fazer por você?!"
            : "¡¿Qué podemos hacer por ti?!"}
        </h1>
        <ul className="w-full h-full duration-300 pb-16 flex justify-center md:justify-center lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:justify-between flex-wrap 2xl:w-3/4 gap-5 md:gap-3 xl:px-20">
          {cards.map((item) => (
            <CardServices data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
