import actions from "@/constants/actions";

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
    value: "÷",
    variant: "operator",
    action: actions.CHOOSE_OPERATION,
    ariaLabel: "Division",
  },
  {
    id: 4,
    value: "7",
    variant: "digit",
    action: actions.ADD_DIGIT,
  },
  {
    id: 5,
    value: "8",
    variant: "digit",
    action: actions.ADD_DIGIT,
  },
  {
    id: 6,
    value: "9",
    variant: "digit",
    action: actions.ADD_DIGIT,
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
    value: "4",
    variant: "digit",
    action: actions.ADD_DIGIT,
  },
  {
    id: 9,
    value: "5",
    variant: "digit",
    action: actions.ADD_DIGIT,
  },
  {
    id: 10,
    value: "6",
    variant: "digit",
    action: actions.ADD_DIGIT,
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
    value: "1",
    variant: "digit",
    action: actions.ADD_DIGIT,
  },
  {
    id: 13,
    value: "2",
    variant: "digit",
    action: actions.ADD_DIGIT,
  },
  {
    id: 14,
    value: "3",
    variant: "digit",
    action: actions.ADD_DIGIT,
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
    value: "0",
    variant: "wide",
    action: actions.ADD_DIGIT,
  },
  {
    id: 17,
    value: ".",
    variant: "digit",
    action: actions.ADD_DIGIT,
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

export default calculatorKeys;
