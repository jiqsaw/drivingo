import { TopicDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiActions,
    storeUiSelectors,
} from '@drivingo/store';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { Subheader } from '../../../components/headers/subheader/subheader';

const QuickTest = () => {
    const topics = TopicDataProvider.getData();
    const dispatch = useDispatch();
    const filteredTopics = useSelector(
        storeTheoryActiveTestSelectors.filteredTopics,
    );
    const uiQuickTestNumberOfQuestions = useSelector(
        storeUiSelectors.quickTestNumberOfQuestions,
    );

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
                                {filteredTopics?.includes(topic) && <>✓</>}
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
        </IonPage>
    );

    function selectTopic(topic: ITopic) {
        dispatch(storeTheoryActiveTestActions.selectTopic({ topic }));
    }

    function handleNumberOfQuestionsChange(item: number) {
        dispatch(storeUiActions.updateQuickTestNumberOfQuestions(item));
    }
};

export default QuickTest;
