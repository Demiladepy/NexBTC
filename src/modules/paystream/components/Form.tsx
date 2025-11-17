const Form = () => (
  <section className="bg-white dark:bg-[#111827] p-6 rounded-lg shadow">
    <h2 className="text-xl font-semibold mb-4">Send BTC</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Recipient Address" className="w-full p-3 border rounded" />
      <input type="number" placeholder="Amount (BTC)" className="w-full p-3 border rounded" />
      <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded">Send</button>
    </form>
  </section>
);

export default Form;
