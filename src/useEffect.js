import React, { useEffect, useState } from 'react';

const UseEffectFn = () => {
    const [count, changeCount] = useState(0);
    useEffect(() => {
        console.log("Her zaman çalışır.");
    });
    useEffect(() => {
        console.log("İlk renderda çalışır.");
    }, []);
    useEffect(() => {
        console.log("İlk render edildiğinde ve countta her değişiklik olduğunda.");
    }, [count]);
    return (
        <>
            <h1>useEffect</h1>
            <h2>{count}</h2>
            <button onClick={() => changeCount(count + 1)}>Count</button>
        </>
    )
}

export default UseEffectFn;