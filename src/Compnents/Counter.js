import React from 'react';
import { connect } from 'react-redux';


function Counter(props) {
    console.log(props);
    return (
        <div >
            <h1>Counter</h1>
            <p>Count :{props.count}</p>
            <button onClick={props.addOnClick}>Add</button>
            <button onClick={props.subtractOnClick}>Minus</button>
        </div>
    );
}

function mapStateToProps(state) {
    console.log(state);
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addOnClick: () => {
            console.log('+1')
            const action = { type: 'INCERMENT' };
            dispatch(action);
        },
        subtractOnClick: () => {
            console.log('-1');
            const action = { type: 'REDUCTION' };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);