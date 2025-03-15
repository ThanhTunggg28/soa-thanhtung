import { BrowserRouter } from 'react-router-dom';

import MainRoutes from '@/router';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000,
    });
  }, [])
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
