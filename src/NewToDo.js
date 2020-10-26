import React, { Component } from 'react';

class NewToDo extends Component {

    state = { content: '' }

    handlechange = (e) => {
        this.setState({
            content: e.target.value
        }
        )
    }

   //  handlesubmit = (e) => {
    //    e.preventDefault()
     //   this.props.addTodo(this.state);
     //   this.setState({ content: '' })
         
    handlesubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state);
        this.setState({ content: '' })
    }
    render() {

        return (
            <div>

                <form onSubmit={this.handlesubmit}>
                    <label>Add New ToDo:</label>
                    <input type="text" onChange={this.handlechange} value={this.state.content} />
                </form>
            </div>
        )

    }

}
export default NewToDo;
