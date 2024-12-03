import { PageIntro, UITabs } from '@drivingo/ui';
import { IonContent, IonPage } from '@ionic/react';
import Header from 'app-mobile/src/components/header/header';
import { useState } from 'react';
import LearnPractice from './practise/Practice';
import LearnStudy from './study/Study';

const Learn: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Header />
                    <PageIntro
                        title="Learn"
                        descripton="This is where you start to study. Look through the topics."
                        icon="/assets/images/learn.png"
                    />
                    <aside>
                        <UITabs
                            items={['Study', 'Practice']}
                            onChange={(index) => setSelectedTab(index)}
                        />

                        {selectedTab === 0 && <LearnStudy />}
                        {selectedTab === 1 && <LearnPractice />}
                    </aside>
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default Learn;
