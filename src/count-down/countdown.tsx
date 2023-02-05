import React, {useEffect, useState} from 'react';

interface Props {
    timeOut?: number;
    cb?: Function;
    className?: string;
    shouldReset?: boolean;
}

export default function Countdown(props: Props): JSX.Element {
    const {timeOut = 2, cb, className = '', shouldReset} = props;

    const [minutes, setMinutes] = useState<unknown>(0);
    const [seconds, setSeconds] = useState<unknown>(0);

    const futureDate = new Date(new Date().getTime() + timeOut * 60000);
    const countDownDate = new Date(futureDate).getTime();
    const oneHourDuration = 1000 * 60 * 60;
    const oneMinDuration = 1000 * 60;
    let time;

    const setTimer = () => {
        // Update the countdown every 1 second
        let counter = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;

            setMinutes(handleDate('min', distance));
            setSeconds(handleDate('sec', distance));

            // When the countdown is over
            if (distance < 0) {
                clearInterval(counter);

                setMinutes(0);
                setSeconds(0);

                cb?.();
            }
        }, 1000);
    };

    const handleDate = (type: string, distance: number) => {
        switch (type) {
            case 'day':
                time = distance / (oneHourDuration * 24);
                break;
            case 'hour':
                time = (distance % (oneHourDuration * 24)) / oneHourDuration;
                break;
            case 'min':
                time = (distance % oneHourDuration) / oneMinDuration;
                break;
            case 'sec':
                time = (distance % oneMinDuration) / 1000;
                break;
            default:
                return;
        }

        return Math.floor(time);
    };

    const formatSeconds = () => {
        if (seconds) return seconds > 9 ? seconds : '0' + seconds;
        else return '00';
    };

    useEffect(setTimer, []);

    useEffect(setTimer, [shouldReset]);

    return (
        <span className={className}>
      {minutes}:{formatSeconds()}
    </span>
    );
}
