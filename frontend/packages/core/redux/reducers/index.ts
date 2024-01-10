import { MenuList, WontonItem, DipItem } from '@zocom/types';

interface CartState {
  menuList: MenuList;
}

const initialState: CartState = {
  menuList: {
    wonton: [],
    dip: [],
  },
};

type MenuItemType = WontonItem | DipItem;

interface Action {
  type: string;
  payload: {
    item: MenuItemType;
    itemType: 'wonton' | 'dip';
  };
}

export default function cartReducer(
  state: CartState = initialState,
  action: Action
): CartState {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (action.payload) {
        const { item, itemType } = action.payload;
        const existingItems = state.menuList[itemType];
        const existingItemIndex = existingItems.findIndex(
          (i) => i.name === item.name
        );

        if (existingItemIndex !== -1) {
          // Item already exists in the cart, update its quantity
          const updatedItems = existingItems.map((i, index) =>
            index === existingItemIndex ? { ...i, quantity: i.quantity + 1 } : i
          );
          return {
            ...state,
            menuList: {
              ...state.menuList,
              [itemType]: updatedItems,
            },
          };
        } else {
          // New item, add to the cart
          return {
            ...state,
            menuList: {
              ...state.menuList,
              [itemType]: [...existingItems, { ...item, quantity: 1 }],
            },
          };
        }
      }
      return state;

    case 'INCREASE':
      if (action.payload) {
        const { item, itemType } = action.payload;
        const items = state.menuList[itemType];
        const index = items.findIndex((i) => i.name === item.name);

        if (index !== -1) {
          const updatedItems = items.map((i, idx) =>
            idx === index ? { ...i, quantity: i.quantity + 1 } : i
          );
          return {
            ...state,
            menuList: {
              ...state.menuList,
              [itemType]: updatedItems,
            },
          };
        }
      }
      return state;

    case 'DECREASE':
      if (action.payload) {
        const { item, itemType } = action.payload;
        const items = state.menuList[itemType];
        const index = items.findIndex((i) => i.name === item.name);

        if (index !== -1) {
          const itemToUpdate = items[index];
          if (itemToUpdate.quantity > 1) {
            // Decrease the quantity
            const updatedItems = items.map((i, idx) =>
              idx === index ? { ...i, quantity: i.quantity - 1 } : i
            );
            return {
              ...state,
              menuList: {
                ...state.menuList,
                [itemType]: updatedItems,
              },
            };
          } else {
            // Remove the item as its quantity will become 0
            return {
              ...state,
              menuList: {
                ...state.menuList,
                [itemType]: [
                  ...items.slice(0, index),
                  ...items.slice(index + 1),
                ],
              },
            };
          }
        }
      }
      return state;

    case 'CLEAR_CART':
      return {
        ...state,
        menuList: {
          wonton: [],
          dip: [],
        },
      };
      return state;

    default:
      return state;
  }
}
