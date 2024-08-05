
import { HighwayCodeDetail } from "@drivingo/feat-highway-code";
import { UIHeader } from "@drivingo/ui/compound";
import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router";

const HighwayCodeDetailPage = () => {

  // use params
  const { type } = useParams<{ type: 'content' | 'signs'; }>();
  const { id } = useParams<{ id: string; }>();

  return (
    <IonPage>
      <UIHeader title='HighwayCode Detail' />
      <IonContent fullscreen className='ion-padding'>
        <HighwayCodeDetail id={id} type={type} />
      </IonContent>
    </IonPage >
  );
};

export default HighwayCodeDetailPage;
