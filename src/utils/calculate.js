const calculate = ({ currentOperand, previousOperand, operation }) => {
  const formattedPreviousOperand = Number(previousOperand);
  const formattedCurrentOperand = Number(currentOperand);

  if (
    Number.isNaN(formattedPreviousOperand) ||
    Number.isNaN(formattedCurrentOperand)
  ) {
    return "";
  }

  switch (operation) {
    case "+":
      return {
        result: formattedPreviousOperand + formattedCurrentOperand,
        error: null,
      };

    case "-":
      return {
        result: formattedPreviousOperand - formattedCurrentOperand,
        error: null,
      };

    case "×":
      return {
        result: formattedPreviousOperand * formattedCurrentOperand,
        error: null,
      };

    case "÷":
      if (formattedCurrentOperand === 0) {
        return {
          result: null,
          error: "Cannot divide by zero",
        };
      }

      return {
        result: formattedPreviousOperand / formattedCurrentOperand,
        error: null,
      };

    default:
      return {
        result: null,
        error: null,
      };
  }
};

export default calculate;
