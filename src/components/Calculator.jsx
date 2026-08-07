import Display from "@/components/Display";
import KeyPad from "@/components/KeyPad";

const Calculator = () => {
  return (
    <main className="min-h-svh grid place-items-center bg-mist-400">
      <section className="max-w-xs w-full bg-mist-600/60 font-mono font-semibold text-mist-100 border-2 border-mist-600 shadow-xs shadow-mist-600 rounded-md p-2 space-y-2">
        <Display />

        <KeyPad />
      </section>
    </main>
  );
};

export default Calculator;
