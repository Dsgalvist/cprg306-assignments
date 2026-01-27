import Item from "./item";

const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "Dairy",
};

const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "Bakery",
};

const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "Dairy",
};

const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "Produce",
};

const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "Produce",
};

const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "Meat",
};

const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "Canned Goods",
};

const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "Dry Goods",
};

const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "Household",
};

const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "Household",
};

const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "Household",
};

const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "Household",
};
export default function ItemList() {
    return (
        <ul className="max-w-3x1">
            <Item {...item1} />
            <Item {...item2} />
            <Item {...item3} />
            <Item {...item4} />
            <Item {...item5} />
            <Item {...item6} />
            <Item {...item7} />
            <Item {...item8} />
            <Item {...item9} />
            <Item {...item10} />
            <Item {...item11} />
            <Item {...item12} />
        </ul>
    );
}