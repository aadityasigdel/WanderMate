import React from "react";
import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl p-2 text-blue-700">counter : {count}</p>
            <button className="border text-2xl border-black shadow-sm shadow-black p-3 hover:shadow-md" onClick={increment}>Incerement</button>
        </div>
    );
}
 