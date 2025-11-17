import { useState } from 'react';
import { connectPlug, connectStoic, connectInfinity } from '../../services/wallet/adapter';
import { useWallet } from '../../contexts/WalletContext';

const WALLET_OPTIONS = [
  { id: 'plug', name: 'Plug', subtitle: 'ICP native wallet' },
  { id: 'stoic', name: 'Stoic', subtitle: 'Browser wallet (Stoic)' },
  { id: 'infinity', name: 'Infinity', subtitle: 'Mobile & extension' },
];

const ConnectModal = () => {
  const { connect } = useWallet();
  const [open, setOpen] = useState(false);

  const handleConnect = async (id: string) => {
    try {
      let wallet;
      if (id === 'plug') wallet = await connectPlug();
      if (id === 'stoic') wallet = await connectStoic();
      if (id === 'infinity') wallet = await connectInfinity();

      if (wallet) {
        connect(wallet);
        setOpen(false);
      }
    } catch (e) {
      console.error('Wallet connection error', e);
      // TODO: show toast
    }
  };

  return (
    <>
      {/* Small trigger button */}
      <div className="fixed bottom-6 right-6 sm:hidden">
        <button
          onClick={() => setOpen(true)}
          className="p-3 rounded-full bg-orange-500 text-white shadow-lg"
        >
          W
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-[92%] max-w-md bg-white dark:bg-[#0F1724] rounded-xl p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Connect Wallet</h3>
              <button onClick={() => setOpen(false)} className="text-sm opacity-70">
                Close
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {WALLET_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleConnect(opt.id)}
                  className="w-full text-left p-3 rounded hover:bg-gray-50 dark:hover:bg-gray-850 flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{opt.name}</div>
                    <div className="text-xs text-muted-foreground">{opt.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 text-right">
              <button onClick={() => setOpen(false)} className="px-3 py-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectModal;
