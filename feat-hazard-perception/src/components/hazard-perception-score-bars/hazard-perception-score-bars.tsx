import { FC } from 'react';

import './hazard-perception-score-bars.scss';

type HazardPerceptionScoreBarsProps = {
    barPositions: number[];
};

export const HazardPerceptionScoreBars: FC<HazardPerceptionScoreBarsProps> = ({
    barPositions,
}) => {
    if (barPositions.length === 0) {
        return;
    }
    return (
        <div className="score-bars">
            {barPositions.map((item, index) => (
                <div style={{ left: item }} key={'score-bar-' + index} />
            ))}
        </div>
    );
};
