import { FC } from 'react';
import { UIAIButton, UIProfileButton } from 'ui/src';
import './header.scss';

const Header: FC = () => {
    return (
        <div className="header">
            <UIProfileButton />
            <UIAIButton />
        </div>
    );
};

export default Header;
