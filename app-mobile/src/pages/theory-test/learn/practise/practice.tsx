import { TopicDataProvider } from '@drivingo/data-provider';
import { ITopic, TestLearnPracticeGroup, TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
} from '@drivingo/store';
import { IonActionSheet, IonButton, useIonRouter } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeTheoryProgressSelectors } from 'store/src/theory/progress/progress';

const LearnPractice = () => {
    const dispatch = useDispatch();
    const router = useIonRouter();
    const topics = TopicDataProvider.getData();
    const filteredTopics = useSelector(
        storeTheoryActiveTestSelectors.filteredTopics,
    );
    const progress = useSelector(storeTheoryProgressSelectors.progress);

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

            {/* ????? backdrop error */}
            <IonActionSheet
                isOpen={isActionSheetOpen}
                header="Please select which questions to answer"
                buttons={[
                    {
                        text: `All (${getTotalAll()})`,
                        role: TestLearnPracticeGroup.All.toString(),
                    },
                    {
                        text: `Unanswered (${getTotalUnanswered()})`,
                        role: TestLearnPracticeGroup.Unanswered.toString(),
                    },
                    {
                        text: `Incorrect (${getTotalIncorrect()})`,
                        role: TestLearnPracticeGroup.Incorrect.toString(),
                    },
                    {
                        text: `Incorrect and unanswered (${getTotalUnanswered() + getTotalIncorrect()})`,
                        role: TestLearnPracticeGroup.IncorrectAndUnanswered.toString(),
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
        setIsActionSheetOpen(false);
        const { role } = result;
        if (role && role !== 'backdrop' && role !== 'cancel') {
            router.push(
                `/theory-test/test/${TestType.LearnPractice}?learnPracticeGroup=${role}`,
                'forward',
            );
        }
    }

    function getTotalAll() {
        if (!filteredTopics || !topics) return 0;

        const filteredTopicCodes = new Set(
            filteredTopics.map((item) => item.code),
        );

        return topics.reduce((sum, topic) => {
            return filteredTopicCodes.has(topic.code) ? sum + topic.count : sum;
        }, 0);
    }

    function getTotalUnanswered() {
        if (!filteredTopics || !progress.learnPractice.topics) return 0;

        const filteredTopicCodes = new Set(
            filteredTopics.map((item) => item.code),
        );

        return progress.learnPractice.topics.reduce((total, item) => {
            if (filteredTopicCodes.has(item.code)) {
                const topicCount =
                    topics.find((topic) => topic.code === item.code)?.count ||
                    0;
                const unansweredCount =
                    topicCount -
                    (item.corrects.length + item.incorrects.length);
                return total + unansweredCount;
            }
            return total;
        }, 0);
    }

    function getTotalIncorrect() {
        if (!filteredTopics || !progress.learnPractice.topics) return 0;

        const filteredTopicCodes = new Set(
            filteredTopics.map((item) => item.code),
        );

        return progress.learnPractice.topics.reduce((total, item) => {
            return filteredTopicCodes.has(item.code)
                ? total + item.incorrects.length
                : total;
        }, 0);
    }
};

export default LearnPractice;
