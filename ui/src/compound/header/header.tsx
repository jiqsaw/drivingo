import { UIAIButton, UIProfileButton } from '@drivingo/ui/components';
import { FC } from 'react';
import './header.scss';

export const UIHeader: FC = () => {
    return (
        <div className="header">
            <UIProfileButton />
            <UIAIButton />
        </div>
    );
};
