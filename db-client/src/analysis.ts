import { doc, setDoc } from 'firebase/firestore';
import { IStoreAnalysis } from 'store/src/analysis/analysis.model';
import { db, userEmail } from '.';

export const dbAnalysis = {
    async setTestResults(data: IStoreAnalysis) {
        const docId = userEmail();
        if (docId) {
            const docRef = doc(db, 'analysis', docId);
            await setDoc(docRef, { ...data }, { merge: true });
        }
    },
};
