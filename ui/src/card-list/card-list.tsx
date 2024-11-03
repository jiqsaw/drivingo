import { FC } from 'react';
import './card-list.scss';

type UICardListProps = {
    children: React.ReactNode;
    className?: string;
};

export const UICardList: FC<UICardListProps> = ({ children, className }) => {
    return <div className={`card-list ${className}`}>{children}</div>;
};
