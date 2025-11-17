import { Link, useLocation } from 'react-router-dom';
import ConnectModal from '../wallet/ConnectModal';
import { useState } from 'react';
import { useWallet } from '../../contexts/WalletContext';

export const Navigation = () => {
  const { connected, walletName, walletAddress, disconnect } = useWallet();
  const loc = useLocation();
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white dark:bg-[#0D1117] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img src="/assets/logo-mark.svg" alt="NexBTC" className="w-8 h-8" />
                <span className="hidden sm:inline text-lg font-semibold dark:text-white">NexBTC</span>
              </Link>
            </div>

            <nav className="flex items-center gap-4">
              <Link
                to="/paystream"
                className={`px-2 py-1 rounded ${
                  loc.pathname === '/paystream' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-850'
                }`}
              >
                PayStream
              </Link>
              <Link
                to="/swap"
                className={`px-2 py-1 rounded ${
                  loc.pathname === '/swap' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-850'
                }`}
              >
                Swap
              </Link>
              <Link
                to="/vault"
                className={`px-2 py-1 rounded ${
                  loc.pathname === '/vault' ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-850'
                }`}
              >
                Vault
              </Link>

              <div className="ml-4">
                {connected ? (
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-muted-foreground hidden sm:block">
                      {walletName} • {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : ''}
                    </div>
                    <button
                      onClick={disconnect}
                      className="px-3 py-1 rounded bg-red-600 text-white text-sm"
                    >
                      Disconnect
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConnectModalOpen(true)}
                    className="px-3 py-1 rounded bg-orange-500 text-white text-sm"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Connect modal with local state */}
      {connectModalOpen && <ConnectModal />}
    </>
  );
};
