export const ProgressBarComponent = ({valueBar}) => {

    console.log(valueBar);

    return (
        <>
            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75"
                 aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${valueBar}%`}}>{valueBar}%</div>
            </div>
        </>
    )
}
