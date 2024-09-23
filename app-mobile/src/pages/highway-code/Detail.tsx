
import { HighwayCodeDetail } from "@drivingo/feat-highway-code";
import { IonPage } from "@ionic/react";
import { useParams } from "react-router";

const HighwayCodeDetailPage = () => {

    const params = useParams<{ id: string, type: 'content' | 'signs'; }>();
    console.log(params);
    return (
        <IonPage>
            <HighwayCodeDetail {...params} />
        </IonPage >
    );
};

export default HighwayCodeDetailPage;
