import Button from "@/components/Button";

const actions = {
  ADD_DIGIT: "add-digit",

  CHOOSE_OPERATION: "choose-operation",

  CLEAR: "clear",

  DELETE: "delete",

  EVALUATE: "evaluate",
};

const calculatorKeys = [
  {
    id: 1,
    value: "Clear",
    variant: "clear",
    action: actions.CLEAR,
    ariaLabel: "Clear",
  },
  {
    id: 2,
    value: "Delete",
    variant: "delete",
    action: actions.DELETE,
    ariaLabel: "Delete",
  },
  {
    id: 3,
    value: "/",
    variant: "operator",
    action: actions.CHOOSE_OPERATION,
    ariaLabel: "Division",
  },
  {
    id: 4,
    value: 7,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Seven",
  },
  {
    id: 5,
    value: 8,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Eight",
  },
  {
    id: 6,
    value: 9,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Nine",
  },
  {
    id: 7,
    value: "×",
    variant: "operator",
    action: actions.CHOOSE_OPERATION,
    ariaLabel: "Multiply",
  },
  {
    id: 8,
    value: 4,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Four",
  },
  {
    id: 9,
    value: 5,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Five",
  },
  {
    id: 10,
    value: 6,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Six",
  },
  {
    id: 11,
    value: "-",
    variant: "operator",
    action: actions.CHOOSE_OPERATION,
    ariaLabel: "Subtraction",
  },
  {
    id: 12,
    value: 1,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "One",
  },
  {
    id: 13,
    value: 2,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Two",
  },
  {
    id: 14,
    value: 3,
    variant: "digit",
    action: actions.ADD_DIGIT,
    ariaLabel: "Three",
  },
  {
    id: 15,
    value: "+",
    variant: "operator",
    action: actions.CHOOSE_OPERATION,
    ariaLabel: "Sum",
  },
  {
    id: 16,
    value: 0,
    variant: "wide",
    action: actions.ADD_DIGIT,
    ariaLabel: "Zero",
  },
  {
    id: 17,
    value: ".",
    variant: "operator",
    action: actions.CHOOSE_OPERATION,
    ariaLabel: "Dot",
  },
  {
    id: 18,
    value: "=",
    variant: "operator",
    action: actions.EVALUATE,
    ariaLabel: "Equal",
  },
];

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
