import { FC, useEffect, useState } from 'react';
import './timer.scss';

type TimerProps = {
    type: 'number' | 'clock';
    initialCountdownValue: number;
    // isPaused: boolean;
    // onChange?: (no: number) => void;
    warningFromNumber?: number;
    onFinish: () => void;
};

export const UITimer: FC<TimerProps> = (props: TimerProps) => {
    const { type, initialCountdownValue, warningFromNumber, onFinish } = props;
    const [currentCount, setCurrentCount] = useState(initialCountdownValue);

    useEffect(() => {
        if (currentCount > 0) {
            const countdownInterval = setInterval(() => {
                setCurrentCount((prevCount) => {
                    if (prevCount <= 1) {
                        clearInterval(countdownInterval);
                        setTimeout(() => {
                            onFinish();
                        }, 10);
                        return 0;
                    }
                    return prevCount - 1;
                });
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [onFinish]);

    return (
        <span
            className={
                type === 'clock' &&
                warningFromNumber &&
                currentCount <= warningFromNumber
                    ? 'blink'
                    : ''
            }
        >
            {currentCount > 0
                ? type === 'clock'
                    ? formatTimer(currentCount)
                    : currentCount
                : ''}
        </span>
    );

    function formatTimer(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        const formattedMins = String(mins).padStart(2, '0');
        const formattedSecs = String(secs).padStart(2, '0');

        return `${formattedMins}:${formattedSecs}`;
    }
};
