import { authStateChange } from '@drivingo/db/firebase';
import { storeUserActions } from '@drivingo/store';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
    children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = authStateChange((user) => {
            console.log('user:', user);
            if (user) {
                dispatch(storeUserActions.setUser(user));
            } else {
                dispatch(storeUserActions.clearUser());
            }
        });

        return () => unsubscribe();
    }, []);

    return <>{children}</>;
};

export default AuthProvider;
