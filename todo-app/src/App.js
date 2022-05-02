import React, { Component, createRef } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

class App extends Component {
  state = {
    todos: [],
    searchInput: "",
    showEdit: false,
    position: null,
  };
  inputRef = createRef(null);

  componentDidMount() {
    this.inputRef.current.focus();
  }
  inputChangeHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.searchInput) {
      this.setState(
        {
          todos: [
            ...this.state.todos,
            {
              id: uuidv4(),
              value: this.state.searchInput,
            },
          ],
          searchInput: "",
        },
        () => {
          console.log(this.state.todos);
        }
      );
    }
    this.inputRef.current.focus();
    // Reset Input field
  };

  deleteHandler = (id) => {
    let deletdTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState(
      {
        ...this.state.todos,
        todos: deletdTodos,
      },
      () => {
        console.log(this.state.todos);
      }
    );
    
    this.inputRef.current.focus();
  };

  editHandler = (id, value) => {
    console.log(id, value);
    let pos = this.state.todos.findIndex((todo) => todo.id === id);
    // console.log(pos);
    this.inputRef.current.focus();

    this.setState({
      searchInput: value,
      showEdit: true,
      position: pos,
    });
  };

  saveHandler = () => {
    let temp = this.state.todos;
    console.log(this.state.todos);
    // temp.splice(1, this.state.position -1)
    temp = temp.filter((ele) => ele.id !== this.state.position);
    temp[this.state.position] = {
      id: this.state.position,
      value: this.state.searchInput,
    };
    this.setState(
      {
        showEdit: false,
        todos: temp,
        searchInput: "",
      },
      () => {
        console.log(this.state.todos);
      }
    );
    
    this.inputRef.current.focus();
  };

  render() {
    const { todos, searchInput, showEdit } = this.state;

    return (
      <div className="container">
        <h2>Todo App </h2>
        <TodoForm
          searchInput={searchInput}
          inputChangeHandler={this.inputChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          inputRef={this.inputRef}
          showEdit={showEdit}
          saveHandler={this.saveHandler}
        />
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <TodoList
              id={todo.id}
              value={todo.value}
              deleteHandler={this.deleteHandler}
              editHandler={this.editHandler}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default App;
