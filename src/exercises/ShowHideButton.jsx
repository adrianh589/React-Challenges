import './App.css'
import { useState } from 'react';

export default function ShowHideButton() {

    const [show, setShow] = useState( false );

    const showHide = () => {
        console.log("Di click en el botón");
        setShow( !show );
        console.log(show);
    }

    return (
        <>
            <button onClick={showHide}>
                Show/Hide
            </button>

            { show
                ? <div className="App">
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
                : null
            }

        </>
    );
}
