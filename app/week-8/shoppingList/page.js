"use client"
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./newItem";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
export default function Page() {
    const { user } = useUserAuth();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (item) => {
        setItems([...items, item]);
    }

    const handleItemSelect = (ingredientName) => {
        console.log(ingredientName);
        setSelectedItemName(ingredientName);
    }

    return (
        user === null ? <p>Your need to be signed in to view this page.</p> :
            <main>
                <h1 className="m-2 text-4xl">Shopping List</h1>
                <div className="flex flex-row ">
                    <div>
                        <NewItem onAddItem={handleAddItem}></NewItem>
                        <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
                    </div>
                    <div>
                        <MealIdeas ingredient={selectedItemName}></MealIdeas>
                    </div>
                </div>
            
 
        </main>
    );
}