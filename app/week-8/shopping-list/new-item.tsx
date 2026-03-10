"use client";

import { useState } from "react";
import type { ItemType } from "./types";

export default function NewItem({
    onAddItem,
}: {
    onAddItem: (item: Omit<ItemType, "id">) => void;
}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState<ItemType["category"]>("produce");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        onAddItem({
            name,
            quantity,
            category,
        });

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded mb-4">
            <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item name"
                className="w-full p-2 mb-2 text-black"
            />

            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full p-2 mb-2 text-black"
            />

            <select
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value as ItemType["category"])
                }
                className="w-full p-2 mb-2 text-black"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen</option>
                <option value="canned">Canned</option>
                <option value="dry">Dry</option>
                <option value="household">Household</option>
            </select>

            <button className="bg-blue-600 px-4 py-2 rounded">
                Add Item
            </button>
        </form>
    );
}