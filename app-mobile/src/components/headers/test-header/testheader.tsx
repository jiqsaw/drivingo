import { IonBackButton, IonButtons } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { FC } from 'react';
import './subheader.scss';

interface Props {
    title?: string;
}

export const TestHeader: FC<Props> = ({ title = '' }) => {
    return (
        <div className="test-header">
            <IonButtons>
                <IonBackButton text={title} icon={arrowBack} />
            </IonButtons>
            {/* <UIAIButton /> */}
        </div>
    );
};
