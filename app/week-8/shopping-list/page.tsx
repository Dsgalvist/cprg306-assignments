"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import type { ItemType } from "./types";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState<ItemType[]>(itemsData as ItemType[]);
    const [selectedItemName, setSelectedItemName] = useState<string>("");

    function handleAddItem(item: Omit<ItemType, "id">) {
        const newItem: ItemType = {
            id: crypto.randomUUID(),
            ...item,
        };
        setItems((prev) => [...prev, newItem]);
    }

    function cleanItemName(text: string): string {
        let cleaned = text.split(",")[0].trim();
        cleaned = cleaned.replace(/\p{Extended_Pictographic}/gu, "");
        cleaned = cleaned.replace(/[^a-zA-Z\s-]/g, "");
        cleaned = cleaned.replace(/\s+/g, " ").trim().toLowerCase();

        return cleaned;
    }

    function handleItemSelect(item: ItemType) {
        setSelectedItemName(cleanItemName(item.name));
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Shopping List + Meal Ideas</h1>

            <div className="flex flex-col md:flex-row gap-6">
                <section className="md:w-1/2 bg-gray-950 p-4 rounded">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </section>

                <section className="md:w-1/2 bg-gray-950 p-4 rounded">
                    <MealIdeas ingredient={selectedItemName} />
                </section>
            </div>
        </main>
    );
}