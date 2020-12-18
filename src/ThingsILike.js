import React from 'react';

const ThingsILike = () => {
    const myThingsILike = ['Star Trek', 'Chicago Bears', 'Chicago Cubs', 'Music'];
    const listItems = myThingsILike.map(thing =>
        <li>{thing}</li>
        );
    return (
        <ul>{listItems}</ul>
    )
}

export default ThingsILike;