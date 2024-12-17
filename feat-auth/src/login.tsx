import { signInWithGoogle } from '@drivingo/db-client';
import { UIButton } from '@drivingo/ui';
import { logoApple, logoGoogle } from 'ionicons/icons';

import { IonRouterLink } from '@ionic/react';
import './styles/login.scss';

const FeatLogin = () => {
    return (
        <aside className="login">
            <div className="login__header">
                <img
                    src="assets/images/drivingo-logo-dark.svg"
                    className="login__logo"
                    alt="Drivingo"
                />
                <h1 className="login__slogan">Start Your Journey!</h1>
            </div>
            <div className="login__sub-header">
                <img
                    src="assets/images/icon-login-user.svg"
                    alt="User"
                    className="login__user-icon"
                />
                <p>
                    Sign up to view, analyze, and improve your test performance.
                </p>
            </div>
            <div className="login__actions">
                <UIButton
                    text="Login with Google"
                    fullWidth={true}
                    color="dark"
                    icon={logoGoogle}
                    onClick={() => signInWithGoogle()}
                />
                <UIButton
                    text="Login with Apple"
                    fullWidth={true}
                    color="dark"
                    icon={logoApple}
                    onClick={() => appleSignIn()}
                />
            </div>

            <IonRouterLink
                routerDirection="root"
                routerLink="#"
                className="login__link"
            >
                Trouble signing in?
            </IonRouterLink>

            <p className="login__details">
                By continuing, you agree to the{' '}
                <IonRouterLink
                    routerDirection="root"
                    routerLink="#"
                    className="login__link"
                >
                    Terms of Service
                </IonRouterLink>{' '}
                and{' '}
                <IonRouterLink
                    routerDirection="root"
                    routerLink="#"
                    className="login__link"
                >
                    Privacy Policy
                </IonRouterLink>
            </p>
        </aside>
    );

    async function appleSignIn() {
        console.log('handle Apple login');
    }
};

export default FeatLogin;
