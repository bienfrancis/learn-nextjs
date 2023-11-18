import Image from "next/image";
import Link from "next/link";
import Logo from "./eye.png";

const Navbar = () => {
  const links = [
    {
      link: "/",
      title: "Dashboard",
    },
    {
      link: "/news",
      title: "News",
    },
    {
      link: "/news/latest",
      title: "Latest",
    },
    {
      link: "/tickets",
      title: "Tickets",
    },
  ];

  return (
    <nav className="bg-slate-600  text-white p-3">
      <div className="container mx-auto flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={Logo}
            alt="Learn Next"
            width={30}
            quality={100}
            placeholder="blur"
          />
          <h3>Learn Next</h3>
        </div>
        <div className="flex gap-5">
          {links.map((item, i) => (
            <Link key={i} href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
