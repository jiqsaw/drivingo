import { TopicDataProvider } from '@drivingo/data-provider';
import { CONSTANTS } from '@drivingo/global';
import { ITopic, TestType } from '@drivingo/models';
import {
    storeTheoryActiveTestActions,
    storeTheoryActiveTestSelectors,
    storeUiActions,
    storeUiSelectors,
} from '@drivingo/store';
import {
    AlertsIcon,
    UIButton,
    UICardList,
    UITestProgressCard,
} from '@drivingo/ui';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';

import { Subheader } from '../../../components/headers/subheader/subheader';
import '../../../styles/pages/subpage.scss';

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
                <aside className="container theory-test pb-60">
                    <Subheader />
                    <h1>Quick Test</h1>
                    <p>
                        Select multiple topics and build your own custom test.
                        Analyse your progress.
                    </p>
                    <div className="quick-test-number-of-questions">
                        <h4 className="quick-test-number-of-questions__title">
                            Number of questions:{' '}
                        </h4>
                        {CONSTANTS.quickTestNumberOfQuestionsList.map(
                            (item) => {
                                return (
                                    <span
                                        className={`quick-test-number-of-questions__item ${
                                            uiQuickTestNumberOfQuestions ===
                                            item
                                                ? 'active'
                                                : ''
                                        }`}
                                        key={item}
                                        onClick={() =>
                                            handleNumberOfQuestionsChange(item)
                                        }
                                    >
                                        {item}
                                    </span>
                                );
                            },
                        )}
                    </div>

                    <UICardList className="grid-2-cols">
                        {topics.map((topic) => {
                            return (
                                <>
                                    <UITestProgressCard
                                        key={topic.code}
                                        title={topic.name}
                                        progress={20}
                                        icon={<AlertsIcon />}
                                        isChecked={filteredTopics?.includes(
                                            topic,
                                        )}
                                        onClick={() => selectTopic(topic)}
                                    />
                                </>
                                // Buraya topic cardlar UI libraryden gelmeli
                            );
                        })}
                    </UICardList>
                    <div
                        className={`fixed-bottom-button  ${
                            filteredTopics && filteredTopics.length > 0
                                ? 'active'
                                : 'disabled'
                        }`}
                    >
                        <IonRouterLink
                            className={`w-full`}
                            routerDirection="forward"
                            routerLink={`/theory-test/test/${TestType.QuickTest}`}
                        >
                            <UIButton
                                id="present-alert"
                                fullWidth
                                fullRounded
                                text="Start"
                                nextIcon={true}
                            />
                        </IonRouterLink>
                    </div>
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
