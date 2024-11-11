import { IUser } from '@drivingo/models';
import {
    GoogleAuthProvider,
    signOut as _signOut,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
} from 'firebase/auth';
import { getFirebaseApp } from '.';

export const auth = getAuth(getFirebaseApp());

export function authStateChange(callback: (user: IUser) => void) {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            const user: IUser = {
                uid: firebaseUser.uid,
                displayName: firebaseUser.displayName,
                email: firebaseUser.email,
                photoURL: firebaseUser.photoURL,
            };

            callback(user);
        } else {
            console.error('Firebase user cannot be found!');
        }
    });

    return unsubscribe;
}

export async function signInWithGoogle() {
    try {
        await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
        console.error('Error during Google login:', error);
    }
}

export async function signOut() {
    await _signOut(auth);
}
