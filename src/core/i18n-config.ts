import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as en from 'i18n/en'
import * as ptBR from 'i18n/ptBR'

i18n.use(initReactI18next).init({
  resources: {
    en: en.translations,
    'pt-BR': ptBR.translations,
  },
  lng: 'pt-BR',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
