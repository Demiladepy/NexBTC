export interface ChainConfig {
  name: string;
  symbol: string;
  rpcUrl: string;
  explorerUrl?: string;
  decimals: number;
}

export const CHAINS: ChainConfig[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    rpcUrl: "https://icp-bitcoin-node.example", // placeholder for ICP Bitcoin API
    explorerUrl: "https://www.blockchain.com/btc",
    decimals: 8,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
    explorerUrl: "https://etherscan.io",
    decimals: 18,
  },
  {
    name: "Solana",
    symbol: "SOL",
    rpcUrl: "https://api.mainnet-beta.solana.com",
    explorerUrl: "https://solscan.io",
    decimals: 9,
  },
];
