import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DividerText from './divider';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';



// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs:['en','ar'],
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    
//     fallbackLng: "en",
//     detection:{order: [ 'cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
//     caches:['cookie'],
//   },
//   backend: {
//     loadPath:'/assests/locales/{{lng}}/translation.json',
//   },
//   react: { useSuspense:false},
//   });



ReactDOM.render(
    <DividerText/>,
  document.getElementById('root1')
);
ReactDOM.render(
  <App/>,
document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
