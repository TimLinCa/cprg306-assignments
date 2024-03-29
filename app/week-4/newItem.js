"use client"
import { useState } from "react";

export default function NewItem() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [quantity, setQuantity] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [category, setCategory] = useState("Produce");

    function submitNewItem(e) {
        window.alert("Added item:" + name + "\nQuantity: " + quantity + "\nCategory: " + category)
    }

    return (
        <form onSubmit={submitNewItem} className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-left justify-center row-container" style={{ width: '239px' }}>
                    <label className="text-white">Name</label>
                    <input className="bg-slate-800 rounded-md p-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-left justify-center row-container">
                    <label className="text-white">Quantity</label>
                    <input className="bg-slate-800 rounded-md p-1" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" max="99" required></input>
                </div>
                <div className="flex flex-col items-left justify-center row-container ml-4"> {/* Added margin-left */}
                    <label className="text-white">Category</label>
                    <select className="bg-slate-800 rounded-md p-1" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <button className="bg-green-500 rounded-md w-20 h-10 m-5">Add</button>
            </div>
        </form>
    );
}