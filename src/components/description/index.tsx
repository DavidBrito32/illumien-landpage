import translations from './translations';

function CompanyDescription() {
  // Detecta o idioma do navegador
  const language = navigator.language || navigator.language[0];
  
  // Define a descrição com base no idioma
  const description = translations[language] || translations['es'];

  return (
    <meta name="description" content={description} />
  );
}

export default CompanyDescription;
