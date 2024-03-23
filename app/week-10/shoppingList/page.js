"use client"
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./newItem";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
export default function Page() {
    const { user } = useUserAuth();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (item) => {
        addItem(user.uid, item);
    }

    useEffect(() => {
        const loadItems = async () => {
            if (!user || user.uid == undefined) return;
            const fetchItems = await getItems(user.uid);
            setItems(fetchItems);
        };
        loadItems();
    }, [user, items]);

    const handleItemSelect = (ingredientName) => {
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