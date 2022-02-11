import React, { useState } from "react";
import { AppContext } from '../../providers/AppContext';
import { Child1 } from "./Child1";





export const App = () => {

    const [test, setTest] = useState('test value stored as default')

    const testContext = {
        test,
        setTest
    };

    return (
        <AppContext.Provider value={testContext}>
            <Child1 />
        </AppContext.Provider>
    )
}