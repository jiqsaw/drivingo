import { IHighwayCode } from "@drivingo/models";
import { IonRouterLink } from "@ionic/react";
import { FC } from "react";


type HighwayCodeSignsProps = {
    data: IHighwayCode[];
};

const HighwayCodeSigns: FC<HighwayCodeSignsProps> = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <IonRouterLink routerLink={`/highway-code/signs/${item.id}`}>
                        <span>{item.title}</span>
                    </IonRouterLink>
                </div>
            ))}
        </div>
    );
};

export default HighwayCodeSigns;
