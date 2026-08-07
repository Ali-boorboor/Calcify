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
      return formattedPreviousOperand + formattedCurrentOperand;

    case "-":
      return formattedPreviousOperand - formattedCurrentOperand;

    case "×":
      return formattedPreviousOperand * formattedCurrentOperand;

    case "÷":
      return formattedPreviousOperand / formattedCurrentOperand;

    default:
      return null;
  }
};

export default calculate;
