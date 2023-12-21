import { Product } from "@zocom/types";

interface CartState {
  items: Product[] | undefined;
}

const initialState: CartState = {
  items: [],
};

interface Action {
  type: string;
  payload?: Product;
}

export default function cartReducer(
  state: CartState = initialState,
  action: Action
): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload) {
        return {
          ...state,
          items: [...state.items!, action.payload],
        };
      }
      return state;

    case "DECREASE":
      if (action.payload) {
        let indexToRemove = state.items!.findIndex((item) => {
          if (item.name !== action.payload!.name) return false;

          if ("ingredients" in item && "ingredients" in action.payload!) {
            return (
              JSON.stringify(item.ingredients) ===
              JSON.stringify(action.payload.ingredients)
            );
          }

          return true;
        });

        if (indexToRemove !== -1) {
          return {
            ...state,
            items: [
              ...state.items!.slice(0, indexToRemove),
              ...state.items!.slice(indexToRemove + 1),
            ],
          };
        }
      }
      return state;

    case "INCREASE":
      if (action.payload) {
        return {
          ...state,
          items: [...state.items!, action.payload],
        };
      }
      return state;

    default:
      return state;
  }
}
