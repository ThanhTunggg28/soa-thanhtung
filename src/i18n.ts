import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: 'https://api.test.soa-dev.net/api/v1/pages?lang={{lng}}',
      parse: (data: any) => {
        const parsedData = JSON.parse(data);
        const translations: any = {};
        parsedData.forEach((page: any) => {
          Object.keys(page).forEach((key) => {
            translations[key] = page[key];
          });
        });
        return translations;
      },
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
