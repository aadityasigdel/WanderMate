import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function UseEfect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("change : " ,{count});
        return () => {
            console.log("refresh");
        };
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>count : {count}</h1>
            <button id="increment" onClick={increment}>increment</button>
        </div>
    );
}

export default UseEfect;