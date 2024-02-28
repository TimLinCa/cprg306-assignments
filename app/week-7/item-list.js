import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setsortBy] = useState("Name");

    let sortedItems = [];

    if (sortBy === "Name") {
        sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Category") {
        sortedItems = items.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "groupByCategory") {
        sortedItems = Object.groupBy(items, ({ category }) => category);
    }

    return (

        <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <p className="m-2 text-white">Sort By:</p>
                <li className="me-2">
                    <a href="#" className={`inline-block px-4 py-3 ${sortBy === "Name" ? "text-white bg-blue-600" : ""} rounded-lg active`} aria-current="page" onClick={(e) => setsortBy("Name")}>Name</a>
                </li>
                <li className="me-2">
                    <a href="#" className={`inline-block px-4 py-3 ${sortBy === "Category" ? "text-white bg-blue-600" : ""} rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`} onClick={(e) => setsortBy("Category")}>Category</a>
                </li>
                <li className="me-2">
                    <a href="#" className={`inline-block px-4 py-3 ${sortBy === "groupByCategory" ? "text-white bg-blue-600" : ""} rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`} onClick={(e) => setsortBy("groupByCategory")}>GroupByCategory</a>
                </li>
            </ul>
            <ui className="list-none">
                {
                    (sortBy === "groupByCategory" && Object.keys(sortedItems).map(category => (
                        <li key={category}>
                            <h2 className="ml-2">{category}</h2>
                            <ui className="list-none">
                                {
                                    sortedItems[category].map(item => (
                                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}></Item>
                                    ))
                                }
                            </ui>
                        </li>
                    ))
                    )
                }
                {
                    (sortBy !== "groupByCategory" &&
                        sortedItems.map(item => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}></Item>
                        ))
                    )
                }
            </ui>
        </div>

    );
}