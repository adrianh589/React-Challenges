import { useState } from 'react';

export default function StopWatchTimer() {

    const [seconds, setSeconds] = useState( 0 );

    const startTimer = () => {
        // Complete this function
            window.mytimer = setInterval( () => {
                setSeconds( seconds => seconds + 1);
            }, 1000 );
    };

    const stopTimer = () => {
        // Complete this function
        clearInterval(window.mytimer);
    };

    const resetTimer = () => {
        // Complete this function
        setSeconds(0);
    };

    return (
        <div className="container">
            <h1>Timer</h1>
            <span> { Math.trunc(seconds / 60) } mins </span>
            <span> { seconds % 60 } secs</span>
            <div>
                <button onClick={ startTimer }>Start</button>
                <button onClick={ stopTimer }>Stop</button>
                <button onClick={ resetTimer }>Reset</button>
            </div>
        </div>
    );
}
