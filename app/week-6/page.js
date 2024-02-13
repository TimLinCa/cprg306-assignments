"use client"
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./newItem";
import itemsData from "./item.json";

export default function Page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    return (
        <main>
            <h1 class="m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <ItemList items={items}></ItemList>
        </main>
    );
}