import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../_utils/firebase";

export interface Item {
  id?: string;
  name: string;
  quantity: number;
  category: string;
}

export async function getItems(userId: string): Promise<Item[]> {
  const items: Item[] = [];
  const colRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(colRef);

  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...(doc.data() as Omit<Item, "id">),
    });
  });

  return items;
}

export async function addItem(
  userId: string,
  item: Omit<Item, "id">,
): Promise<string> {
  const colRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(colRef, item);
  return docRef.id;
}
