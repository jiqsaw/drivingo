import { IHighwayCode } from "@drivingo/models";
import { IonRouterLink } from "@ionic/react";
import { FC } from "react";



type HighwayCodeContentProps = {
  data: IHighwayCode[];
}

const HighwayCodeContent: FC<HighwayCodeContentProps> = ({ data }) => {
  return (
    <div>
      {
        data.map((item) => (
          <div key={item.id}>
            <IonRouterLink routerLink={`/highway-code/${item.id}`}>
              <h2>{item.title}</h2>
            </IonRouterLink>
          </div>
        ))
      }
    </div>
  )
}

export default HighwayCodeContent;
