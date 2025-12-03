import React, { Component } from "react";

class TodoComp extends Component {
  state = { todos: [], text: "" };

  render() {
    const addTodo = (e) => {
      e && e.preventDefault();
      const text = (this.state.text || "").trim();
      if (!text) return;
      const todo = { id: Date.now(), text, done: false };
      this.setState((prev) => {
        const prevTodos = Array.isArray(prev && prev.todos) ? prev.todos : [];
        return { todos: [...prevTodos, todo], text: "" };
      });
    };

    const deleteTodo = (id) => {
      this.setState((prev) => {
        const prevTodos = Array.isArray(prev && prev.todos) ? prev.todos : [];
        return { todos: prevTodos.filter((t) => t.id !== id) };
      });
    };

    const toggleTodo = (id) => {
      this.setState((prev) => {
        const prevTodos = Array.isArray(prev && prev.todos) ? prev.todos : [];
        return {
          todos: prevTodos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
        };
      });
    };

    {
      const todos = (this.state && this.state.todos) || [];
      const textValue = (this.state && this.state.text) || "";

      return (
        <div className="container bg-body-tertiary p-4 rounded-3 dev3">
          <form onSubmit={addTodo} className="mb-3 d-flex">
            <input
              type="text"
              className="p-2 mb-2 form-control"
              placeholder="What is your Goal..."
              value={textValue}
              onChange={(e) => this.setState({ text: e.target.value || "" })}
            />
            <button className="btn btn-primary ms-2 w-25" type="submit">
              Add Me
            </button>
          </form>

          <div className="ElementsRoot">
            {todos.length === 0 ? (
              <p className="text-muted">No Goals yet</p>
            ) : (
              <ul className="list-group">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={!!todo.done}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {todo.text}
                      </span>
                    </div>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    }
  }
}

export default TodoComp;
