/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, createContext, useState } from "react";
interface Props {
    children: React.ReactNode
}

interface FbqFunction {
    (eventName: string, eventData?: any): void;
}


interface ContextType {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
    fbq: FbqFunction;
}

declare const fbq: FbqFunction;

const InitialContext: ContextType = {
    language: '',
    setLanguage: () => {}, // uma função vazia para inicialização
    fbq,

};


export const FlagsContext = createContext<ContextType>(InitialContext);

export const FlagsContextProvider = ({children}: Props) => {
    const [language, setLanguage] = useState("es");
    return (
        <FlagsContext.Provider value={{language, setLanguage, fbq}} >
            {children}
        </FlagsContext.Provider>
    )
};