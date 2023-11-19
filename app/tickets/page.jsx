import { Suspense } from "react";
import Todos from "./Todos";
import Loading from "../loading";

const Tickets = () => {
  return (
    <main>
      <h2>Tickets</h2>
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    </main>
  );
};

export default Tickets;
