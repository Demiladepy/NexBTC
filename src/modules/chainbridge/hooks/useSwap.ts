import { useState } from "react";

// Define the Swap type
export interface Swap {
  id: number;
  from: string;
  to: string;
  amount: number;
}

export const useSwap = () => {
  const [swaps, setSwaps] = useState<Swap[]>([]); // <-- typed array

  const executeSwap = async (from: string, to: string, amount: number) => {
    const swap: Swap = { id: Date.now(), from, to, amount }; // <-- enforce type
    setSwaps([...swaps, swap]);
  };

  return { swaps, executeSwap };
};
