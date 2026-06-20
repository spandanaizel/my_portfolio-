import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';
import LoadingScreen from '@/components/Common/LoadingScreen';
import ScrollToTop from '@/components/Common/ScrollToTop';
import About from '@/pages/About';
import Resume from '@/pages/Resume';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';
import { useLoading } from '@/hooks/useLoading';

const App = () => {
  const location = useLocation();
  const loading = useLoading();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-bg px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
        <Sidebar />

        <main className="flex-1">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default App;
