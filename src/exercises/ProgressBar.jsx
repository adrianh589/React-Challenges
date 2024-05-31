import { ProgressBarComponent } from './ProgressBarComponent.jsx';
import { useState } from 'react';

export const ProgressBar = () => {

    const [value, setValue] = useState( 50 );

    const setValuer = (event) => setValue(event.target.value);


    return (
        <>
            <div className="container">
                <div className="progress-bar">
                    <h1>Progress bar</h1>
                    <ProgressBarComponent valueBar={value}/>
                    <form>
                        <label htmlFor="html">Input Percentage:</label>
                        <input type="number" onChange={ setValuer }/>
                    </form>
                </div>
            </div>
        </>
    );
}
