import Button from "@/components/Button";
import calculatorKeys from "@/constants/calculatorKeys";

const Calculator = () => {
  return (
    <main className="max-w-xs w-full bg-mist-600/60 font-mono font-semibold text-mist-100 border-2 border-mist-600 shadow-xs shadow-mist-600 rounded-md p-2 space-y-2">
      <output
        className="block max-h-22 w-full bg-mist-800/60 border-2 border-mist-800 shadow-xs shadow-mist-800 rounded-md py-2 px-4 aspect-video text-right"
        aria-live="polite"
      >
        1 + 4 = 5
      </output>

      <div className="grid grid-cols-4 gap-2">
        {calculatorKeys.map((calculatorKey) => (
          <Button
            ariaLabel={calculatorKey.ariaLabel}
            variant={calculatorKey.variant}
            key={calculatorKey.id}
          >
            {calculatorKey.value}
          </Button>
        ))}
      </div>
    </main>
  );
};

export default Calculator;
