"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [nameTouched, setNameTouched] = useState(false);

    const increase = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!name || name.length < 2) {
            alert("Error: Item Name must be at least 2 characters long.");
            return;
        }

        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
        setNameTouched(false);
    };

    const isDisabled = !name || name.length < 2;

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white border border-gray-300 rounded p-8 flex flex-col gap-6">

            <div className="flex flex-col gap-2">
                <label className="font-bold">Item Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onBlur={() => setNameTouched(true)}
                    placeholder="Enter item name"
                    className={`w-full border rounded p-3 ${!name && nameTouched ? "border-red-500" : "border-gray-300"
                        }`} />
                {!name && nameTouched && (
                    <p className="text-red-500">Name is required.</p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-bold">Quantity: {quantity}</p>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={decrease}
                        disabled={quantity === 1}
                        className="w-16 h-12 rounded bg-gray-300 text-black font-bold disabled:bg-gray-400 disabled:cursor-not-allowed">
                        −
                    </button>

                    <button
                        type="button"
                        onClick={increase}
                        disabled={quantity === 99}
                        className="w-16 h-12 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                        +
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold">Category</label>
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-full border rounded p-3 border-gray-300">
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

            <button
                type="submit"
                disabled={isDisabled}
                className="w-full rounded py-3 font-bold text-white bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed">
                Add Item
            </button>
        </form>
    );
}
