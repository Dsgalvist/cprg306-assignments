type ItemProps = {
    name: string;
    quantity: number;
    category: string;
    onSelect: () => void;
};

export default function Item({
    name,
    quantity,
    category,
    onSelect,
}: {
    name: string;
    quantity: number;
    category: string;
    onSelect?: () => void;
}) {
    return (
        <li
            onClick={onSelect}
            className="bg-gray-800 p-2 m-2 rounded cursor-pointer hover:bg-gray-700"
        >
            <p className="font-bold text-lg">{name}</p>

            <p>
                <strong>Quantity:</strong> {quantity}
            </p>

            <p>
                <strong>Category:</strong> {category}
            </p>
        </li>
    );
}
