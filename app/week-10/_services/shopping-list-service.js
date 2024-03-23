import { db } from "../_utils/firebase";
import {
    collection,
    addDoc,
    getDoc,
    getDocs,
    setDoc,
    onSnapshot,
    query,
    doc,
    where,
} from "firebase/firestore";

export const getItems = async (userId) => {
    try {
        const usersCol = collection(db, `users/${userId}/items`);
        const itemsSnapshot = await getDocs(usersCol);
        const items = itemsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return items;
    }
    catch (error) {
        console.error("Error in getItems:", error);
    }
}

export const addItem = async (userId, item) => {
    const usersCol = collection(db, `users/${userId}/items`);
    const newItem = await addDoc(usersCol, item);
    return newItem.id;
}

