import AddToDo from "@/Components/AddToDo";
import Todos from "@/Components/Todos";

const page = () => {
  return (
    <main>
      <h2>NEXT + TypeScript </h2>
      <AddToDo />
      <Todos />
    </main>
  );
};

export default page;
