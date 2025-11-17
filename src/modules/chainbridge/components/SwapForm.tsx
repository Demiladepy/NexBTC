import TokenSelector from "./TokenSelector";

const SwapForm = () => (
  <section className="bg-white dark:bg-[#111827] p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">Swap Tokens</h2>
    <div className="space-y-4">
      <TokenSelector label="From" />
      <TokenSelector label="To" />
      <input type="number" placeholder="Amount" className="w-full p-3 border rounded" />
      <button className="px-4 py-2 bg-orange-500 text-white rounded">Swap</button>
    </div>
  </section>
);

export default SwapForm;
