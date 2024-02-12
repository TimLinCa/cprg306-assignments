import Item from "./item";
import item from "./item.json";
import { useState } from "react";
export default function ItemList() {
    const [items, setItems] = useState(item);
    const [sortBy, setsortBy] = useState("Name");

    let SortedItems = [];

    if (sortBy === "Name") {
        SortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Category") {
        SortedItems = items.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "groupByCategory") {
        SortedItems = Object.groupBy(items, ({ category }) => category);
    }

    return (

        <div>
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <p class="m-2 text-white">Sort By:</p>
                <li class="me-2">
                    <a href="#" class={`inline-block px-4 py-3 ${sortBy === "Name" ? "text-white bg-blue-600" : ""} rounded-lg active`} aria-current="page" onClick={(e) => setsortBy("Name")}>Name</a>
                </li>
                <li class="me-2">
                    <a href="#" class={`inline-block px-4 py-3 ${sortBy === "Category" ? "text-white bg-blue-600" : ""} rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`} onClick={(e) => setsortBy("Category")}>Category</a>
                </li>
                <li class="me-2">
                    <a href="#" class={`inline-block px-4 py-3 ${sortBy === "groupByCategory" ? "text-white bg-blue-600" : ""} rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`} onClick={(e) => setsortBy("groupByCategory")}>GroupByCategory</a>
                </li>
            </ul>
            <ui class="list-none">
                {
                    (sortBy === "groupByCategory" && Object.keys(SortedItems).map(category => (
                        <li key={category}>
                            <h2 class="ml-2">{category}</h2>
                            {
                                SortedItems[category].map(item => (
                                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}></Item>
                                ))
                            }
                        </li>
                    ))
                    )
                }
                {
                    (sortBy !== "groupByCategory" &&
                        SortedItems.map(item => (
                            <li key={item.id}>
                                <Item name={item.name} quantity={item.quantity} category={item.category}></Item>
                            </li>
                        ))
                    )
                }
            </ui>
        </div>

    );
}