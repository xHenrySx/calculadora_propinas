import type { MenuItem as MenuItemType } from "../types";
type MenuItemProps = {
  item: MenuItemType,
  addItem: (item: MenuItemType) => void
};
const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button 
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p className="font-black">{item.name}</p>
      <p>${item.price}</p>
    </button>
  );
};

export default MenuItem;
