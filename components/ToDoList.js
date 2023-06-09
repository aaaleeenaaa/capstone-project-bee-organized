import styled from "styled-components";
import { StyledList } from "./StyledList";
import { StyledEditDeleteButton } from "./StyledButtons";
import { StyledLabel } from "./StyledFormElements";
import { TiDeleteOutline } from "react-icons/ti";

const StyledTodoListElement = styled.li`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  list-style-type: none;
  position: relative;
  width: 18rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  display: flex;
  white-space: pre-wrap;
  word-break: break-word;
  display: flex;
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
            <StyledEditDeleteButton
              onClick={() => handleDeleteClick(todo)}
              icon={TiDeleteOutline}
              ariaLabel="delete"
              padding="0.1rem 0 0.5rem 0"
              right="18rem"
            />
            <StyledLabel
              htmlFor="todo"
              marginright="1rem"
              marginleft="1rem"
              fontweight="normal"
            >
              {todo?.todo}
            </StyledLabel>
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
