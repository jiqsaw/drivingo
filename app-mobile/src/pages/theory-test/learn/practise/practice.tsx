import { TopicDataProvider } from '@drivingo/data-provider';
import { ITopic, TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { IonActionSheet, IonButton, useIonRouter } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LearnPractice = () => {
    const dispatch = useDispatch();
    const router = useIonRouter();
    const topics = TopicDataProvider.getData();
    const filteredTopics = useSelector(
        storeTheoryActiveTestSelectors.filteredTopics,
    );

    const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);

    return (
        <aside>
            <span>Practice</span>

            {topics.map((topic) => {
                return (
                    // Buraya topic cardlar UI libraryden gelmeli
                    <div key={topic.code} onClick={() => selectTopic(topic)}>
                        {filteredTopics?.includes(topic) && <>✓</>}
                        {topic.name}
                    </div>
                );
            })}
            {/* Bu button sadece en az bir topic secili oldugunda gorunur olacak */}
            <IonButton onClick={() => setIsActionSheetOpen(true)}>
                Start
            </IonButton>

            <IonActionSheet
                isOpen={isActionSheetOpen}
                header="Please select which questions to answer"
                buttons={[
                    {
                        text: 'All',
                        role: 'all',
                    },
                    {
                        text: 'Unanswered',
                        role: 'unanswered',
                    },
                    {
                        text: 'Incorrect',
                        role: 'incorrect',
                    },
                    {
                        text: 'Incorrect and unanswered',
                        role: 'incorrect-and-unanswered',
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                ]}
                onDidDismiss={({ detail }) => onActionSheetDismiss(detail)}
            ></IonActionSheet>
        </aside>
    );

    function selectTopic(topic: ITopic) {
        dispatch(storeTheoryActiveTestActions.selectTopic({ topic }));
    }

    function onActionSheetDismiss(result: OverlayEventDetail) {
        console.log('result:', result.role);
        router.push(`/theory-test/test/${TestType.LearnPractice}`, 'forward');
    }
};

export default LearnPractice;
