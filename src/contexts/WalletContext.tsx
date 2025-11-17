import type { FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import type { WalletConfig } from "../config/wallets.config";

interface WalletState {
  connected: boolean;
  walletName?: string;
  walletAddress?: string;
  balance?: string;
  connect: (wallet: WalletConfig) => void;
  disconnect: () => void;
}

const defaultState: WalletState = {
  connected: false,
  walletName: undefined,
  walletAddress: undefined,
  balance: undefined,
  connect: () => {},
  disconnect: () => {},
};

const WalletContext = createContext<WalletState>(defaultState);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: FC<WalletProviderProps> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [walletName, setWalletName] = useState<string>();
  const [walletAddress, setWalletAddress] = useState<string>();
  const [balance, setBalance] = useState<string>();

  const connect = (wallet: WalletConfig) => {
    setWalletName(wallet.name);
    setWalletAddress("0x1234...abcd"); // mock address
    setBalance("0.0");
    setConnected(true);
  };

  const disconnect = () => {
    setWalletName(undefined);
    setWalletAddress(undefined);
    setBalance(undefined);
    setConnected(false);
  };

  return (
    <WalletContext.Provider value={{ connected, walletName, walletAddress, balance, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook for easy consumption
export const useWallet = () => useContext(WalletContext);
