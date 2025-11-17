const stats = [
  { label: "Users", value: "12K+" },
  { label: "Transactions", value: "150K+" },
  { label: "Vaults", value: "2.5K+" },
];

const Stats = () => (
  <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    {stats.map((s) => (
      <div key={s.label}>
        <h4 className="text-2xl font-bold">{s.value}</h4>
        <p className="text-gray-600 dark:text-gray-300">{s.label}</p>
      </div>
    ))}
  </section>
);

export default Stats;
