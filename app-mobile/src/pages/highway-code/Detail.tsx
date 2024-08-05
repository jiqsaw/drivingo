
import { HighwayCodeDetail } from "@drivingo/feat-highway-code";
import { UIHeader } from "@drivingo/ui/compound";
import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router";

const HighwayCodeDetailPage = () => {

  const params = useParams<{ id: string, type: 'content' | 'signs'; }>();
  return (
    <IonPage>
      <UIHeader title='HighwayCode Detail' />
      <IonContent fullscreen className='ion-padding'>
        <HighwayCodeDetail {...params} />
      </IonContent>
    </IonPage >
  );
};

export default HighwayCodeDetailPage;
