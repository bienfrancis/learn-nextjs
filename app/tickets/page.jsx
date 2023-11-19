import { Suspense } from "react";
import Todos from "./Todos";
import Loading from "../loading";
import Link from "next/link";

const Tickets = () => {
  return (
    <div>
      <h2>Tickets</h2>
      <button classname="p-2 rounded-md shadow-lg bg-indigo-600 text-white cursor-pointer">
        <Link href="/tickets/create">Add New User</Link>
      </button>
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Tickets;
