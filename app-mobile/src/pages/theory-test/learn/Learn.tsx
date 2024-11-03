import { UITabs } from '@drivingo/ui';
import { IonContent, IonPage } from '@ionic/react';
import { Subheader } from 'app-mobile/src/components/headers/subheader/subheader';
import { useState } from 'react';
import LearnPractice from './practise/practice';
import LearnStudy from './study/study';

const Learn: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <aside>
                        <h1>Learn</h1>
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
