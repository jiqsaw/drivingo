
import { IonContent, IonPage } from "@ionic/react";
import { UIHeader } from "@drivingo/ui/compound";
import { useParams } from "react-router";
import { HighwayCodeDetail } from "@drivingo/feat-highway-code";

const HighwayCodeDetailPage = () => {

  // use params
  const { id } = useParams<{ id: string }>();



  return (
    <IonPage>
      <UIHeader title='HighwayCode Detail' />
      <IonContent fullscreen className='ion-padding'>
        <HighwayCodeDetail id={id} />
      </IonContent>
    </IonPage >
  )
}

export default HighwayCodeDetailPage;
