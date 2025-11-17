import Overview from "./components/Overview";
import Settings from "./components/Settings";
import MultiSigSetup from "./components/MultiSigSetup";
import TimeLockConfig from "./components/TimeLockConfig";

const BTCVault = () => (
  <main className="space-y-12 p-6 max-w-5xl mx-auto">
    <Overview />
    <MultiSigSetup />
    <TimeLockConfig />
    <Settings />
  </main>
);

export default BTCVault;
