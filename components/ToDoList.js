import styled from "styled-components";
import { StyledList } from "./StyledList";

const StyledTodoListElement = styled.li`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  list-style-type: none;
`;

export default function ToDoList({ todos, setTodos }) {
  function handleTodoToggle(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  return (
    <StyledList>
      {todos.map((todo) => {
        return (
          <StyledTodoListElement key={todo.id} completed={todo.completed}>
            <label htmlFor="todo">{todo?.todo}</label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoToggle(todo.id)}
              id="todo"
              name="todo"
            />
          </StyledTodoListElement>
        );
      })}
    </StyledList>
  );
}
