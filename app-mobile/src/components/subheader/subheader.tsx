import { IonBackButton, IonButtons } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { FC } from 'react';
import { UIAIButton } from 'ui/src';
import './subheader.scss';

interface Props {
    title?: string;
}

export const Subheader: FC<Props> = ({ title = '' }) => {
    return (
        <div className="subheader">
            <IonButtons>
                <IonBackButton text={title} icon={arrowBack} />
            </IonButtons>
            <UIAIButton />
        </div>
    );
};
