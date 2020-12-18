import React, {useEffect, useState} from 'react';

const Example = () => {
    //1at variable is a getter
    //2nd variable is a setter
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        if (count = 5) {
            alert = 'Looks like we got a clicker here';
        }
    })



    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>

        </div>
    );
}

export default Example;