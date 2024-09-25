
import { HighwayCodeDetail } from "@drivingo/feat-highway-code";

import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router";

const HighwayCodeDetailPage = () => {
    const params = useParams<{ id: string, type: 'content' | 'signs'; }>();
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='page-container subpage flex-column'>
                    <HighwayCodeDetail {...params} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HighwayCodeDetailPage;
