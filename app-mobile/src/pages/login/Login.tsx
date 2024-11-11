import { FeatLogin } from '@drivingo/auth';
import { IonContent, IonPage } from '@ionic/react';
const Login = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <aside className="container">
                    <FeatLogin />
                </aside>
            </IonContent>
        </IonPage>
    );
};

export default Login;
