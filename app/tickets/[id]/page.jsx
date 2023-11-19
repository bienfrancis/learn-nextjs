import { notFound } from "next/navigation";

async function getUser(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id, {
  const res = await fetch("API URL" + id, {
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function UserDetails({ params }) {
  const user = await getUser(params.id);
  return (
    // <div>
    //   <h4>{user.name}</h4>
    //   <p>{user.username}</p>
    //   <small>{user.website}</small>
    // </div>
    <div>
      <h4>user.name</h4>
      <p>user.username</p>
      <small>user.website</small>
    </div>
  );
}
