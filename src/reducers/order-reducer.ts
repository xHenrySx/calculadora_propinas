import type { MenuItem, OrderItem } from "../types";

interface AddItem {
  type: "add-item";
  payload: { item: MenuItem };
}

interface RemoveItem {
  type: "remove-item";
  payload: { id: MenuItem["id"] };
}

interface PlaceOrder {
  type: "place-order";
}

interface AddTip {
  type: "add-tip";
  payload: { value: number };
}

export type OrderActions = AddItem | RemoveItem | PlaceOrder | AddTip;

interface OrderState {
  order: OrderItem[];
  tip: number;
}

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === "add-item") {
    const itemExist = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let updatedOrder: OrderItem[] = [];
    if (!itemExist) {
      const newItem = { ...action.payload.item, quantity: 1 };
      updatedOrder = [...state.order, newItem];
    } else {
      updatedOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    }

    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (action.type === "remove-item") {
    const updatedOrder = state.order.filter(
      (orderItem) => orderItem.id !== action.payload.id
    );
    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (action.type === "place-order") {
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }

  if (action.type === "add-tip") {
    return {
      ...state,
      tip: action.payload.value,
    };
  }

  return state;
};
