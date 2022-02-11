import React, { useContext } from "react";
import { AppContext } from '../../providers/AppContext';



export const Child1 = () => {

    const { test, setTest } = useContext(AppContext);


    const handleSetTest = () => {
        setTest('new value')
    }





    return (
        <div>
            <h1>App</h1>
            <h2>{test}</h2>
            <button onClick={handleSetTest}>Click Me!</button>
        </div>
    )
}


