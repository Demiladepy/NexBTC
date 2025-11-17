
export interface WalletConfig {
  name: string;
  icon: string; // Matches the name in CustomIcon
  connector: string; // Used internally for wallet adapter
}

export const WALLETS: WalletConfig[] = [
  {
    name: "Plug",
    icon: "wallet",
    connector: "plug",
  },
  {
    name: "Infinity Wallet",
    icon: "bitcoin",
    connector: "infinity",
  },
  {
    name: "NFID",
    icon: "shield",
    connector: "nfid",
  },
];
