import {
    storeSubscriptionSelectors,
    storeUserSelectors,
} from '@drivingo/store';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Login from './pages/login/Login';
import Subscription from './pages/subscription/Subscription';

type Props = {
    children: React.ReactNode;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
    const isSubscribed = useSelector(storeSubscriptionSelectors.isSubscribed);
    const isLoggedIn = useSelector(storeUserSelectors.isLoggedIn);

    if (!isSubscribed || !isLoggedIn) {
        if (!isSubscribed) {
            return <Subscription />;
        } else {
            return <Login />;
        }
    } else {
        return children;
    }
};

export default ProtectedRoute;
