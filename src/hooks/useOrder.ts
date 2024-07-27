import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (!itemExist) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
      return;
    }

    const updatedOrder = order.map((orderItem) =>
      orderItem.id === item.id
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
    );
    setOrder(updatedOrder);
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  };

  return { order, tip, setTip, addItem, removeItem, placeOrder };
};

export default useOrder;
