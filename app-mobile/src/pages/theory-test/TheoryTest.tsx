import { UIButton, UILink } from 'ui/src';

import { IonContent, IonPage, IonRouterLink } from '@ionic/react';

import { signOut } from '@drivingo/db-client';
import { QuestionBank } from '@drivingo/models';
import { storeUiActions, storeUiSelectors } from '@drivingo/store';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/pages/home.scss';

const TheoryTest: React.FC = () => {
    const dispatch = useDispatch();

    const uiQuestionBank = useSelector(storeUiSelectors.questionBank);

    return (
        <IonPage>
            {/* <UIHeader title='Theory Test' /> */}
            <IonContent fullscreen>
                <div className="page-container homepage">
                    <div className="main-content">
                        <div
                            onClick={() => questionBankChange(QuestionBank.Car)}
                        >
                            {uiQuestionBank === QuestionBank.Car && '✓'} Car
                        </div>
                        <div
                            onClick={() =>
                                questionBankChange(QuestionBank.Motorcycle)
                            }
                        >
                            {uiQuestionBank === QuestionBank.Motorcycle && '✓'}{' '}
                            Motorcycle
                        </div>
                        <div
                            onClick={() =>
                                questionBankChange(QuestionBank.LGV_PCV)
                            }
                        >
                            {uiQuestionBank === QuestionBank.LGV_PCV && '✓'}{' '}
                            LGV_PCV
                        </div>
                        <div
                            onClick={() => questionBankChange(QuestionBank.ADI)}
                        >
                            {uiQuestionBank === QuestionBank.ADI && '✓'} ADI
                        </div>

                        <IonRouterLink
                            routerDirection="root"
                            routerLink="/traffic-signs"
                        >
                            <p>Traffic Signs</p>
                        </IonRouterLink>
                        <UIButton text="example button" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <UILink text="link example" />

                        <IonRouterLink
                            routerLink="/theory-test/learn"
                            routerDirection="forward"
                        >
                            <p>Learn</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/theory-test/quick-test"
                        >
                            <p>Quick Test</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/theory-test/mock-test"
                        >
                            <p>Mock Test</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/theory-test/hazard-perception"
                        >
                            <p>Hazard Perception</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/highway-code"
                        >
                            <p>Highway Code</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/traffic-signs"
                        >
                            <p>Traffic Signs</p>
                        </IonRouterLink>

                        <IonRouterLink
                            routerDirection="forward"
                            routerLink="/subscription"
                        >
                            <p>Subscription</p>
                        </IonRouterLink>
                        <UIButton onClick={() => signOut()} text="Logout" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );

    function questionBankChange(questionBank: QuestionBank) {
        dispatch(storeUiActions.updateQuestionBank({ questionBank }));
    }
};

export default TheoryTest;
