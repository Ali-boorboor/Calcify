// * We format the integer portion separately and preserve the decimal string ourselves.
const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const formatOperand = (operand) => {
  if (operand == null) return "";

  const [integer, decimal] = operand.split(".");

  if (decimal === undefined) {
    return INTEGER_FORMATTER.format(integer);
  }

  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

export default formatOperand;
