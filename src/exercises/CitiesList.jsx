/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

import { useState } from 'react';

export default function CitiesList() {

    const [cities, setCities] = useState( [] );
    const [input, setInput] = useState( '' );

    const addCities = () => {
        if( input.trim().length > 2 ){
            setCities( [...cities, input.trim()] );
            // console.log( cities );
            setInput('');
        }
    };

    const onChangeInput = ( event ) => {
        setInput( event.target.value );
    }

    const deleteCity = (key) => {
        const filteredCities = cities.filter( (_, index) => index !== key );
        setCities(filteredCities);
    }

    return (
        <div className="todo-list">
            <input value={input} onChange={ onChangeInput } placeholder="Enter city name"/>
            <button onClick={ addCities }>Add</button>

            <ul>
                { cities.map( ( city, key ) => (
                    <li key={ key }>
                        { city }
                        <button onClick={ () => deleteCity(key) }>X</button>
                    </li>
                ) ) }
            </ul>

        </div>
    );
}
