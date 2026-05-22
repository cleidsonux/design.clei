import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './i18n/LangContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { CaseRepassa } from './pages/cases/CaseRepassa';
import { CaseFavoritas } from './pages/cases/CaseFavoritas';
import { CasePesquisaContabil } from './pages/cases/CasePesquisaContabil';
import { NotFound } from './pages/NotFound';

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-tech-grid relative overflow-x-hidden min-h-screen">
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/cases/repassa" element={<CaseRepassa />} />
            <Route path="/cases/favoritas" element={<CaseFavoritas />} />
            <Route path="/cases/pesquisa-contabil" element={<CasePesquisaContabil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
