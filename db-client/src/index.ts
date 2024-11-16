import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
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
export const functions = getFunctions(getFirebaseApp(), 'europe-west2');

export * from './analysis';
export * from './auth';
export * from './translate';
