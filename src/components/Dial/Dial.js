import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid lightblue', margin:'10px',}}>
            <h3>This is Dial</h3>
            <p>steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;