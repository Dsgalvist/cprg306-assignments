"use client";

import Link from "next/link";
import { useState } from "react";

import NewItem from "./new-item";
import ItemList from "./item-list";

import itemsData from "./items.json";
import type { ItemType } from "./types";

export default function Page() {
    const [items, setItems] = useState<ItemType[]>(itemsData as ItemType[]);

    function handleAddItem(item: Omit<ItemType, "id">) {
        const newItem: ItemType = {
            id: crypto.randomUUID(),
            ...item,
        };

        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <main className="min-h-screen bg-gray-900 flex justify-center items-start p-6">
            <section className="w-full max-w-xl bg-white text-black rounded-xl shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Shopping List
                </h1>

                <NewItem onAddItem={handleAddItem} />

                <div className="mt-6">
                    <ItemList items={items} />
                </div>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/"
                        className="px-5 py-2 rounded-md font-semibold bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}