import { useState } from "react";

// Define the Vault type
export interface Vault {
  id: number;
  name: string;
}

export const useVault = () => {
  const [vaults, setVaults] = useState<Vault[]>([]); // <-- typed state

  const createVault = (name: string) => {
    const vault: Vault = { id: Date.now(), name }; // <-- typed object
    setVaults([...vaults, vault]);
  };

  return { vaults, createVault };
};
