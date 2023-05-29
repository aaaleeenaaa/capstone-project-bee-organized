import ToDoList from "@/components/ToDoList";
import { StyledLink } from "@/components/StyledLinks";
import { StyledSection, StyledRowSection } from "@/components/StyledSections";
import { StyledEditDeleteButton } from "@/components/StyledButtons";
import { TiDeleteOutline } from "react-icons/ti";

export default function ToDoListPage({
  todos,
  setTodos,
  nextColonyChecks,
  setNextColonyChecks,
}) {
  const sortedChecks = nextColonyChecks.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  function handleDeleteClick(nextColonyCheckToDelete) {
    setNextColonyChecks(
      nextColonyChecks.filter(
        (nextColonyCheck) =>
          nextColonyCheck.colonyId !== nextColonyCheckToDelete.colonyId
      )
    );
  }

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
            <StyledEditDeleteButton
              onClick={() => handleDeleteClick(check)}
              icon={TiDeleteOutline}
              ariaLabel="delete"
              right="-4rem"
              padding="1rem 0 0 0"
            />
          </StyledRowSection>
        ))}
      </StyledSection>
    </>
  );
}
