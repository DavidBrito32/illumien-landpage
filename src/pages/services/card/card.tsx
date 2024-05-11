import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FlagsContext } from "../../../contexts/flagsContext";

interface Props {
  data: {
    image: string;
    alt: string;
    message: string;
    whatsapp: string;
    button: string;
  };
}

const CardServices = ({ data }: Props) => {
  const { fbq } = useContext(FlagsContext);
  return (
    <li className="w-5/6 h-76 md:w-64 md:h-76 p-2 lg:w-72 lg:h-80 rounded-xl flex flex-col gap-1 bg-white shadow-2xl	 hover:scale-95 duration-300">
      <img
        src={data.image}
        alt={data.alt}
        className="w-full h-3/4 rounded-t-xl"
      />
      <h3 className="text-xl text-center text-black font-bold">
        {data.message}
      </h3>
      <a
        href={`whatsapp://send?phone=+34623985465&text=${data.message}`}
        className="w-full h-9 rounded-lg duration-300 group bg-purple-400 flex justify-center items-center gap-2 hover:bg-purple-600 text-white font-bold text-lg"
        onClick={() => fbq("track", "Button_Whatsapp_Light")}
      >
        <FaWhatsapp className="duration-300 group-hover:text-green-400" />
        {data.button}
      </a>
    </li>
  );
};

export default CardServices;
