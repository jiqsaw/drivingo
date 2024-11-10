import { UIButton } from '@drivingo/ui';

const FeatLogin = () => {
    return (
        <aside>
            <h1>Login</h1>
            <p>content...</p>
            <UIButton
                text="Login with Google"
                onClick={() => loginWithGoogle()}
            />{' '}
            <br />
            <br />
            <UIButton
                text="Login with Apple"
                onClick={() => loginWithApple()}
            />
        </aside>
    );

    function loginWithGoogle() {
        console.log('handle Google login');
    }

    function loginWithApple() {
        console.log('handle Apple login');
    }
};

export default FeatLogin;
