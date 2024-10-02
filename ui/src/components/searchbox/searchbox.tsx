import { IonSearchbar } from '@ionic/react';
import { FC } from 'react';

import styles from './searchbox.module.scss';

export interface SearchBoxProps {
    text: string;
    onChange: (event: string) => void;
}

export const UISearchBox: FC<SearchBoxProps> = ({ text, onChange }) => {
    return (
        <IonSearchbar
            placeholder="Search"
            className={styles.main}
            onIonInput={(e) => onChange(e.target.value as string)}
        ></IonSearchbar>
    );
};
