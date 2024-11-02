import { IonSearchbar } from '@ionic/react';
import { FC } from 'react';

export interface SearchBoxProps {
    onChange: (event: string) => void;
}

export const UISearchBox: FC<SearchBoxProps> = ({ onChange }) => {
    return (
        <IonSearchbar
            placeholder="Search"
            onIonInput={(e) => onChange(e.target.value as string)}
        ></IonSearchbar>
    );
};
