import React from 'react';
import { connect } from 'react-redux';


function Counter(props) {
    console.log(props);
    return (
        <div >
            <h1>Counter</h1>
            <p>Count :{props.count}</p>
            <button onClick={props.handleClick}>Add</button>
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
        handleClick: () => {
            console.log('hi');
            const action = { type: 'INCERMENT' };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);