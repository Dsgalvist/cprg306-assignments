"use client";

import Link from "next/link";
import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import type { ItemType } from "./types";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user, firebaseSignOut } = useUserAuth();

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

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    };

    if (!user) {
        return (
            <main className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
                <section className="bg-gray-950 p-6 rounded text-center max-w-md w-full">
                    <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
                    <p className="mb-4">You must be logged in to view the shopping list.</p>

                    <Link
                        href="/week-8"
                        className="inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Back to Login
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-900 text-white p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Shopping List + Meal Ideas</h1>
                    <p className="mt-2">Welcome ({user.email})</p>
                </div>

                <div className="flex gap-3">
                    <Link
                        href="/week-8"
                        className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        ← Back
                    </Link>

                    <button
                        onClick={handleSignOut}
                        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-white"
                    >
                        Logout
                    </button>
                </div>
            </div>

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