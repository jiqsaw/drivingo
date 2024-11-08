import { FC } from 'react';
import { ArrowUpIcon } from '../icons';

import './scroll-top.scss';

type UIScrollTopProps = {
    visibled: boolean;
    handleScrollUp?: () => void;
};

export const UIScrollTop: FC<UIScrollTopProps> = ({
    visibled,
    handleScrollUp,
}) => {
    return (
        <button
            type="button"
            className={`scroll-up ${visibled ? 'visible' : ''}`}
            onClick={handleScrollUp}
        >
            <ArrowUpIcon />
        </button>
    );
};
