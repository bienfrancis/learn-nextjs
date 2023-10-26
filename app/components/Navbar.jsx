import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-2 bg-slate-600 justify-between text-white p-3">
      <h3>navbar</h3>
      <div className="flex gap-5">
        <Link href="/">Dashboard</Link>
        <Link href="/news">News</Link>
        <Link href="/news/latest">Latest</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
