interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="border border-white rounded-md p-4 mb-4">
      <p className="font-semibold">{name}</p>
      <p className="font-semibold">Quantity: {quantity}</p>
      <p className="font-semibold">Category: {category}</p>
    </li>
  );
}