import ToDoList from "@/components/ToDoList";
import Link from "next/link";
import styled from "styled-components";

const StyledToDoLink = styled(Link)`
  margin-left: 18rem;
`;

export default function ToDoListPage({ todos, setTodos, nextColonyChecks }) {
  const sortedChecks = nextColonyChecks.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <>
      <ToDoList todos={todos} setTodos={setTodos} />
      <StyledToDoLink href="/addtodo">Add ToDo</StyledToDoLink>
      <h5>Next colony checks:</h5>
      {sortedChecks.map((check, index) => (
        <div key={index}>
          <p>
            {new Date(check.date).toLocaleDateString("de-DE", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}{" "}
            - {check.colonyName}
          </p>
        </div>
      ))}
    </>
  );
}
