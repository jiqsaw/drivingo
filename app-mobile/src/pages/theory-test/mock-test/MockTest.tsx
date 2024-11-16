import { DATA_TEST_QUESTIONS } from '@drivingo/data';
import { translateQuestion } from '@drivingo/db-client';
import { IQuestionBase, TestType } from '@drivingo/models';
import { IonContent, IonPage, IonRouterLink } from '@ionic/react';
import { useSelector } from 'react-redux';
import uiSelectors from 'store/src/ui/ui.selectors';
import { Subheader } from '../../../components/headers/subheader/subheader';

const questionData = DATA_TEST_QUESTIONS[1] as IQuestionBase;

const MockTest: React.FC = () => {
    const userLanguage = useSelector(uiSelectors.language);

    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container theory-test">
                    <Subheader />
                    <h1>Mock Test</h1>
                    <button onClick={() => translate()}>
                        Call helloWorldo Function
                    </button>

                    <br />
                    <br />
                    {/* Bu button sadece en az bir topic secili oldugunda gorunur olacak */}
                    <IonRouterLink
                        routerDirection="forward"
                        routerLink={`/theory-test/test/${TestType.MockTest}`}
                    >
                        Start
                    </IonRouterLink>
                </aside>
            </IonContent>
        </IonPage>
    );

    async function translate() {
        if (!userLanguage) {
            // ??? Get language code input from user
            return;
        }

        try {
            const result = translateQuestion(userLanguage, questionData);
            console.log('res', result);
        } catch (error) {
            console.error('Error calling translateQuestion function:', error);
        }
    }
};

export default MockTest;
