import { db } from "../api/firebase";
import { ref, onValue } from "firebase/database";

export const subscribeGifts = (callback) => {
  const giftsRef = ref(db, "gifts");

  return onValue(giftsRef, (snapshot) => {
    const data = snapshot.val() || {};

    const giftArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    callback(giftArray);
  });
};
