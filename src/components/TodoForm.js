import React from 'react';

export default class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            inputVal: ''
        }
    }

    handleChanges = (e) => {
        this.setState({
        inputVal: e.target.value
        });
        console.log(this.state.inputVal);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.inputVal);
        this.setState({
            inputVal: ''
        });

    }

    render() {
        return (

            <form onSubmit = {this.handleSubmit}>
                <input value = {this.state.inputVal} onChange = {this.handleChanges}/>
                <button type = 'submit'>Add</button>
                <button type = 'button' onClick = {() => this.props.clearCompleted()}>Clear Completed</button>
            </form>

        )
    }

}