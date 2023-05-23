import ToDoList from "@/components/ToDoList";
import { StyledLink } from "@/components/StyledLinks";
import { StyledSection } from "@/components/StyledSections";

export default function ToDoListPage({ todos, setTodos, nextColonyChecks }) {
  const sortedChecks = nextColonyChecks.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <>
      <ToDoList todos={todos} setTodos={setTodos} />
      <StyledLink href="/addtodo" marginleft="18rem">
        Add ToDo
      </StyledLink>
      <StyledSection>
        <h5>Next colony checks:</h5>
        {sortedChecks.map((check, index) => (
          <div key={index}>
            <p>
              {new Date(check.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}{" "}
              -{" "}
              <StyledLink href={`/colonydetail/${check.colonyId}`}>
                {check.colonyName}
              </StyledLink>
            </p>
          </div>
        ))}
      </StyledSection>
    </>
  );
}
