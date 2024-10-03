import { UIAIButton, UIProfileButton } from '@drivingo/ui/components';
import { FC } from 'react';
import './header.scss';

interface Props {
    title: string;
}

export const UIHeader: FC<Props> = ({ title }) => {
    return (
        <div className="header">
            <div className="header--bar">
                <UIProfileButton />
                <UIAIButton />
            </div>
            <h1>{title}</h1>
        </div>
    );
};
