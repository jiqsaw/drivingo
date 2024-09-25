
import { FeatHighwayCode } from "@drivingo/feat-highway-code";
import { IonContent, IonPage } from "@ionic/react";
import '../../styles/pages/subpage.scss';

const HighwayCode = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='page-container subpage flex-column'>
                    <FeatHighwayCode />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HighwayCode;
