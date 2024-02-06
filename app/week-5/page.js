"use client"
import { useState } from "react";
import ItemList from "./item-list";
import Item from "./item";
export default function Page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortBy, setsortBy] = useState("Name");
    let itemList = [
        {
            "id": "1h2GJKH12gkHG31h1H",
            "name": "milk, 4 L 🥛",
            "quantity": 1,
            "category": "dairy"
        },
        {
            "id": "2KJH3k2j3H1k2J3K1H",
            "name": "bread 🍞",
            "quantity": 2,
            "category": "bakery"
        },
        {
            "id": "3h2KJH3k2j3H1k2J3",
            "name": "eggs, dozen 🥚",
            "quantity": 2,
            "category": "dairy"
        },
        {
            "id": "4k2J3K1H2GJKH12gk",
            "name": "bananas 🍌",
            "quantity": 6,
            "category": "produce"
        },
        {
            "id": "5H1h1H2KJH3k2j3H",
            "name": "broccoli 🥦",
            "quantity": 3,
            "category": "produce"
        },
        {
            "id": "6H1k2J3K1H2GJKH1",
            "name": "chicken breasts, 1 kg 🍗",
            "quantity": 1,
            "category": "meat"
        },
        {
            "id": "7gkHG31h1H2KJH3k",
            "name": "pasta sauce 🍝",
            "quantity": 3,
            "category": "canned goods"
        },
        {
            "id": "8j3H1k2J3K1H2GJK",
            "name": "spaghetti, 454 g 🍝",
            "quantity": 2,
            "category": "dry goods"
        },
        {
            "id": "9H12gkHG31h1H2KJ",
            "name": "toilet paper, 12 pack 🧻",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "10H3k2j3H1k2J3K1",
            "name": "paper towels, 6 pack",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "11k2J3K1H2GJKH12",
            "name": "dish soap 🍽️",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "12GJKH12gkHG31h1",
            "name": "hand soap 🧼",
            "quantity": 4,
            "category": "household"
        }
    ]

    if (sortBy === "Name") {
        itemList.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === "Category") {
        itemList.sort((a, b) => a.category.localeCompare(b.category))
    } else if (sortBy === "groupByCategory") {
        itemList = Object.groupBy(itemList, ({ category }) => category);
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
            <ItemList items={itemList} sortBy={sortBy}></ItemList>
        </main>
    );
}