// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./modules/home/Home";
import PayStream from "./modules/paystream/PayStream";
import ChainBridge from "./modules/chainbridge/ChainBridge";
import BTCVault from "./modules/vault/BTCVault";

import { Navigation } from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { WalletProvider } from "./contexts/WalletContext";

const App: React.FC = () => {
  return (
    <WalletProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Top Navigation */}
          <Navigation />

          {/* Page Header */}
          <Header />

          {/* Main Page Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/paystream" element={<PayStream />} />
              <Route path="/swap" element={<ChainBridge />} />
              <Route path="/vault" element={<BTCVault />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </WalletProvider>
  );
};

export default App;
