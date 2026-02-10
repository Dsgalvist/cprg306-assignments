import type { ItemType } from "./types";

type ItemProps = Pick<ItemType, "name" | "quantity" | "category">;

export default function Item({ name, quantity, category }: ItemProps) {
    return (
        <li className="p-4 bg-gray-100 rounded-md border border-gray-200">
            <p className="font-bold text-lg mb-2">{name}</p>

            <p className="text-sm">
                <span className="font-semibold">Quantity:</span> {quantity}
            </p>

            <p className="text-sm capitalize">
                <span className="font-semibold">Category:</span> {category}
            </p>
        </li>
    );
}

