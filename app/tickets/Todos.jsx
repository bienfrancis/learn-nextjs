async function getPosts() {
  const response = await fetch("API URL", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return response.json();
}

export default async function Todos() {
  //   const posts = await getPosts();

  return (
    <div className="grid grid-cols-5 gap-6">
      {/* {posts.map((post, i) => (
        <div className="py-4 px-5 rounded-md shadow-md bg-cyan-800 text-white">
          <h4 className="capitalize font-semibold text-xl mb-1">{post.name}</h4>
          <p>{post.username}</p>
          <small>{post.email}</small>
        </div>
      ))} */}
      <div className="py-4 px-5 rounded-md shadow-md bg-cyan-800 text-white">
        <h4 className="capitalize font-semibold text-xl mb-1">post.name</h4>
        <p>post.username</p>
        <small>post.email</small>
      </div>
    </div>
  );
}
