import Button from "@/components/Button";
import calculatorKeys from "@/constants/calculatorKeys";

const KeyPad = ({ dispatch }) => {
  const handleKeyClick = (calculatorKey) => {
    dispatch({
      type: calculatorKey.action,
      ...(calculatorKey.value !== undefined && {
        payload: calculatorKey.value,
      }),
    });
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      {calculatorKeys.map((calculatorKey) => (
        <Button
          onClick={() => handleKeyClick(calculatorKey)}
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
