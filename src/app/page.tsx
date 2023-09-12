"use client"
import AddToDo from "@/Components/AddToDo";
import Navbar from "@/Components/Navbar";
import Todos from "@/Components/Todos";

const page = () => {
  return (
    <main>
      <h2>NEXT + TypeScript </h2>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default page;
