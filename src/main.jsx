import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import ShowHideButton from './ShowHideButton.jsx'
// import StopWatchTimer from './exercises/StopWatchTimer.jsx';
// import CitiesList from './exercises/CitiesList.jsx';
// import { ProgressBar } from './exercises/ProgressBar.jsx';
// import { DataForm } from './exercises/DataForm.jsx';
import { MaxCount } from './exercises/MaxCount.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<ShowHideButton />*/}
    {/*  <StopWatchTimer />*/}
    {/*  <CitiesList />*/}
    {/*  <ProgressBar />*/}
    {/*  <DataForm />*/}
      <MaxCount />
  </React.StrictMode>
)
