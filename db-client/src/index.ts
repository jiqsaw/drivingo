import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore/lite';
import { FIREBASE_CONFIG } from './config';

let firebaseApp: FirebaseApp;

export const getFirebaseApp = (): FirebaseApp => {
    if (!getApps().length) {
        firebaseApp = initializeApp(FIREBASE_CONFIG);
    } else {
        firebaseApp = getApps()[0];
    }
    return firebaseApp;
};

export const db = getFirestore(getFirebaseApp());
// export const analytics = getAnalytics(getFirebaseApp());

export * from './analysis';
export * from './auth';
