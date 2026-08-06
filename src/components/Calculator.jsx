import Display from "@/components/Display";
import KeyPad from "@/components/KeyPad";

const Calculator = () => {
  return (
    <main className="max-w-xs w-full bg-mist-600/60 font-mono font-semibold text-mist-100 border-2 border-mist-600 shadow-xs shadow-mist-600 rounded-md p-2 space-y-2">
      <Display />

      <KeyPad />
    </main>
  );
};

export default Calculator;
