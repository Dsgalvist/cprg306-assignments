"use client";

import { useMemo, useState } from "react";
import Item from "./item";
import type { ItemType } from "./types";
import itemsData from "./items.json";

type SortBy = "name" | "category" | "grouped";

export default function ItemList() {
    const [sortBy, setSortBy] = useState<SortBy>("name");

    const data = itemsData as ItemType[];

    const buttonBase = "px-4 py-2 rounded-md font-semibold border transition";
    const active = "bg-black text-white border-black";
    const inactive = "bg-white text-black border-gray-300 hover:bg-gray-100";

    // name or category
    const sortedItems = useMemo(() => {
        return [...data].sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "category") return a.category.localeCompare(b.category);
            return 0;
        });
    }, [data, sortBy]);

    // Grouped by category
    const groupedItems = useMemo(() => {

        const groups = data.reduce<Record<string, ItemType[]>>((acc, item) => {
            const key = item.category;
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});

        const categories = Object.keys(groups).sort((a, b) => a.localeCompare(b));

        return categories.map((cat) => {
            const items = [...groups[cat]].sort((a, b) => a.name.localeCompare(b.name));
            return { category: cat, items };
        });
    }, [data]);

    return (
        <div>
            {/* Buttons */}
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

                <button
                    className={`${buttonBase} ${sortBy === "grouped" ? active : inactive}`}
                    onClick={() => setSortBy("grouped")}
                >
                    Group by Category
                </button>
            </div>

            {/* Render */}
            {sortBy !== "grouped" ? (
                <ul className="grid gap-3">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </ul>
            ) : (
                <div className="space-y-6">
                    {groupedItems.map((group) => (
                        <section key={group.category}>
                            <h2 className="text-xl font-bold mb-2 capitalize">
                                {group.category}
                            </h2>

                            <ul className="grid gap-3">
                                {group.items.map((item) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}
