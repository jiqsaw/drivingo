import { FeatLogin } from '@drivingo/auth';
import { IonContent, IonPage } from '@ionic/react';
const Login = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <FeatLogin />
            </IonContent>
        </IonPage>
    );
};

export default Login;
