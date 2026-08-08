const calculate = ({ currentOperand, previousOperand, operation }) => {
  const previous = Number(previousOperand);
  const current = Number(currentOperand);

  if (Number.isNaN(previous) || Number.isNaN(current)) {
    return {
      result: null,
      error: "Operands not provided",
    };
  }

  switch (operation) {
    case "+":
      return {
        result: previous + current,
        error: null,
      };

    case "-":
      return {
        result: previous - current,
        error: null,
      };

    case "×":
      return {
        result: previous * current,
        error: null,
      };

    case "÷":
      if (current === 0) {
        return {
          result: null,
          error: "Cannot divide by zero",
        };
      }

      return {
        result: previous / current,
        error: null,
      };

    default:
      return {
        result: null,
        error: "Invalid operation",
      };
  }
};

export default calculate;
