interface Props {
  label: string;
}

const TokenSelector = ({ label }: Props) => (
  <div>
    <label className="block mb-1">{label}</label>
    <select className="w-full p-3 border rounded">
      <option>BTC</option>
      <option>SOL</option>
      <option>ETH</option>
    </select>
  </div>
);

export default TokenSelector;
