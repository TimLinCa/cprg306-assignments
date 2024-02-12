"use client"
import { useState } from "react";
import ItemList from "./item-list";
import item from "./item.json";
export default function Page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortBy, setsortBy] = useState("Name");
    let itemData = item
    if (sortBy === "Name") {
        itemData.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "Category") {
        itemData.sort((a, b) => a.category.localeCompare(b.category))
    } else if (sortBy === "groupByCategory") {
        itemData = Object.groupBy(itemData, ({ category }) => category);
    }
    console.log(sortBy);
    return (
        <main>
            <h1 class="m-2">Shopping List</h1>

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
            <ItemList items={itemData} sortBy={sortBy}></ItemList>
        </main>
    );
}