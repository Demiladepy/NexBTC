import Form from "./components/Form";
import History from "./components/History";
import Stats from "./components/Stats";

const PayStream = () => (
  <main className="space-y-12 p-6 max-w-5xl mx-auto">
    <Form />
    <Stats />
    <History />
  </main>
);

export default PayStream;
