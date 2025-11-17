import type { FC } from "react";
import CustomIcon from "../icons/Custom";

interface InfoProps {
  walletName: string;
  walletAddress: string;
  balance?: string;
}

const Info: FC<InfoProps> = ({ walletName, walletAddress, balance }) => {
  return (
    <div className="flex items-center gap-4 bg-neutral-800 rounded-xl px-4 py-3 text-white">
      <CustomIcon name="wallet" size={24} color="#F7931A" />
      <div className="flex flex-col">
        <span className="font-medium">{walletName}</span>
        <span className="text-sm text-gray-300">{`${walletAddress.slice(
          0,
          6
        )}...${walletAddress.slice(-4)}`}</span>
        {balance && <span className="text-sm text-green-400">{balance} BTC</span>}
      </div>
    </div>
  );
};

export default Info;
