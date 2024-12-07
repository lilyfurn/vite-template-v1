import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import InboundPrivacyPreferences from "./components/IndoundPrivacyPreferences";
import useCookiePreferences from "./hooks/useCookiePreferences";
import { useEffect, useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";

function AppContent() {
  const {
    preferences,
    preferencesSaved,
    cookiesExist,
    savePreferences,
    rejectAllPreferences,
    updatePreference,
  } = useCookiePreferences();
  const [showModal, setShowModal] = useState(!cookiesExist);

  useEffect(() => {
    // Hide the modal once preferences are saved
    if (preferencesSaved) {
      setShowModal(false);
    }
  }, [preferencesSaved]);
  return (
    <div className="max-w-[1200px] mx-auto relative min-h-screen">
      <Header />
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5 backdrop-blur-[2px]">
          <div className="w-full md:h-full bg-white shadow-lg fixed bottom-0 left-0 md:fixed md:top-0 md:left-0 md:flex md:items-center">
            <InboundPrivacyPreferences
              preferences={preferences}
              savePreferences={savePreferences}
              rejectAllPreferences={rejectAllPreferences}
              updatePreference={updatePreference}
              setShowModal={setShowModal} 
            />
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
