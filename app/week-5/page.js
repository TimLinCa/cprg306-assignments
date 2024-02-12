"use client"
import { useState } from "react";
import ItemList from "./item-list";

export default function Page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
        <main>
            <h1 class="m-2">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    );
}