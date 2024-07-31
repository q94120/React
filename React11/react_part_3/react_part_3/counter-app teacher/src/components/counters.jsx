import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 3 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    } 
    render() { 
        return (
        <div>
            <button className="btn btn-outline-success btn-md"
                onClick={ this.handleReset }
            >
                Reset
            </button>
        { 
            this.state.counters.map( 
                (counter, index) => <Counter 
                                key={counter.id} 
                                value={counter.value}
                                id={counter.id}
                                onDelete={this.deleteItem}
                                order={index}
                                onIncrement={this.incrementCount}
                           /> ) 
        }
        </div>
        );
    }

    incrementCount = (order) => {
        var newState = {...this.state};
        newState.counters[order].value += 1;
        this.setState(newState);
    }

    deleteItem = (deletedId) => {
        var newState = {...this.state};
        newState.counters = this.state.counters.filter( x => x.id !== deletedId);
        this.setState(newState);
    }

    handleReset = () => {
        var newState = {...this.state};
        for (let i = 0; i < newState.counters.length; i++) {
            newState.counters[i].value = 0;
        }  
        this.setState(newState);
        console.log(newState.counters);
    }
}
 
export default Counters;