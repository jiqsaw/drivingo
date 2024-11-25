import { IonMenu } from '@ionic/react';
import { FC } from 'react';
import './side-select-language.scss';

interface SideSelectLanguageProps {
    contentId: string;
    side?: 'start' | 'end';
}

export const SideSelectLanguage: FC<SideSelectLanguageProps> = ({
    contentId,
    side = 'end',
}) => {
    return (
        <IonMenu side={side} contentId={contentId} className="side-select-language">
            <aside className="side-select-language__body">
                <div className="side-select-language__header"></div>
                <div className="side-select-language__content">asd</div>
                <div className="side-select-language__footer"></div>
            </aside>
        </IonMenu>
    );
};
