import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {

    render() {
        return (
            <div 
            className = {`${this.props.data.completed ? 'complete' : 'pending'} `} 
            onClick = {() => this.props.toggleCompleted(this.props.data.id)}>

                <p>Task: {this.props.data.task}</p>
                <p>Completed: {this.props.data.completed ? `Complete` : 'Pending'}</p>
                <p>ID: {this.props.data.id}</p>
                
            </div>
        )
    }

}