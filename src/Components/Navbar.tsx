import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  console.log("navbar " + todosFilter);
  return (
    <nav>
      <Link href="/">All</Link>
      <Link href="/?todos=active">Active</Link>
      <Link href="/?todos=completed">Completed</Link>
    </nav>
  );
};

export default Navbar;
