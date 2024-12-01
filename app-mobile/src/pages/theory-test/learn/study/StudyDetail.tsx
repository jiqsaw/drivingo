import { UIScrollTop } from '@drivingo/ui';
import { IonContent, IonPage, ScrollDetail } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';
import { createRef, useState } from 'react';

const LearnStudyDetail: React.FC = () => {
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
                    <Header isRoot={false} />
                    asdasadsdasdsa
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

export default LearnStudyDetail;
