import { TopicDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeUiActions,
    storeUiSelectors,
} from '@drivingo/store';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import BottomNavigation from 'app-mobile/src/components/bottom-navigation/bottom-navigation';
import { Subheader } from 'app-mobile/src/components/headers/subheader/subheader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const QuickTest = () => {
    const topics = TopicDataProvider.getData();

    const dispatch = useDispatch();
    const [selectedItems, setSelectedItems] = useState<ITopic[] | null>(null);
    const uiQuickTestNumberOfQuestions = useSelector(
        storeUiSelectors.quickTestNumberOfQuestions,
    );

    useEffect(() => {
        if (selectedItems !== null) {
            dispatch(storeTheoryActiveTestActions.addTopics(selectedItems));
        }
    }, [selectedItems]);

    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <Subheader />
                    <h1>Quick Test</h1>

                    <span>Number of questions: </span>
                    {CONSTANTS.quickTestNumberOfQuestionsList.map((item) => {
                        return (
                            <span
                                key={item}
                                onClick={() =>
                                    handleNumberOfQuestionsChange(item)
                                }
                            >
                                {uiQuickTestNumberOfQuestions === item && '✓ '}
                                {item} &nbsp;
                            </span>
                        );
                    })}

                    <br />
                    <br />

                    {topics.map((topic) => {
                        return (
                            // Buraya topic cardlar UI libraryden gelmeli
                            <div
                                key={topic.code}
                                onClick={() => selectTopic(topic)}
                            >
                                {selectedItems?.includes(topic) && <>✓</>}
                                {topic.name}
                            </div>
                        );
                    })}
                    {/* Bu button sadece en az bir topic secili oldugunda gorunur olacak */}
                    <IonRouterLink
                        routerDirection="forward"
                        routerLink={`/theory-test/test/${TestType.QuickTest}`}
                    >
                        Start
                    </IonRouterLink>
                </aside>
            </IonContent>
            <BottomNavigation />
        </IonPage>
    );

    function selectTopic(topic: ITopic) {
        setSelectedItems((prevSelected) => {
            if (prevSelected == null) {
                return [topic];
            }
            return prevSelected.includes(topic)
                ? prevSelected.filter((item) => item.code !== topic.code)
                : [...prevSelected, topic];
        });
    }

    function handleNumberOfQuestionsChange(item: number) {
        dispatch(storeUiActions.updateQuickTestNumberOfQuestions(item));
    }
};

export default QuickTest;
