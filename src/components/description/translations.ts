
// types.d.ts

type Translations = {
    [key: string]: string;
  };

export const translations: Translations = {
    'pt-BR': "A Illumien é uma empresa de marketing multinegócios dedicada a impulsionar marcas e negócios para o sucesso no mercado brasileiro e espanhol...",
    'es': "Illumien es una empresa de marketing multinegocio dedicada a impulsar marcas y negocios hacia el éxito en el mercado brasileño y español..."
  };
  
  export default translations;
  





  export function setHtmlLanguage() {
    // Detecta o idioma do navegador
    const language = navigator.language || navigator.language[0];
    
    // Define o idioma do HTML
    document.documentElement.lang = language;
  }
  