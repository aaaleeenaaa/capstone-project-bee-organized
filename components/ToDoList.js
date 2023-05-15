import styled from "styled-components";
import { StyledList } from "./StyledList";
import { StyledEditDeleteButton } from "./StyledButtons";
import { TiDelete } from "react-icons/ti";

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

  function handleDeleteClick(todoToDelete) {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
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
            <StyledEditDeleteButton
              onClick={() => handleDeleteClick(todo)}
              icon={TiDelete}
              ariaLabel={"delete"}
              padding="0.2rem 0.5rem 0 0.3rem"
            />
          </StyledTodoListElement>
        );
      })}
    </StyledList>
  );
}
