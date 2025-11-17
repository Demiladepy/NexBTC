import { useState } from "react";
export interface Transaction {
  id: number;
  recipient: string;
  amount: number;
}

export const usePayment = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const sendPayment = async (recipient: string, amount: number) => {
    // Placeholder; Web3 logic goes here
    const tx: Transaction = { id: Date.now(), recipient, amount };
    setTransactions([...transactions, tx]);
  };

  return { transactions, sendPayment };
};
