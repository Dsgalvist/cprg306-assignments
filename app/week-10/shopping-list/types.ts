export type ItemType = {
    id: string;
    name: string;
    quantity: number;
    category:
    | "produce"
    | "dairy"
    | "bakery"
    | "meat"
    | "frozen"
    | "canned"
    | "dry"
    | "household";
};