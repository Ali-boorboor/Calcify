import actions from "@/constants/actions";
import calculate from "@/utils/calculate";
import { useReducer } from "react";

const initialState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  overwrite: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_DIGIT:
      if (state.overwrite) {
        return { ...state, currentOperand: action.payload, overwrite: false };
      }

      if (action.payload === "0" && state.currentOperand === "0") return state;

      if (action.payload === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };

    case actions.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: action.payload,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: action.payload,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: calculate(state).toString(),
        operation: action.payload,
        currentOperand: null,
      };

    case actions.CLEAR:
      return initialState;

    case actions.EVALUATE:
      if (
        state.operation == null ||
        state.previousOperand == null ||
        state.currentOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: calculate(state).toString(),
      };

    case actions.DELETE:
      if (state.overwrite) {
        return { ...state, overwrite: false, currentOperand: null };
      }

      if (state.currentOperand == null) return state;

      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return { ...state, currentOperand: state.currentOperand.slice(0, -1) };

    default:
      return state;
  }
};

const useCalculatorReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useCalculatorReducer;
