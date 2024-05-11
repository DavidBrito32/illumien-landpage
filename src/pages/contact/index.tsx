import { useContext, useRef, useState } from "react";
import post from "./assets/Post.svg";
import postBr from "./assets/Post pt-br.svg";
import { useForm } from "react-hook-form";
import { Toast } from "primereact/toast";
import { FlagsContext } from "../../contexts/flagsContext";

interface FormProps {
  message: string;
  name: string;
  email: string;
  ads: string;
}

const ContactPage = () => {
  const { language, fbq } = useContext(FlagsContext);

  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const toast = useRef<Toast>(null);

  const show = () => {
    toast.current &&
      toast.current.show({
        severity: "success",
        summary:
          language === "pt-br"
            ? "Sucesso ao Enviar dados"
            : "Envío de datos exitoso",
        detail:
          language === "pt-br"
            ? "Obrigado por entrar em contato, em breve nossos consultores entraram em contato!"
            : "Gracias por ponerse en contacto, ¡nuestros consultores se comunicarán pronto!",
      });
  };

  const error = () => {
    toast.current &&
      toast.current.show({
        severity: "error",
        summary: language === "pt-br" ? "Falha no envio" : "Envío fallido",
        detail:
          language === "pt-br"
            ? "Pedimos desculpas pelo transtorno, aguarde um pouco e tente novamente"
            : "Lamentamos las molestias, espera un poco y vuelve a intentarlo.",
      });
  };

  const submitDada = async (data: FormProps): Promise<void> => {
    fbq("track", "Submit_Form_Contact");
    setLoading(true);

    await fetch("https://formsubmit.co/ajax/6029ad2d90e1ec986c9d362b19b1313c", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: `Conheci vocês pelo: ${data.ads}, e gostaria de falar sobre: ${data.message}`,
      }),
    })
      .then((data) => {
        reset();
        console.log(data);
        setLoading(false);
        show();
      })
      .catch((err) => {
        console.log(err)
        error();
        setLoading(false);
      });
  };

  return (
    <div className="relative w-full h-fit md:h-fit p-5 md:pb-20 lg:h-screen  flex justify-around md:justify-center md:items-center">
      <Toast ref={toast} />
      <div className="w-screen 2xl:w-3/4 h-fit pb-8 md:h-fit flex flex-col items-center gap-16 z-10 md:p-16">
        <h1 className="w-full text-2xl md:text-3xl xl:text-4xl font-bold text-center text-white">
          {language === "pt-br"
            ? "Precisa de algo específico? contate-nos"
            : "¿Necesitas algo específico? Contáctenos"}
        </h1>
        <div className="w-full md:w-fit flex justify-center bg-white rounded-3xl p-4 lg:p-4 gap-10 shadow-2xl">
          <img
            src={language === "pt-br" ? postBr : post}
            alt="post promo"
            className="hidden lg:block md:w-2/4 md:object-cover lg:object-contain rounded-tl-3xl rounded-bl-3xl"
          />
          <form className="w-full md:flex-1 flex flex-col justify-between gap-5 h-full">
            <h2 className="w-full text-center text-3xl font-bold">
              {language === "pt-br"
                ? "Entre em contato conosco"
                : "Contáctenos"}
            </h2>
            <div className="flex flex-col gap-5">
              <label htmlFor="name" className="w-full h-12">
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                  placeholder={
                    language === "pt-br"
                      ? "Informe seu nome:"
                      : "Introduzca su nombre:"
                  }
                  className="pl-5 w-full h-full rounded-xl bg-zinc-500 text-white placeholder:text-white placeholder:font-bold"
                />
              </label>
              {errors.name?.type === "required" && (
                <p className="p-2 rounded-sm bg-red-400 text-base font-bold text-white">
                  O nome é obrigatorio
                </p>
              )}
              <label htmlFor="e-mail" className="w-full h-12">
                <input
                  type="e-mail"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder={
                    language === "pt-br"
                      ? "Informe seu e-mail:"
                      : "Introduce tu correo electrónico:"
                  }
                  className="pl-5 w-full h-full rounded-xl bg-zinc-500 text-white placeholder:text-white placeholder:font-bold"
                />
              </label>
              {errors.email?.type === "required" && (
                <p className="p-2 rounded-sm bg-red-400 text-base font-bold text-white">
                  O e-mail é obrigatorio
                </p>
              )}
              <label htmlFor="conheceu" className="w-full h-12">
                <select
                  id="ads"
                  required
                  className="w-full h-12 px-5 rounded-xl bg-zinc-500 text-white"
                  {...register("ads", {
                    required: true,
                  })}
                >
                  <option value="">
                    {language === "pt-br"
                      ? "Por onde você nos conheceu?"
                      : "¿Dónde nos conociste?"}
                  </option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Whatsapp">Whatsapp</option>
                </select>
              </label>
              <label htmlFor="mensagem" className="w-full">
                <textarea
                  {...register("message", {
                    required: true,
                  })}
                  placeholder={
                    language === "pt-br"
                      ? "Informe como podemos lhe ajudar?"
                      : "¿Permítenos saber en qué te podemos ayudar?"
                  }
                  className="p-5 w-full h-32 rounded-xl bg-zinc-500 text-white placeholder:text-white placeholder:font-bold"
                />
              </label>
              {errors.message?.type === "required" && (
                <p className="p-2 rounded-sm bg-red-400 text-base font-bold text-white">
                  Conte nos um pouco sobre o que precisa!
                </p>
              )}
            </div>

            <button
              type="button"
              className="w-full h-14 flex gap-3 justify-center items-center bg-purple-800 rounded-xl text-xl font-bold text-white"
              onClick={() => handleSubmit(submitDada)()}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-7 w-7 mr- rounded-full border-4 border-t-secundary border-transparent"
                    viewBox="0 0 24 24"
                  ></svg>
                  Por favor aguarde . . .
                </>
              ) : (
                `${language === "pt-br" ? "Enviar" : "Mandar"}`
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
