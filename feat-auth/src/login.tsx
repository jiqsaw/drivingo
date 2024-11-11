import { signInWithGoogle } from '@drivingo/db/firebase';
import { UIButton } from '@drivingo/ui';

const FeatLogin = () => {
    return (
        <aside>
            <h1>Login</h1>
            <p>content...</p>
            <UIButton
                text="Login with Google"
                onClick={() => signInWithGoogle()}
            />{' '}
            <br />
            <br />
            <UIButton
                text="Login with Apple"
                type="secondary"
                onClick={() => appleSignIn()}
            />
            <br />
            <br />
        </aside>
    );

    async function appleSignIn() {
        console.log('handle Apple login');
    }
};

export default FeatLogin;
