import { FeatTrafficSigns } from '@drivingo/feat-traffic-signs';
import { UIScrollTop } from '@drivingo/ui';
import { IonContent, IonPage, ScrollDetail } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import Header from 'app-mobile/src/components/header/header';
import { createRef, useState } from 'react';

const TrafficSigns: React.FC = () => {
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
                <aside className="container traffic-signs">
                    <Header />
                    <FeatTrafficSigns />
                </aside>
                <BottomNavigation />
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

export default TrafficSigns;
