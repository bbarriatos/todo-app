// import { uid } from "uid";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  getFirestore,
  addDoc,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKlevchad9nz60QtvjTw52V6OkkvtQwTs",
  authDomain: "todo-3d05a.firebaseapp.com",
  projectId: "todo-3d05a",
  storageBucket: "todo-3d05a.appspot.com",
  messagingSenderId: "516322045577",
  appId: "1:516322045577:web:190399620536cec36aa058",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createTodoDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getTodoDocument = async (collectionKey) => {
  const ref = query(collection(db, collectionKey));
  const dataDoc = await getDocs(ref);

  dataDoc.forEach((doc) => {
    return doc.data();
  });

  const dataMap = dataDoc.docs.reduce((acc = [], docSnapshot) => {
    const { id } = docSnapshot.data();
    acc[id] = docSnapshot.data();

    return acc;
  }, {});

  return dataMap;
};

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });

      updateProfile(auth.currentUser, additionalInformation);
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const signUpUser = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        alert("incorrect password for email");
        break;
      case "auth/user-not-found":
        alert("no user associated with this email");
        break;
      default:
        console.log("Error: ", error);
    }
  }
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
