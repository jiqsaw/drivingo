import { FC, useEffect, useState } from 'react';
import { ArrowUpIcon } from '../icons';

import './scroll-up.scss';

type UIScrollUpProps = {
    visibled: boolean;
    handleScrollUp?: () => void;
};

export const UIScrollUp: FC<UIScrollUpProps> = ({
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
