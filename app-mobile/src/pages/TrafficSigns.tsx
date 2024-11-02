import { FeatTrafficSigns } from '@drivingo/feat-traffic-signs';
import { UIScrollUp } from '@drivingo/ui';
import { IonContent, IonPage, ScrollDetail } from '@ionic/react';
import { createRef, useState } from 'react';
import BottomNavigation from '../components/bottom-navigation/bottom-navigation';
import Header from '../components/headers/header/header';

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
                <aside className="container">
                    <Header />
                    <FeatTrafficSigns />
                </aside>
                <BottomNavigation />
            </IonContent>
            <UIScrollUp
                visibled={visibledScrollTop}
                handleScrollUp={() => {
                    contentRef.current?.scrollToTop(0);
                }}
            />
        </IonPage>
    );
};

export default TrafficSigns;
