import actions from "@/constants/actions";
import calculate from "@/utils/calculate";
import { useReducer } from "react";

const initialState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  shouldOverwrite: false,
  error: null,
};

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case actions.ADD_DIGIT: {
      if (state.shouldOverwrite) {
        return {
          ...state,
          currentOperand: payload === "." ? "0." : payload,
          shouldOverwrite: false,
          previousOperand: null,
          operation: null,
          error: null,
        };
      }

      if (payload === ".") {
        if (state.currentOperand == null) {
          return {
            ...state,
            currentOperand: "0.",
          };
        }

        if (state.currentOperand.includes(".")) {
          return state;
        }
      }

      if (payload === "0" && state.currentOperand === "0") return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand ?? ""}${payload}`,
        error: null,
      };
    }

    case actions.CHOOSE_OPERATION: {
      if (state.shouldOverwrite) return initialState;

      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      const { result, error } = calculate(state);

      if (error) {
        return {
          ...state,
          error,
          shouldOverwrite: true,
        };
      }

      return {
        ...state,
        previousOperand: result.toString(),
        operation: payload,
        currentOperand: null,
      };
    }

    case actions.CLEAR: {
      return initialState;
    }

    case actions.EVALUATE: {
      if (
        state.operation == null ||
        state.previousOperand == null ||
        state.currentOperand == null
      ) {
        return state;
      }

      const { result, error } = calculate(state);

      if (error) {
        return {
          ...state,
          error,
          shouldOverwrite: true,
        };
      }

      return {
        ...state,
        shouldOverwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: result.toString(),
      };
    }

    case actions.DELETE: {
      if (state.shouldOverwrite) return initialState;

      if (state.currentOperand == null) return state;

      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return { ...state, currentOperand: state.currentOperand.slice(0, -1) };
    }

    default: {
      return state;
    }
  }
};

const useCalculatorReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useCalculatorReducer;
