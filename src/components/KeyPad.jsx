import Button from "@/components/Button";
import calculatorKeys from "@/constants/calculatorKeys";

const KeyPad = () => {
  return (
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
  );
};

export default KeyPad;
