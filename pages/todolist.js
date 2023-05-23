import ToDoList from "@/components/ToDoList";
import { StyledLink } from "@/components/StyledLinks";
import { StyledSection, StyledRowSection } from "@/components/StyledSections";

export default function ToDoListPage({ todos, setTodos, nextColonyChecks }) {
  const sortedChecks = nextColonyChecks.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <>
      <ToDoList todos={todos} setTodos={setTodos} />
      <StyledLink href="/addtodo" marginleft="17.5rem">
        Add ToDo
      </StyledLink>
      <StyledSection>
        <h4>Next colony checks:</h4>
        {sortedChecks.map((check, index) => (
          <StyledRowSection key={index}>
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
          </StyledRowSection>
        ))}
      </StyledSection>
    </>
  );
}
