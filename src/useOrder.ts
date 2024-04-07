import { useState } from "react";
import type { MenuItem, OrderItem } from "./types";

const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

	const addItem = (item: MenuItem) => {
		
		const newItem = {...item, quantity: 1}
		setOrder([...order, newItem])

	}
	
	return { addItem };
};

export default useOrder;
