import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-128px)] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-7xl font-black text-violet-400">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
