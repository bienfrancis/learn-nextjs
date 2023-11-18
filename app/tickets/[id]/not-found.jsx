import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl">
        This is a custom 404 page for a specific page
      </h1>
      <small className="mb-6">
        to create a 404 page; name the file as not-found.jsx its the standard
      </small>
      <p className="mt-5">
        Return to{" "}
        <Link href="/tickets" className="underline">
          Users
        </Link>
      </p>
    </div>
  );
}
