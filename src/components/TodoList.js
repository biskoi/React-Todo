import React from 'react';
import Todo from './Todo';
export default class TodoList extends React.Component {

    constructor() {
        super();
        // console.log(this);
        // this.state = {
        //     tasks: this.props.tasks
        // }
    }

    render() {
        return (
            <div>
                {this.props.tasks.map(item => (
                    <Todo data = {item} toggleCompleted = {this.props.toggleCompleted}/>
                ))}
            </div>
        );
    }

}