import { UIAIButton } from '@drivingo/ui/components';
import { IonBackButton, IonButtons } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { FC } from 'react';
import './subheader.scss';

interface Props {
    title: string;
}

export const UISubheader: FC<Props> = ({ title }) => {
    return (
        <div className="subheader">
            <IonButtons>
                <IonBackButton text={''} icon={arrowBack} />
            </IonButtons>
            <UIAIButton />
        </div>
    );
};
