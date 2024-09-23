
import { FC } from "react";

import { HighwayCodeDataProvider } from "@drivingo/data-provider";
import { UIHeader } from "@drivingo/ui/compound";
import { IonContent } from "@ionic/react";

type HighwayCodeDetailProps = {
    type: 'content' | 'signs';
    id: string;
};

const HighwayCodeDetail: FC<HighwayCodeDetailProps> = ({ id, type }) => {

    const data = type === 'content'
        ? HighwayCodeDataProvider.getContentDetail(id)
        : HighwayCodeDataProvider.getSignDetail(id);

    if (!data) {
        return <div>This page cannot be found.</div>;
    }

    return (
        <>
            <UIHeader collapse="condense" title={data.title} />
            <IonContent fullscreen className='ion-padding'>
                <div dangerouslySetInnerHTML={
                    {
                        __html: data.details.body
                    }}>
                </div>
            </IonContent>
        </>



    );
};

export default HighwayCodeDetail;
