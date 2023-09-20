import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { languageDetector, languageDetectorOptions } from "./lang-detector"

const resources = {
    en: {
        translation: {
            "Selecione trajeto": "Select Route",
            "Trajetos": "Routes:",
            "Origem": "Origin:",
            "Destino": "Destination:",
            "Duracao": "Duration:",
            "Distancia": "Distance:",
            "Data de partida": "Departure date:",
            "Horario de partida": "Departure time:",
            "Data de chegada" : "Arrival date:",
            "Horario de chegada": "Arrival time:"
        }
    },
    pt: {
        translation: {
            "Selecione trajeto": "Selecione trajeto",
            "Trajetos": "Trajetos:",
            "Origem": "Origem:",
            "Destino": "Destino:",
            "Duracao": "Duração:",
            "Distancia": "Distância:",
            "Data de partida": "Data de partida:",
            "Horario de partida": "Horário de partida:",
            "Data de chegada" : "Data de chegada:",
            "Horario de chegada": "Horário de chegada:"
        }
    },
    esp: {
      translation: {
          "Selecione trajeto": "Seleccionar ruta",
          "Trajetos":"Rutas:",
          "Origem": "Origen:",
          "Destino": "Destino:",
          "Duracao": "Duración:",
          "Distancia": "Distancia:",
          "Data de partida": "Fecha de salida:",
          "Horario de partida": "Hora de salida:",
          "Data de chegada" : "Fecha de llegada:",
          "Horario de chegada": "Hora de llegada:"
      }
  },
}

i18n.use(languageDetector)
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        detection: languageDetectorOptions,
        resources,
        // supportedLngs: ["pt", "en"],
        // lng: "pt", // fallback language is portuguese
        fallbackLng: ['pt', 'en', 'esp'],

        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;
