import StyledAddButton from "@/components/StyledButtons";
import ToDoList from "@/components/ToDoList";

export default function ToDoListPage({ todos, setTodos }) {
  return (
    <>
      <ToDoList todos={todos} setTodos={setTodos} />
      <StyledAddButton href={"/addtodo"} />
    </>
  );
}
