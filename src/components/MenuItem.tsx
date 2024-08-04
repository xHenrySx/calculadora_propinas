import { Dispatch } from "react";
import type { MenuItem as MenuItemType } from "../types";
import { OrderActions } from "../reducers/order-reducer";
interface MenuItemProps {
  item: MenuItemType;
  dispatch: Dispatch<OrderActions>;
}
const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      type="button"
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p className="font-black">{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
};

export default MenuItem;
