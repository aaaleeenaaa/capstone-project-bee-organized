import StyledAddButton from "@/components/StyledAddLink";
import ToDoList from "@/components/ToDoList";

export default function ToDoListPage({ todos, setTodos }) {
  return (
    <>
      <ToDoList todos={todos} setTodos={setTodos} />
      <StyledAddButton href={"/addtodo"} />
    </>
  );
}
