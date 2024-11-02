import { Analytics, getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { User } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { BehaviorSubject } from 'rxjs';
import { FIREBASE_CONFIG } from './config';

export const db = () => DbFirebase.getInstance();

class DbFirebase {
    app: FirebaseApp;
    analytics: Analytics;
    fireStore: Firestore;
    authState$ = new BehaviorSubject<User | null>(null);

    private static instance: DbFirebase;

    public static getInstance(): DbFirebase {
        if (!DbFirebase.instance) {
            DbFirebase.instance = new DbFirebase();
        }
        return DbFirebase.instance;
    }

    constructor() {
        console.log('DbFirebase Constructor');

        this.app = initializeApp(FIREBASE_CONFIG);
        this.analytics = getAnalytics(this.app);
        this.fireStore = getFirestore(this.app);

        // this.auth();
    }

    // private auth() {
    //     const auth = getAuth(this.app);
    //     onAuthStateChanged(auth, (firebaseUser) => {
    //         console.log('db/firbase: onAuthStateChanged:', firebaseUser);
    //         this.authState$.next(firebaseUser);
    //     });
    // }
}
