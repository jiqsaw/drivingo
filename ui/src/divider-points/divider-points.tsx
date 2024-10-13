import { FC } from 'react';
import './divider-points.scss';

type UIDividerPointsProps = {
    className?: string;
};

export const UIDividerPoints: FC<UIDividerPointsProps> = ({ className }) => {
    return <div className={`divider-points ${className}`} />;
};
