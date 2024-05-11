import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import App from './App.tsx'
import "./styles/index.css";
import { FlagsContextProvider } from './contexts/flagsContext/index.tsx';
import CompanyDescription from './components/description/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <CompanyDescription />
  <FlagsContextProvider>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </FlagsContextProvider>
  </>,
)
