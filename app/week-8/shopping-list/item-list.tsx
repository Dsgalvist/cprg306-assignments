"use client";

import { useMemo, useState } from "react";
import Item from "./item";
import type { ItemType } from "./types";

type SortBy = "name" | "category" | "grouped";

export default function ItemList({
    items,
    onItemSelect,
}: {
    items: ItemType[];
    onItemSelect: (item: ItemType) => void;
}) {
    const [sortBy, setSortBy] = useState<SortBy>("name");

    const buttonBase = "px-4 py-2 rounded-md font-semibold border transition";
    const active = "bg-black text-white border-black";
    const inactive = "bg-white text-black border-gray-300 hover:bg-gray-100";

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            if (sortBy === "category") return a.category.localeCompare(b.category);
            return 0;
        });
    }, [items, sortBy]);

    const groupedItems = useMemo(() => {
        const groups = items.reduce<Record<string, ItemType[]>>((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});

        return Object.keys(groups)
            .sort((a, b) => a.localeCompare(b))
            .map((category) => ({
                category,
                items: [...groups[category]].sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            }));
    }, [items]);

    return (
        <div>
            <div className="flex gap-2 mb-5 flex-wrap">
                <button
                    type="button"
                    className={`${buttonBase} ${sortBy === "name" ? active : inactive}`}
                    onClick={() => setSortBy("name")}
                >
                    Sort by Name
                </button>

                <button
                    type="button"
                    className={`${buttonBase} ${sortBy === "category" ? active : inactive}`}
                    onClick={() => setSortBy("category")}
                >
                    Sort by Category
                </button>

                <button
                    type="button"
                    className={`${buttonBase} ${sortBy === "grouped" ? active : inactive}`}
                    onClick={() => setSortBy("grouped")}
                >
                    Group by Category
                </button>
            </div>

            {sortBy !== "grouped" ? (
                <ul className="grid gap-3">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => onItemSelect(item)}
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
                                        onSelect={() => onItemSelect(item)}
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