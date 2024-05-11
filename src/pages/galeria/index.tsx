import { Galleria } from "primereact/galleria";
import { PhotoService, Photo } from "../../services/photoService";
import { useContext, useState } from "react";
import { FlagsContext } from "../../contexts/flagsContext";

const Galeria = () => {
  const [images] = useState<Array<Photo>>(PhotoService);
  const { language } = useContext(FlagsContext);

  const responsiveOptions = [
    {
      breakpoint: "1500px",
      numVisible: 10,
    },
    {
      breakpoint: "1200px",
      numVisible: 10,
    },
    {
      breakpoint: "1024px",
      numVisible: 6,
    },
    {
      breakpoint: "768px",
      numVisible: 5,
    },
    {
      breakpoint: "575px",
      numVisible: 5,
    },
  ];

  const itemTemplate = (item: Photo) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", objectFit: "cover" }}
      />
    );
  };

  const thumbnailTemplate = (item: Photo) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} />;
  };

  return (
    <div className="relative w-full h-fit md:h-h-fit pt-10 pb-10 p-5 md:p-10 flex flex-wrap justify-center">
      <div className="w-full h-fit flex flex-wrap justify-center gap-16">
        <h1 className="w-full text-2xl md:text-3xl lg:text-5xl text-white font-bold">
          {language === "pt-br"
            ? "Seu negócio merece o click certo!"
            : "¡Tu negocio merece el clic correcto!"}
        </h1>
        <div className="w-full h-fit md:w-10/12 2xl:w-3/5 md:h-fit flex justify-center items-center rounded-xl overflow-hidden text-white z-20">
          <Galleria
            value={images}
            numVisible={5}
            responsiveOptions={responsiveOptions}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            className="w-full"
            autoPlay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
