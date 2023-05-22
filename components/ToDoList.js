import styled from "styled-components";
import { StyledList } from "./StyledList";
import { StyledEditDeleteButton } from "./StyledButtons";
import { TiDelete } from "react-icons/ti";

const StyledTodoListElement = styled.li`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  list-style-type: none;
  font-size: 1.4rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledTodoLabel = styled.label`
  margin-right: 1rem;
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
            <StyledTodoLabel htmlFor="todo">{todo?.todo}</StyledTodoLabel>
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
              padding="0.3rem 0 0 0"
              right="-4rem"
            />
          </StyledTodoListElement>
        );
      })}
    </StyledList>
  );
}
