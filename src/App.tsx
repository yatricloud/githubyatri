import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CommunityLinks } from './components/community/CommunityLinks';
import { YatriCloudInfo } from './components/info/YatriCloudInfo';
import { NotFound } from './pages/NotFound';
import { BackgroundEffects } from './components/effects/BackgroundEffects';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-[#0d1117]">
        <BackgroundEffects />
        <div className="relative z-10">
          <Header />
          <main>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="space-y-16">
                <Routes>
                  <Route path="/" element={
                    <>
                      <YatriCloudInfo />
                      <CommunityLinks />
                    </>
                  } />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;