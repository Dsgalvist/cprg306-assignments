"use client";

import { useMemo, useState } from "react";
import Item from "./item";
import type { ItemType } from "./types";
import itemsData from "./items.json";

type SortBy = "name" | "category";

export default function ItemList() {
    const [sortBy, setSortBy] = useState<SortBy>("name");

    const items = useMemo(() => {
        const data = itemsData as ItemType[];

        return [...data].sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            return a.category.localeCompare(b.category);
        });
    }, [sortBy]);

    const buttonBase =
        "px-4 py-2 rounded-md font-semibold border transition";
    const active = "bg-black text-white border-black";
    const inactive = "bg-white text-black border-gray-300 hover:bg-gray-100";

    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-2 mb-5">
                <button
                    className={`${buttonBase} ${sortBy === "name" ? active : inactive}`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>

                <button
                    className={`${buttonBase} ${sortBy === "category" ? active : inactive}`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>
            </div>

            <ul className="grid gap-3">
                {items.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}
