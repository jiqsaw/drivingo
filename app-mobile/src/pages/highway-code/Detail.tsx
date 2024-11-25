import { UIScrollTop } from '@drivingo/ui';
import { IonContent, IonPage, ScrollDetail } from '@ionic/react';
import Header from '../../components/header/header';

import FeatHighwayCodeDetail from 'feat-highway-code/src/Detail';
import { createRef, useState } from 'react';
import { useParams } from 'react-router';

const HighwayCodeDetail = () => {
    const params = useParams<{ id: string; type: 'content' | 'signs' }>();

    const contentRef = createRef<HTMLIonContentElement>();
    const [visibledScrollTop, setVisibledScrollTop] = useState(false);

    return (
        <IonPage>
            <IonContent
                fullscreen
                className="main-content"
                scrollEvents={true}
                ref={contentRef}
                onIonScroll={(ev: CustomEvent<ScrollDetail>) => {
                    setVisibledScrollTop(ev.detail.scrollTop > 300);
                }}
            >
                <aside className="container highway-code">
                    <Header isRoot={false} />
                    <FeatHighwayCodeDetail {...params} />
                </aside>
            </IonContent>
            <UIScrollTop
                visibled={visibledScrollTop}
                handleScrollUp={() => {
                    contentRef.current?.scrollToTop(500);
                }}
            />
        </IonPage>
    );
};

export default HighwayCodeDetail;
