import { useEffect, useState } from 'react';

export const MaxCount = () => {

    const [numClicks, setNumClicks] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        startTimer();

        // Función de limpieza para detener el intervalo cuando el componente se desmonta
        return () => clearInterval( window.intervalId);
    }, []); // Ejecutar solo una vez al montar el componente

    const addNumClicks = () => {
        if (timeLeft <= 0) return;
        setNumClicks((numClicks) => numClicks + 1);
    }

    const resetTime = () => {
        setTimeLeft(10);
        setNumClicks(0);
        clearInterval( window.intervalId);
        startTimer();
    }

    const startTimer = () => {
        window.intervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft <= 0) {
                    clearInterval( window.intervalId); // Detener el intervalo si el tiempo restante es menor o igual a cero
                    return 0; // Retornar cero para detener la cuenta regresiva
                } else {
                    return prevTimeLeft - 1; // Reducir el tiempo restante en uno
                }
            });
        }, 1000);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>No of Clicks until timer expires</h1>
                        <div className={'p-5'} style={{ backgroundColor: 'orange' }}>
                            <span className={"d-block fs-1 mb-5"}>{ numClicks }</span>
                            <span className={"d-block fs-1 mb-5"}>Time left: { timeLeft } seconds</span>
                            <button className={'btn-block btn btn-primary w-100'} onClick={addNumClicks}> + </button>
                            <button className={'d-block btn btn-primary'} onClick={resetTime}> Reset </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
