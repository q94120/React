// Simple React Snippets
// imrc
// cc
import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        // value: this.props.value
    } 
   
    render() { 
        return (
        <div>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>
            <button className="btn btn-outline-info btn-sm"
                onClick={ () => { this.props.onIncrement(this.props.order) } } >
                Increment
            </button>
            <button className="btn btn-outline-danger btn-sm"
                onClick={ () => {  this.props.onDelete(this.props.id) } }
                >
                Delete
            </button>

        </div>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return (this.props.value === 0) ? "Zero" : this.props.value;
    }
}
 
export default Counter;

