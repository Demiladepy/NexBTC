const features = [
  { title: "PayStream", description: "Send & receive BTC instantly." },
  { title: "ChainBridgeX", description: "Swap BTC ↔ SOL ↔ ETH seamlessly." },
  { title: "BTCVault", description: "Secure vault for your digital assets." },
];

const Features = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {features.map((f) => (
      <div key={f.title} className="p-6 border rounded-lg hover:shadow-lg transition">
        <h3 className="font-semibold text-lg">{f.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{f.description}</p>
      </div>
    ))}
  </section>
);

export default Features;
